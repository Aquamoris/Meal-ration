const db = require('../db');

class MealController {
    async createMeal(req, res) {
        const {product, category} = req.body;
        const newMeal = await db.query(`INSERT INTO meal (product, category, date) values($1, $2) RETURNING *`, [product, category, Date.now()]);
        res.json(newMeal.rows[0]);
    }

    async getAllMeals(req, res) {
        const allMeals = await db.query(`SELECT * FROM meal`);
        res.json(allMeals.rows);
    }

    async getMeal(req, res) {
        const id = req.params.id;
        const meal = await db.query(`SELECT * FROM meal WHERE id = $1`, [id]);
        res.json(meal.rows[0]);
    }

    async updatMeal(req, res) {
        const {id, product, category} = req.body;
        const meal = await db.query(`UPDATE meal set product = $1, category = $2 where id = $3 RETURNING *`, [product, category, id]);
        res.json(meal.rows[0]);
    }

    async deleteMeal(req, res) {
        const id = req.params.id;
        const meal = await db.query(`DELETE FROM person where id = $1`, [id]);
        res.json(meal.rows[0]);
    }
}

module.exports = new MealController()