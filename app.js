const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send('MasMAllow');
});

app.listen(PORT, () => {
    const debugLog = debug('app');
    
    debugLog("listening on port " + PORT);
});
