import { Post, Body, ValidationPipe, Put, Delete, Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProduct } from './dto/createproducts.dto';
import { UpdateProduct } from './dto/updateproduct.dto';


@Controller('products')

export class ProductsController {

    constructor( private productsService: ProductsService ){}

    @Post()
    async create( @Body( new ValidationPipe() ) createdProduct: CreateProduct ){
        return this.productsService.create( createdProduct );
    }

    @Put(':id')
    async update( @Param('id') id: string, @Body( new ValidationPipe() ) updateProduct:UpdateProduct ){
        return this.productsService.update(id,updateProduct);
    }

    @Get()
    async findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne( @Param('id') id: string ){
        return this.productsService.findOne( id );
    }

    @Delete(':id')
    async delete( @Param('id') id: string ){
        return this.productsService.delete( id );
    }

}