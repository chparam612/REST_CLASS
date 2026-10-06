const express = require("express");

const app = express();

app.use(express.urlencoded({extented : true}));
app.use(express.json());

const port = 8080;

const path = require("path");

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
   posts.push({username,content});
   res.redirect("/posts");
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

let posts = [
    {
        // id: ,
        username:"apnacollege",
        content:"I have purchases apna college delta course",
    },
    {
        // id: ,
        username:"takeUforward",
        content:"I am going to study dsa from take u forward",
    },
    {
        // id: ,
        username:"abdulbari",
        content:"I am going to practice algos from abdul bari",
    },
]