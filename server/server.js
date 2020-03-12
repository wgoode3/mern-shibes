const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 8000;

const app = express();
app.use( cors () );

app.get("/test", (req, res) => {
    res.json({msg: "success!"});
});

app.get("/shibes", (req, res) => {
    axios.get("http://shibe.online/api/shibes?count=10")
        .then(shibes => {
            res.json(shibes.data);
        }).catch(err => res.json(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));