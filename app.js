const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const { send } = require('process');
const app = express();
const productsRouter = require('./src/router/productRouter');
const PORT = process.env.PORT || 3000; // Provide a default port in case PORT is not defined

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "src/views")); // Use path.join to specify the correct path
app.set("view engine", "ejs"); // Corrected property name

app.get("/", (req, res) => {
    res.render('index', { username: 'MasMAllow', cat: ["kebub", "bubke", "bubbub"] });
});

productsRouter.route("/").get((req, res) => {
    res.render("products", {
        products
    });
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id],
    });
});

app.use("/products", productsRouter);

app.listen(PORT, () => {
    const debugLog = debug('app');

    debugLog("listening on port " + PORT);
});
