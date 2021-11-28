import express from 'express';
import { Injector, ServiceLifetime, ServiceType } from 'tiny-injector';
import { ProductController } from './product_controlller';

const application = express();

application.listen('8080', () => {
    console.log(`${ new Date() }: Server running at http://localhost:8080`);
});

/**
 * Add injector setup middleware
 */
application.use((req, res, next) => {
    const context = Injector.Create();
    const dispose = () => Injector.Destroy(context);
    // At the end the current request, everything related to that context should be garbage collected
    // so you need to make sure that you let that happen by calling dispose function

    ['error', 'end'].forEach((eventName) => {
        req.on(eventName, dispose);
    })

    // Helper function to be able to retrieve services easily
    req.locate = (serviceType) => context.get(serviceType);
    // Or
    req.locate = (serviceType) => Injector.GetRequiredService(serviceType, context);
    next();
});

application
    .all('/products')
    .post('/', (req, res) => {
        const productController = req.locate(ProductController);
        res.json(productController.addProduct(req.body));
    })
    .put('/:id', (req, res) => {
        const productController = req.locate(ProductController);
        res.json(productController.updateProduct(req.body));
    })
    .get('/', (req, res) => {
        const productController = req.locate(ProductController);
        res.json(productController.getProducts());
    });


