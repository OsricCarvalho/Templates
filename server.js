let express = require ("express")
let server = express()

server.set("view engine", "ejs")

server.get("/trainer/osric",function(req,res){

    res.render("trainer.ejs",{"tname":"osric", "taddress": "london"})
    res.end
})

server.get("/trainer/james",function(req,res){

    res.render("trainer.ejs",{"tname":"james", "taddress": "Swindon"})
    res.end
})

server.listen(3000)