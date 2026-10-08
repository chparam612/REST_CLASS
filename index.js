const express = require("express");

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const port = 8080;

const path = require("path");

const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override"); 
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port , () =>{
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req,res) => {
    res.send("Home root GET");
});

app.post("/", (req,res) => {
    res.send("Home root POST");
});

app.get("/posts",(req,res)=>{
   
    res.render("index.ejs",{posts});
})

app.post("/posts",(req,res)=>{
   let {username,content} = req.body;
   let id = uuidv4();
   posts.push({ id,username,content});
   res.redirect("/posts");
});

app.get("/posts/new",(req,res)=>{
    
    res.render("new.ejs",{posts});
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);

    let newContent = req.body.content;
    let post = posts.find((p) => id == p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{ post });
})

app.delete("/posts/:id",(req,res)=>{
     let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

let posts = [
    {
        id: uuidv4(),
        username:"apnacollege",
        content:"I have purchases apna college delta course",
    },
    {
        id: uuidv4(),
        username:"takeUforward",
        content:"I am going to study dsa from take u forward",
    },
    {
        id: uuidv4(),
        username:"abdulbari",
        content:"I am going to practice algos from abdul bari",
    },
]