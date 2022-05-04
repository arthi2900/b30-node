const fs =require('fs');
/*
const quote="jkdghkdjhfgjkdfhgf";
fs.writeFile("C:/Users/Arthi/Desktop/demo/create.txt",quote,err=>{
    console.log("complete writing");
});

const quote2="sadftyujghrty";
for(let i=1;i<=10;i++){
    fs.writeFile(`./backup/${i}.txt`,quote2,err=>{
        console.log("complete writing");
    }); 
}
*/

const quote3="jkdghkdjhfgjkdfhgf";
const nofile= process.argv[2];
for (let i = 1; i <= nofile; i++)
 {fs.writeFile(`./backup/text-${i}.html`, quote3, (err) =>
 {console.log("Completed writing !!! 👍",`text-${i}.html`);});}