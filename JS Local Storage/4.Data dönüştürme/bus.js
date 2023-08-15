//Arrayi local storage a kaydetmek için  arrayi ->json stringe çevirmen lazım
const items=["elif","esra","canan"];
localStorage.setItem('arr',JSON.stringify(items));

// localstoragede json string halind tipinde tutulan datayı locak storage dan çekip kullanabilmek için de çekip arraye parse etmen lazım.
let value=JSON.parse(localStorage.getItem('arr')); //artık normal array şeklinde kullanabiliriz.
console.log(value);
