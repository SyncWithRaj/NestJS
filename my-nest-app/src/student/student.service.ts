import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Raj", age: 19 }, // Index value is 0
        { id: 2, name: "Ankit", age: 18 },  // Index value is 1
    ];

    // GET
    getAllStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((s) => s.id === id);
        if (!student) {
            throw new NotFoundException('Student not Found!')
        }
        return student;
    }

    //POST
    createStudent(data: {
        name: string;
        age: number
    }) {
        const newStudent = {
            id: Date.now(),
            ...data,
        }
        this.students.push(newStudent)
        return newStudent
    }

    // PUT
    updateStudent(id: number, data: {
        name: string;
        age: number
    }) {
        const index = this.students.findIndex((s) => s.id === id) // you can use this or can use getStudentById method directly
        if (index === -1) {  // equal to -1 bcz it return -1 when no data found
            throw new NotFoundException('Student not Found!')
        }
        this.students[index] = { id, ...data };
        return this.students[index]
    }

    // PATCH
    patchStudent(id: number, data: Partial<{  // Use JS Partial for select partial thing not whole thing
        name: string;
        age: number
    }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // DELETE
    deleteStudent(id: number) {
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) {
            throw new NotFoundException('Student not Found!');
        }
        const deleted = this.students.splice(index, 1); //(index, 1) means only remove that element if (index, 2) this means remove this element and next element(index + 1) also. AND splice() method return an array so below returned that array index value or element
        return { message: 'Student Deleted', student: deleted[0] };
    }
}