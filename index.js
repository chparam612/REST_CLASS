const express = require("express");

const app = express();

app.use(express.urlencoded({extented : true}));
app.use(express.json());

const port = 8080;

const path = require("path");

const { v4: uuidv4 } = require('uuid');


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
    res.send("patch request working");
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