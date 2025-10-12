import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(): Promise<User> {
        const user = new this.userModel({
            name: 'Raj Ribadiya',
            address: {
                streat: '123 Street',
                city: 'Navsari',
            }
        })
        return user.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find()
    }
}
