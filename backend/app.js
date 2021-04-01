const fs = require('fs');
const cors = require('cors');
const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const { errorHandler } = require('./middleware/errorHandler.middleware');
const Logger = require('./services/logger.service');
const app = express();

// Express App Config
app.use(express.json());

const corsOptions = {
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
    credentials: true,
};
app.use(
    history({
        // OPTIONAL: Includes more verbose logging
        verbose: true,
    })
);

const publicDir = './public';
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const publicDirPath = path.resolve(__dirname, 'public');
app.use(express.static(publicDirPath));

if (process.env.NODE_ENV !== 'production') {
    app.use(cors(corsOptions));
}

app.get('/api', (req, res) => {
    // console.log('hello');
    // res.send('hi');
    res.sendFile(path.resolve(publicDir, 'index.html'));
});

// global error handler
app.use(errorHandler);

module.exports = { app };
