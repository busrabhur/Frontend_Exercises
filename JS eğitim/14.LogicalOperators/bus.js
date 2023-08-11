let sifre="12345a";
if(sifre.length>5 && sifre.includes("a")){
    console.log("şifreniz mükemmel ötesi :)");
}else if(sifre.length>5){
    console.log("şifreniz idare eder.")
}else{
    console.log("daha zor bir şifre belirle.");
}