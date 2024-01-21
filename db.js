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

`;

const queryFun = async () => {
    try {
        const res = await pool.query(query)
        console.log('SUCCESS');
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end()
    }
}

queryFun();

module.exports = pool;