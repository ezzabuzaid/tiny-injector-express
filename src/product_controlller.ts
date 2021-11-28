import { Injectable, ServiceLifetime } from "tiny-injector";
import { Product } from "./product";
import { ProductService } from "./product_service";


@Injectable({
    lifetime: ServiceLifetime.Scoped
})
export class ProductController {
    constructor(
        private productService: ProductService
    ) { }

    getProducts() {
        return this.productService.getProducts();
    }

    addProduct(product: Product) {
        return this.productService.addProduct(product);
    }

    updateProduct(product: Product) {
        return this.productService.updateProduct(product);
    }

}
