
const http = require('http');

const host = 'localhost';

const port = 3001;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>Bienvenue sur l'accueil</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`serveur créer http://${host}:${port}`);
});
