const express=require('express')
const app=express()

app.use('/',express.static(__dirname+'/public'))

ans="";
function encript(req,res,next){
    console.log('encripting data')
    name=req.query.data;
    console.log(name);
    for(a in name){
        c=name[a];
        if(c==c.toUpperCase()){
            c=c.toLowerCase();
        }
        else if(c==c.toLowerCase()){
            c=c.toUpperCase();
        }
        ans+=c;
    }
    console.log(ans);
    next()
}
function encode(req,res,next){
    ans=new Buffer(ans,'base64').toString('ascii');
    ans=eval(ans);
    
    next()
}

app.get('/eval',encript,encode,(req,res)=>{
    res.send('The output of file is '+ ans)
})
app.listen(4321,()=>{
    console.log('server host on http://localhost:4321')
})