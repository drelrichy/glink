const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/glink.com.ng/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/glink.com.ng/fullchain.pem', 'utf8');

var  httpsOptions  = {key: privateKey, cert: certificate};





app.prepare().then(() => {
    createServer(httpsOptions, async (req, res) => {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log('ready - started server on url: https://glink.com.ng:' + port);
    });
});