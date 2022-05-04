const sum=(a,b)=>a+b;
console.log(process.argv);
const n1=process.argv[2];
const n2=process.argv[3];
console.log(sum(+n1,+n2));
