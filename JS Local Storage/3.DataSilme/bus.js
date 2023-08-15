localStorage.setItem('kullaniciTercihi','koyuMod');
const tercih=localStorage.getItem('kullaniciTercihi');
console.log(tercih);


//set ettiğimiz datayı silelim
localStorage.removeItem('kullaniciTercihi');

console.log(localStorage.getItem('kullaniciTercihi')); //silinmiş
//Toplu silme
//örneğin kullancı logout dediyse local storage da ne var ne yok silmen lazım
//localstorage.clear() local storageda tutulan tüm verileri siler
localStorage.setItem('prop1','value1');
localStorage.setItem('prop2','value2');
console.log(localStorage.getItem('prop1'));
console.log(localStorage.getItem('prop2'));
localStorage.clear();
console.log("herşey silindimi? "+localStorage.getItem('prop1'),localStorage.getItem('prop2'));//null görünür.
