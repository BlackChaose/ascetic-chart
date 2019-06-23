let ss = function(arr){
    let buf=[];
    arr.reduce(function(acc, el){
        acc = acc.slice(acc.indexOf(el),acc.length);   
        acc.shift();     
        let res = acc.filter((item)=>{return item < el});
        buf.push(res.length);
        return acc;
        },arr);
    return buf;
};

var a = [12,1,2,3,0,11,4];
var b = [-1,-5,0,-2,-2,-1];

//console.log(ss(a));
//console.log(ss(b));

let ss2 = (arr)=>{
    let res = [];
    let buf = arr.slice(0, arr.length);
    
    do{
    let index = buf.indexOf(Math.max(...buf));
    let len = buf.length;
    buf = buf.slice(index, len);
    res.push(buf.shift());
    }while(buf.length > 0);
    return Array.from(new Set(res));
}


console.log(ss2([16,17,4,3,5,2]));
console.log(ss2([4,1,4]));
console.log(ss2([-1,4,1,4]));