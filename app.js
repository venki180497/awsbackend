const express = require('express');
const app = express();
const routes = require('./src/routes/index');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next(); // Proceed to the next middleware/route handler
});
app.use('/', routes);
const PORT = process.env.PORT || 4000;

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});