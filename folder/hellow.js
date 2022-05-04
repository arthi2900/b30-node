console.log("hello world");
//console.log(global);
const os=require("os");
console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("os version",os.version());
console.log("processor",os.cpus());
