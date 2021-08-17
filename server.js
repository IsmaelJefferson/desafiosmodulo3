const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

const posts = require("./data");

server.use(express.static("public"));

server.set("view engine" , "njk");

nunjucks.configure("views" , {
    express: server
})


server.get("/", function(req , res){
    
    return res.render("courses" , {posts});


})


server.get("/about", function(req, res){
    
    const about = {
        url_Img: "data:image/jpeg;base64,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",
        name: "Rocketseat",
        description: "Evolua rápido como a tecnologia",
        links_Tech: [
            {url: "https://pt-br.reactjs.org/", name: "React.JS" },
            {url: "https://nodejs.org/en/", name: "Node.JS" },
            {url: "https://reactnative.dev/", name: "React Native" },
            {url: "https://elixir-lang.org/", name: "Elixir" }
        ],
        
        Links_Social_Networks:[
            {url: "https://github.com/rocketseat-education", name: "GitHub" },
            {url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br", name: "Instagram" },
            {url: "https://pt-br.facebook.com/rocketseat/", name: "Facebook" },

        ]
    }
    
    return res.render("about", {about} );
})


server.listen(5000 , function(){
    console.log("server is runing");
})

server.use(function(req , res){
    res.status(404).render("not-found")
})