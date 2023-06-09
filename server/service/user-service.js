const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenService = require('./token-service')
const mainVacationDurationModel = require('../models/mainVacationDuration-model')
const vacationService = require('../service/vacation-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password, role, statusCandidate, birthDay, hiredDate) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({email: email, password: hashPassword, role: role, statusCandidate: statusCandidate, birthDay: birthDay, hiredDate: hiredDate})

        const userDto = new UserDto(user); // id, email
        const mainVacationDuration = await mainVacationDurationModel.findOne({name: 'Стандартный'})
        const vacation = await vacationService.create(userDto._id, mainVacationDuration._id)

        return user
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
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

        const user = await UserModel.findById(userData._id);
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

    async createCandidate(firstname, secondname, email, phoneNumber, position, location, gender, birthDay, role, statusCandidate) {
        const candidate = await UserModel.findOne({email: email})
        if(candidate) {
            throw ApiError.BadRequest('Аккаунт на данную почту уже был создан');
        }
        const user = await UserModel.create({firstname, secondname, email, phoneNumber, position, location, gender, birthDay, role, statusCandidate})
        return user
    }
    async createEmployeeByCandidateId(_id, password, statusCandidate) {
        const hashPassword = await bcrypt.hash(password, 3);
        const candidate = await UserModel.findByIdAndUpdate(_id, {password: hashPassword, statusCandidate: statusCandidate, hiredDate: new Date})
        const mainVacationDuration = await mainVacationDurationModel.findOne({name: 'Стандартный'})
        const vacation = await vacationService.create(_id, mainVacationDuration._id)
        return await UserModel.findById(_id)
    }

    async getUserById(_id) {
        const user = await UserModel.findById(_id)
        return user
    }

    async editUser(_id, position, location, email, firstname, secondname, gender, phoneNumber) {
        const user = await UserModel.findByIdAndUpdate(_id, {
            position: position,
            location: location,
            email: email,
            firstname: firstname,
            secondname: secondname,
            gender: gender,
            phoneNumber: phoneNumber
        })
        return await UserModel.findById(_id)
    }

    async editImage(id, image) {
        await UserModel.findByIdAndUpdate(id, {image: image});
        return await UserModel.findById(id)
    }

    async resetPassword(_id, password) {
        const hashPassword = await bcrypt.hash(password, 3);
        const candidate = await UserModel.findByIdAndUpdate(_id, {password: hashPassword})
        return await UserModel.findById(_id)
    }

    async deleteOne(_id) {
        const user = await UserModel.findByIdAndDelete(_id)
        if(!user){
            throw ApiError.BadRequest(`Данного пользователя не существует`)
        }
        return user
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

    async addUserBirthdayById(_id, birthDay) {
        const candidate = await UserModel.findById(_id)
        if (!candidate) {
            throw ApiError.BadRequest(`Даннного пользователя ${email} не существует`)
        }
        const user = await UserModel.findByIdAndUpdate(_id, {birthDay: birthDay});
        return await UserModel.findById(_id)
    }
}

module.exports = new UserService();