const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
let id = 1;
let posts = [
    {
        id: id++,
        username: "Harsh",
        content: "I Love Coding"
    },
    {   
        id: id++,
        username: "Hello",
        content: "Love Coding"
    },
    {
        id: id++,
        username: "Random",
        content: "Backend developer"
    }
];

app.use(express.urlencoded({ extended: true })); // middlewares to parse the data or it can read the data
app.set("view engine", "ejs"); // set views path  it controls routes
app.set("views", path.join(__dirname, "views"));

// set public express path it controls external change files
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log("App listen at port: ", port);
});

app.get("/", (req, res) => {
    res.send("Response done, Server working:)");
})

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
})

app.post("/posts", (req, res) => {
    console.log(req.body);
    let { username, content } = req.body;
    posts.push({ username, content, id });
    id++;
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    console.log(req.params);
    let { newId } = req.params;
    
    console.log(newPosts);
    res.send("Id post working")
})