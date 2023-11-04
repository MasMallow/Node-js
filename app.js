const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const { send } = require('process');
const app = express();
const productRouter = express.Router();
const PORT = process.env.PORT || 3000; // Provide a default port in case PORT is not defined

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "src/views")); // Use path.join to specify the correct path
app.set("view engine", "ejs"); // Corrected property name

app.get("/", (req, res) => {
    res.render('index', { username: 'MasMAllow',cat:["kebub","bubke","bubbub"]});
});

productRouter.route("/").get((req, res) => {
    res.render("product",{
        products:[
            {productmas:'ไก่',productmass:'เป็ด'},
            {productmas:'ไก่1',productmass:'เป็ด1'},
            {productmas:'ไก่2',productmass:'เป็ด2'},
            {productmas:'ไก่3',productmass:'เป็ด3'} 
        ],
    });
});

productRouter.route("/1").get((req, res) =>{
    res.send("Hello maslol");
});

app.use("/product",productRouter);

app.listen(PORT, () => {
    const debugLog = debug('app');
    
    debugLog("listening on port " + PORT);
});
