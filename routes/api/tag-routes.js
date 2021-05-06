const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
// The `/api/tags` endpoint
   // find all tags
    // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({ include: [
        {
          model: Product,
          attributes: ['product_name', 'price'],
          through: ProductTag,
        }]})



    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });  });
  
// find a single tag by its `id`
    // be sure to include its associated Product data
// do it all again
  router.get('/:id', (req, res) => {
    
    Tag.findOne({
      where: {
        id: req.params.id
      }, include: [
        {
          model: Product,
          attributes: ['product_name', 'price'],
          through: ProductTag,} ]})


        .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'Not found/ real tag' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
        router.post('/', (req, res) => {
       Tag.create(req.body)


      .then((tag) => {
        if (req.body.productIds.length) {
          const productTagIdArr = req.body.productIds.map((product_id) => {
            return {


              tag_id: tag.id,
              product_id,}; });
          return ProductTag.bulkCreate(productTagIdArr);
        }


        res.status(200).json(tag);  })
      .then((productTagIds) => res.status(200).json(productTagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });



   // update  tag
  router.put('/:id', (req, res) => {
   
    Tag.update(
      { tag_name: req.body.tag_name},
      { where: {
       id: req.params.id
        }
      }

      
    ).then(dbTagData => {
      res.json(dbTagData);
    });
  });



    // delete tag
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id}})



    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'Not a real tag' });
        return;
      }
      res.json(dbTagData);
    })




    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  

  module.exports = router;