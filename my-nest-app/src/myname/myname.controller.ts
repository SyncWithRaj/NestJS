import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom')
    transformName(@Body('name', new UppercasePipe()) name: string) {
        return { message: `Received name: ${name}` }
    }
}
