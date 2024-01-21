const express = require('express');
const mealRouter = require('./routes/meal.routes');

const PORT = process.env.PORT || 2000;

const app = express();

app.use('/api', mealRouter);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

