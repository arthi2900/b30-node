const fs =require('fs');

//Read
/*
//with error display
fs.readFile("cool.txt","utf8",(err,content)=>{
    console.log("hi",content);
});
*/

fs.readFile("cool1.txt","utf8",(err,content)=>{
    if(err){
        console.log("error",err);  
    }
    console.log("hi",content);
});
//read full folder
fs.readdir("./backup","utf8",(err,files)=>{
    
    console.log(files);
});

//update

//write in cool.text(add new information in cool.txt )
//override a code
/*const niceQuote="aaaaaaaaaaaaaaaaa";
fs.writeFile("./nice.txt",niceQuote,(err)=>{
    console.log("hi");
});
*/
const niceQuote=" \n aaaaaaaaaaaaaaaaa";
fs.appendFile("./nice.txt",niceQuote,(err)=>{
    console.log("update");
});
//delete
fs.unlink("./delete-file.css",(err)=>{
    console.log("delete file");
})
//delete enter folder
fs.readdir("./backup","utf8",(err,files)=>{
    files.forEach((fileName)=>
    fs.unlink(`./backup/${fileName}`,(err,files)=>{
        console.log(files);
    }) 
    );
});


