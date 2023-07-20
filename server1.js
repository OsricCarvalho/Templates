let express = require ("express")
let server = express()

server.set("view engine", "ejs")

server.get("/results/osric",function(req,res){

    res.render("results.ejs",{"Sname":"Osric", "phy": 20, "mat":25, "eng": 29})
    res.end
})

server.get("/results/shafeeq",function(req,res){

    res.render("results.ejs",{"Sname":"Shafeeq", "phy": 90, "mat":85, "eng": 90})
    res.end
})


server.listen(3000)