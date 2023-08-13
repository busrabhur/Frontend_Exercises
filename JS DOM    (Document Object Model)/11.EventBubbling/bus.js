// iç içe elementlerde en içteki elemente tıklandığında bir şey olmasını istiyorsa ve onun parent elementinde de click eventi varsa hem kendisi hem de paretnleri etkilenir.Bunu durdurmak için event.stoppropagation() kullanman lazım.Bubblingi durdurur.

const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', e => {
  console.log("body was clicked")
})

div.addEventListener('click', e => {
  console.log("div was clicked")
  e.stopPropagation();
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', e => {
  console.log("button was clicked")
  e.stopPropagation(); //bunu koyduğun için kendinden üstündekilere kabarcık göndermiyor.
})
