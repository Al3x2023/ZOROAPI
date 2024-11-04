import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export enum ProductStatus {
    NoDisponible = 'No Disponible',
    Disponible = 'Disponible',
    PorAgotarse = 'Por Agotarse',
    PorComprar = 'Por Comprar',
}

@Schema()
export class Products extends Document {

    @Prop()
    number?: string;

    @Prop()
    code?: string;

    @Prop()
    name?: string;

    @Prop()
    pieces?: string;

    @Prop()
    presentation?: string;

    @Prop()
    quantity?: string;

    @Prop()
    grammage?: string;

    @Prop()
    price?: string;

    @Prop()
    description?: string;

    @Prop()
    startdate?: string;

    @Prop()
    enddate?: string;

    @Prop({ default: ProductStatus.Disponible })
    status?: ProductStatus;

}

export const ProductsSchema = SchemaFactory.createForClass(Products);