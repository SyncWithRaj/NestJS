import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './Schemas/book.schema';
import { Model } from 'mongoose';
import { Library } from './Schemas/library.schema';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>,
    ){}

    async createLibrary(): Promise<Library>{
        const book1 = await this.bookModel.create({
            title:'JS ka champion', author: 'Raj'
        })
        const book2 = await this.bookModel.create({
            title:'TS ka champion', author: 'Ankit'
        })
        const library = new this.libraryModel({
            name:'Central library',
            books: [book1._id, book2._id]
        })

        return library.save();
    }

    async getLibraries(): Promise<Library[]>{
        return this.libraryModel.find().populate('books') 
    }
}
