const Router = require('express');
const router = new Router()
const mealContoller = require('../controller/meal.controller');

router.post('/meal', mealContoller.createMeal);
router.get('/meal', mealContoller.getAllMeals);
router.get('/meal/:id', mealContoller.getMeal);
router.put('/meal', mealContoller.updatMeal);
router.delete('/meal/:id', mealContoller.deleteMeal);

module.exports = router
