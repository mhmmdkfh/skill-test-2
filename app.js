const express = require("express");
const app = express();
const port = 3700;

const { sequelize } = require("./models");
//sequelize.sync({ force: true });

const routerUser = require("./controllers/user/userRouter");
app.use(express.json());

app.use("/users", routerUser);

app.listen(port, () => {
    console.log(`listen at http:/localhost:${port}`)
})