const Product = require('../models').Product;

module.exports = {

    create(req, res) {
        return Product
            .create({
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
            .then(product => res.status(201).send(product))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Product
            .findAll()
            .then(products => res.status(200).send(products))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Product
            .findById(req.params.productId)
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'Product Not Found',
                    });
                }
                return res.status(200).send(product);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Product
            .findById(req.params.productId)
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'Product Not Found',
                    });
                }
                return product
                    .update({
                        title: req.body.title || product.title,
                        view: req.body.view || product.view,
                        tagline: req.body.tagline || product.tagline,
                        description: req.body.description || product.description,
                        winner_quantity: req.body.winner_quantity || product.winner_quantity,
                        value: req.body.value || product.value,
                        discount: req.body.discount || product.discount,
                        text: req.body.text || product.text,
                        question: req.body.question || product.question,
                        event_start: req.body.event_start || product.event_start,
                        event_end: req.body.event_end || product.event_end
                    })
                    .then(() => res.status(200).send(product))  // Send back the updated product.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Product
            .findById(req.params.productId)
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                        message: 'Product Not Found',
                    });
                }
                return product
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};