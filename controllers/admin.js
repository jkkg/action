const Product = require('../models').Product;

module.exports = {
    main(req, res) {
        res.render('admin/main.ejs');
    },

    createProductForm(req, res) {
        res.render('admin/createProduct.ejs')
    },

    createProduct(req, res) {
        Product.create({
            title: req.body.title,
            view: req.body.view,
            tagline: req.body.tagline,
            description: req.body.description,
            winner_quantity: req.body.winner_quantity,
            value: req.body.value,
            discount: req.body.discount,
            text: req.body.text,
            question: req.body.question,
            event_start: req.body.event_start,
            event_end: req.body.event_end
        })
            .then(product => {
            return res.status(200).redirect('/admin/products/show/' + product.id);
        })
            .catch(error => res.status(400).send(error));
    },

    showProducts(req, res) {
        Product
            .findAll()
            .then(products => res.status(200).render('admin/products.ejs', {products:products}))
            .catch(error => res.status(400).send(error));
    },

    showOneProduct(req, res) {
        const product = Product
            .findById(req.params.productId)
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'Product Not Found',
                    });
                }
                return res.status(200).render('admin/oneProduct.ejs', {product: product});
            })
            .catch(error => res.status(400).send(error));

    },
};