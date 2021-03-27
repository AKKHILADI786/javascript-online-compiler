let inencode=document.getElementById('inencode');
let encode=document.getElementById('encode');
let encript=document.getElementById('encript');
let run=document.getElementById('run');
let data=document.getElementById('data');




// console.log('jai shree ram');
encode.onclick=function(){
    name=inencode.value;
    inencode.value=btoa(name)
    
    console.log('jai')
}
encript.onclick=function(){
    name=inencode.value;
    ans="";
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
    console.log(name);
    console.log(ans);
    data.value=ans;
    inencode.value=ans;
}


console.log('jai shree ram');




