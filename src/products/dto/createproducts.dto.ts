import { IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductStatus } from '../schema/products.schema';


export class CreateProduct {

    @IsString()
    @IsOptional()
    number?: string;

    @IsString()
    @IsOptional()
    code?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    pieces?: string;

    @IsString()
    @IsOptional()
    presentation?: string;

    @IsString()
    @IsOptional()
    quantity?: string;

    @IsString()
    @IsOptional()
    grammage?: string;

    @IsString()
    @IsOptional()
    price?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    startdate?: string;

    @IsString()
    @IsOptional()
    enddate?: string;

    @IsOptional()
    status?: ProductStatus;

}
