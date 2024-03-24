const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // DEV UPDATE: Added async/await to route
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
      order: [['id', 'ASC']]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // DEV UPDATE: Added async/await to route
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // DEV UPDATE: Added async/await to route
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  };
});


router.put('/:id', (req, res) => {
  // update product data
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // DEV UPDATE: Added async/await to route
  try {
    const categorytData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categorytData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categorytData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
