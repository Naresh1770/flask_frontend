
const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
    "/api",
    createProxyMiddleware({
        target: "http://backend:5000",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    })
);

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, "0.0.0.0", () => {
    console.log("Frontend running on port 3000");
});
