let n= prompt("ingrese un numero");
let sum= 0;

for (let i = 0;i < n; i++) {
    if(n % i == 0){
        sum += i;
    }

}
if (sum==n){
    console.log("este numero es perfecto")
}



    else{
        console.log("este numero no perfecto")
    }