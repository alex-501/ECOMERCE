const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// find all products
    // be sure to include its associated Category and Tag data
router.get('/', (req, res) =>  {
      Product.findAll({
      include:   [ {
          model: Category,
          attributes:   ['id', 'category_name'] },
        {
          model: Tag,
          attributes: ['tag_name'],
          through: ProductTag
        }]})


    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });



    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
  
  router.get('/:id', (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: Category,
          attributes: ['id', 'category_name'] },
        { model: Tag,
          attributes: ['tag_name'],
          through: ProductTag }]})


          .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return; }
      res.json(dbProductData); })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  // product . create 
  router.post('/', (req, res) => {
  ////////////////////////////////////////////////////// 
    Product.create(req.body)
      .then((product) => {
        if (req.body.tagIds.length) {
          const productTagIdArr = req.body.tagIds.map((tag_id) => {
            return {
              product_id: product.id,
              tag_id,};  });
          return ProductTag.bulkCreate(productTagIdArr); }
       



          //if error return err
        res.status(200).json(product);
      })
      .then((productTagIds) => res.status(200).json(productTagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
 
  router.delete( '/:id', (req, res) => {
    // destroy function instead of delete this time
    Product.destroy({
      where: {


        id: req.params.id} })

    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'Product not found' });
        return; }


        ////////////////
      res.json(dbProductData);
    })
  });
  
  module.exports = router;