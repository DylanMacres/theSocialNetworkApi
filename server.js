const express = require('express')
const db = 
const routes = 


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Running Sever on port ${PORT}`)
})