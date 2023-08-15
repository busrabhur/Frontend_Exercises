//JS asenkron bir programlama dilidir.
console.log(1);
console.log(2);

setTimeout(() => {
    console.log("selammm");
}, 2000);

console.log(33); // bu üstteki 2 snlik şeyin çıkmasını beklemek yerine direkt bastırılır.JS asenkron çalışır.Beklemez
