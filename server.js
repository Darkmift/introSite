const Logger = require('./backend/services/logger.service');
process
    .on('unhandledRejection', (reason, p) => {
        Logger.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', (err) => {
        Logger.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });

const { app } = require('./backend/app');

const http = require('http').createServer(app);
const port = process.env.PORT || 3030;

http.listen(port, () => {
    console.info('Server is running on port: ' + port);
});
