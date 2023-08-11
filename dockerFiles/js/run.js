
let lang=process.argv.slice(2)[0];
let script=process.argv.slice(2)[1];


if(lang!="js"){
    console.log("can't execute js code");
}
else{
    try{
       eval(script);
       console.log("finish");
    }
    catch(e){
        console.log(e);
        console.log("error");
    }
}

