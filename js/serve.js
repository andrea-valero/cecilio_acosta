const http= require ('http')
const { type } = require('os')
http.createServe((req,res)=>{
    if(req.url=== '/'){
        res.WriteHead('200',{"Content-type": "text/plain"})
        res.end('<h1 style="blue">:(404 url no encontrada </h1>')

    }else{
        res.WriteHead('200',{"Content-type": "text/plain"})
        res.end('<h1 style="red">:(404 url no encontrada </h1>')
    }

})
.listen(8080),(req,res)=>{
    console.log ("servidor corriendo")
}
