const PORT = 3000;

const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);

async function startServer(){
    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    })
}

startServer();