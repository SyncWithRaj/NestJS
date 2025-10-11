import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: "Mobile", price: 20000 },
        { id: 2, name: "Tablet", price: 40000 },
        { id: 3, name: "Mobile", price: 60000 }
    ];

    getAllProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find((product) => product.id === id)
    }
}
