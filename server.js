const server = require("jolt-server");
const path = require("path");

server({
    root: path.join(process.cwd(), "public"),
    port: 80,
    // key: "key file",
    // cert: "cert file"
});