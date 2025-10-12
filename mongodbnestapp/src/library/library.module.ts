import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './Schemas/library.schema';
import { Book, BookSchema } from './Schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Library.name, schema:LibrarySchema},
      {name: Book.name, schema:BookSchema}
    ])
  ], 
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
