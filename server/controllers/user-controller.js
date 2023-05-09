const { validationResult } = require('express-validator');
const userService = require('../service/user-service');
const ApiError = require('../exceptions/api-error')

class UserController {
    async registration(req, res, next) {
        try{
            console.log('registration')
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password, role, backgroundImage} = req.body;
            const userData = await userService.registration(email, password, role, backgroundImage);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*25*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try{
            console.log('hi');
            console.log(req.body);
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*25*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try{
            console.log('hi');
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token)
        }
        catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try{
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL)
        }
        catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try{
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*25*60*60*1000, httpOnly: true})
            return res.json(userData)
        }
        catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try{
            const users = await userService.getAllUsers();
            res.json(users);
        }
        catch (e) {
            next(e);
        }
    }

    async editBackground(req, res, next) {
        try{
            const {_id, backgroundImage} = req.body;
            const user = await userService.editBackground(_id, backgroundImage);
            res.json(user)
        }
        catch (e) {
            next(e);
        }
    }

    async editImage(req, res, next) {
        try{
            const {_id, imageUrl} = req.body;
            const user = await userService.editImage(_id, imageUrl);
            res.json(user)
        }
        catch (e) {
            next(e);
        }
    }

    async editUser(req, res, next) {
        try{
            const {_id ,email, password, firstname, secondname, imageUrl, backgroundImage, gender, departament, location, phoneNumber, skills, birthDay, hiredDate, firedDate} = req.body;
            const user = await userService.editUser(_id, email, password, firstname, secondname, imageUrl, backgroundImage, gender, departament, location, phoneNumber, skills, birthDay, hiredDate, firedDate);
            res.json(user)
        } catch(e) {
            next(e);
        }
    }

    async getUserById(req, res, next) {
        try{
            const {_id} = req.params;
            const user = await userService.getUserById(_id)
            res.json(user)
        } catch(e) {
            next(e)
        }
    }

    async setStatusCandidate(req, res, next) {
        try{
            const { _id, statusCandidate } = req.body;
            const user = await userService.setStatusCandidate(_id, statusCandidate)
            res.json(user)
        } catch(e) {
            next(e)
        }
    }
    async createCandidate (req, res, next) {
        try{
            const {firstname, secondname, email, phoneNumber, departament, gender} = req.body;
            const user = await userService.createCandidate(firstname, secondname, email, phoneNumber, departament, gender)
            res.json(user)
        } catch(e) {
            next(e)
        }
     }

     async createEmployeeByCandidate (req, res, next) {
        try{
            const {_id, password, statusCandidate} = req.body;
            const candidate = await userService.createCandidateById(_id, password, statusCandidate)
            res.json(candidate)
        }
        catch(e) {
            next(e)
        }
     }

     async resetPassword (req, res, next) {
        try{
            const {_id, password} = req.body;
            const user = await userService.resetPassword(_id, password)
            console.log(user)
            res.json(user)
        } catch (e) {
            next(e)
        }
     }

     async del(req, res, next) {
        try{
            const { _id } = req.body;
            const user = await userService.deleteOne(_id)
            return res.json(user)
        }
        catch (e) {
            next(e);
        }
    }

    async sortAllUsers(req, res, next) {
        try{
            const {sort} = req.body;
            const users = await userService.sortUsers(sort)
            return res.json(users)
        }
        catch (e) {
            next(e);
        }
    }

    async createUser(req, res, next) {
        try{
            console.log('createUser')
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password, role} = req.body;
            const userData = await userService.createUser(email, password, role);
            return res.json(userData)
        }
        catch (e) {
            next(e);
        }
    }

    async editUserBirthday(req, res, next) {
        try{
            console.log('edit birthDay')
            const {_id, birthday} = req.body;
            console.log(birthday)
            const user = await userService.editUserBirthdayById(_id, birthday)
            return res.json(user)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();