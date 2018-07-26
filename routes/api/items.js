const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

// get request to api/items
// get all items
// access will be public
router.get('/', (req, res)=>
{
  Item.find()
  .sort({date: -1})
  .then(items => res.json(items))
});

//post request to api/items
// create an item
// access is public
router.post('/', (req, res)=>
{
  const newItem = new Item(
    {
      name: req.body.name
    });
    newItem.save()
    .then(item => res.json(item));
});

//delete request to api/items
// delete
// access is public
router.delete('/:id', (req, res)=>
{
  Item.findById(req.params.id)
  .then(item => item.remove()
    .then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});


module.exports = router;
