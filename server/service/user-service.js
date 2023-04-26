const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password, role, backgroundImage) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();   // uniq str

        const user = await UserModel.create({email, password: hashPassword, activationLink, role: role, backgroundImage: backgroundImage})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if(!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации ')
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        console.log(user)
        if(!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);

        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async getAllUsers() {
        const users = await UserModel.find();
        if(!users) {
            throw ApiError.BadRequest('Пользователей нет в базе данных')
        }
        return users;
    }

    async setStatusCandidate(_id, statusCandidate) {
        const user = await UserModel.findById(_id);
        if(!user) {
            throw ApiError.BadRequest('Данный пользователь не найден')
        }

        const candidate = await UserModel.findByIdAndUpdate(_id, {statusCandidate: statusCandidate})
        return await UserModel.findById(_id)
    }

    async createCandidate(firstname, secondname, email, phoneNumber, departament, gender) {
        const candidate = await UserModel.findOne({email: email})
        if(candidate) {
            throw ApiError.BadRequest('Аккаунт на данную почту уже был создан');
        }
        const user = await UserModel.create({firstname, secondname, email, phoneNumber, departament, gender})
        return user
    }
    async createCandidateById(_id, password, statusCandidate) {
        const hashPassword = await bcrypt.hash(password, 3);
        const candidate = await UserModel.findByIdAndUpdate(_id, {password: hashPassword, statusCandidate: statusCandidate})
        console.log(statusCandidate)
        console.log(candidate)
        return await UserModel.findById(_id)
    }

    async getUserById(_id) {
        console.log('_id')
        console.log(_id)
        const user = await UserModel.findById(_id)
        return user
    }

    async editUser(_id, _email, _password, _firstname, _secondname, _imageUrl, _backgroundImage, _gender, _departament, _location, _phoneNumber, _skills, _project, _birthDay, _hiredDate, _firedDate) {
        const user = await UserModel.findByIdAndUpdate(_id, {
            email: _email,
            password: _password,
            firstname: _firstname,
            secondname: _secondname,
            imageUrl: _imageUrl,
            backgroundImage: _backgroundImage,
            gender: _gender,
            departament: _departament,
            location: _location,
            phoneNumber: _phoneNumber,
            skills: _skills,
            projectHisory: _project,
            birthDay: _birthDay,
            hiredDate: _hiredDate,
            firedDate: _firedDate
        })
        return await UserModel.findById(_id)
    }

    async editBackground(id, backgroundImage) {
        console.log(id + '' + backgroundImage)
        const user = await UserModel.findByIdAndUpdate(id, {backgroundImage: backgroundImage});
        return user
    }
    async editImage(id, imageUrl) {
        console.log(id + '' + imageUrl)
        const user = await UserModel.findByIdAndUpdate(id, {imageUrl: imageUrl});
        return user
    }

    async resetPassword(_id, password) {
        const hashPassword = await bcrypt.hash(password, 3);
        const candidate = await UserModel.findByIdAndUpdate(_id, {password: hashPassword})
        return await UserModel.findById(_id)
    }

    async deleteOne(_id) {
        const vacation = await UserModel.findByIdAndDelete(_id)
        console.log(vacation)
        if(!vacation){
            throw ApiError.BadRequest(`Данного пользователя не существует`)
        }
        return vacation
    }

    async byField(users, field) {
        return users.sort(function(x1, x2) {
            var i1 = field.indexOf(x1.name),
                i2 = field.indexOf(x2.name);
            return i1 < 0 ? 1 : i2 < 0 ? -1 : i1 - i2;
          })
      }
    async sortUsers(sortBy) {
        let sortUsers = await UserModel.find()
        if(!sortUsers) {
            throw ApiError.BadRequest('Пользователи не заданы в базу данных')
        }
        sortUsers.sort(this.byField(sortUsers, sortBy))
        console.log(sortUsers)
        return sortUsers;
    }

    async createUser(email, password, role) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();   // uniq str

        const user = await UserModel.create({email, password: hashPassword, activationLink, role: role})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return user;
    }
}

module.exports = new UserService();