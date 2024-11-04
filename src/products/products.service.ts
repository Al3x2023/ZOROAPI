import { Injectable } from '@nestjs/common';
import { Products } from './schema/products.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProduct } from './dto/createproducts.dto';
import { UpdateProduct } from './dto/updateproduct.dto';


@Injectable()
export class ProductsService {

    constructor(
        @InjectModel( Products.name ) private ProductsModel : Model<Products>
    ){}

    async create( student: CreateProduct ){
        const createdProduct = new this.ProductsModel( student );
        return createdProduct.save();
    }

    async update( id: string, student: UpdateProduct ){
        return this.ProductsModel.findByIdAndUpdate( id, student, {
            new: true,
        })
        .exec();
    }

    async findOne( id: string ){
        return this.ProductsModel.findById( id ).exec();
    }
    
    async findAll(){
        return this.ProductsModel.find().exec();
    }

    async delete( id: string ){
        return this.ProductsModel.findByIdAndDelete( id ).exec();
    }
}