const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");


let posts = [
    {
        id: uuidv4(),
        username: "Harsh",
        content: "I Love Coding"
    },
    {   
        id: uuidv4(),
        username: "Hello",
        content: "Love Coding"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // posts.find()
    let post = posts.find((p) => id === p.id);
    console.log(post);
    // res.send("Hello");
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    console.log(post);
    res.send("Patch req working");
})