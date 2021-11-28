import { Product } from "./product";
import { Injectable, ServiceLifetime } from 'tiny-injector';

@Injectable({
    lifetime: ServiceLifetime.Singleton
})
export class ProductService {
    private products = [
        new Product(0, 10, 'iPhone'),
        new Product(1, 20, 'MacBook'),
        new Product(2, 30, 'MacPro'),
    ];

    getProducts() {
        return this.products;
    }

    addProduct(product: Product) {
        product.id = this.products.length;
        this.products.push(product);
    }

    updateProduct(product: Product) {
        const productIndex = this.products.findIndex(it => it.id === product.id);
        if (productIndex < 0) {
            throw new Error(`Cannot find product with id ${ product.id }`);
        }
        this.products.splice(productIndex, 1, product);
    }

}