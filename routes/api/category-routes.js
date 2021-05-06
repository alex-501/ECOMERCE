const router = require('express').Router();
const { Category, Product } = require('../../models');





router.get('/', (req, res) => {
   Category.findAll({
      include: [Product] })


    .then (dbCategoryData => res.json (dbCategoryData))
    .catch(err => 
        {console.log(err);
      res.status(500).json(err); }); });
  // same strategy
  router.get('/:id', (req, res) => {
    Category.findOne({where: {
                 id: req.params.id },
             include: [Product] })

    
    
      .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return; }
      res.json(dbCategoryData);
    })

    //catch err. throw err
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  



  //PUT AND POST ROUTES
  router.post('/', (req, res) => {
    Category.create({
      category_name: req.body.category_name })
   
   
      .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  
  
    });
  });


  //////////////////////////////
  router.put('/:id', (req, res) => {
    Category.update(
      {category_name: req.body.category_name },
      {where: {
     id: req.params.id }}



    ).then(dbCategoryData => {
      res.json(dbCategoryData);
    });
  });



  // delete function
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id}})


    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return; }


      res.json  (dbCategoryData ) ;}) });
  
  module.exports = router;
