const Pool = require('pg').Pool;

const config = {
    User: 'user',
    password: "root",
    host: "localhost",
    port: 5432,
    database: "postgres"
};

const pool = new Pool(config);

const query = `
CREATE TABLE meal(
    id SERIAL PRIMARY KEY,
    date_value DATE,
    meal_type VARCHAR(255),
    products_id SERIAL[],
    FOREIGN KEY (products_id) REFERENCES product (id),
    FOREIGN KEY (meal_type) REFERENCES meal_type (id)
);
`;

const queryFun = async () => {
    try {
        const res = await pool.query(query)
        // console.log(res.rows);
        console.log('SUCCESS');
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end()
    }
}

queryFun();

module.exports = pool;