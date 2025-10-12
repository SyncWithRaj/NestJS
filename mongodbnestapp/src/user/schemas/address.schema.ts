import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Address{
    @Prop()
    streat: string;

    @Prop()
    city: string;
}