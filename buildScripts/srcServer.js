import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.arguments(
    require("webpack-dev-middleware")(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function (req, res) {
    res.json([
        { id: 1, firstname: "Bob", lastname: "smith", email: "bob@bob.com" },
        { id: 1, firstname: "Sob", lastname: "smoth", email: "blob@bob.com" },
        { id: 1, firstname: "Job", lastname: "smath", email: "sob@bob.com" },
    ]);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
