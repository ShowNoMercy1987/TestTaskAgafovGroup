"use strict";

console.log("скрипт подключен")

let form = document.getElementById('form');
let input = document.getElementById('input');
let table = document.getElementById('table');






form.addEventListener('submit', (e => {
e.preventDefault()


let inputValue = input.value;

// fetch('https://api.forum-auto.ru/v2/listGoods?login=493358_stroyzar&pass=sAVDkrEbqd&art='+inputValue+'')
//   .then(response => response.json()) // Декодируем ответ в формате json
//   .then(data => {data.forEach((item) => {
//     const elem = `<td>${item.name}</td>`
//     document.getElementById('table').insertAdjacentHTML('beforeend', elem);
//   })});
// }))

fetch('https://api.forum-auto.ru/v2/listGoods?login=493358_stroyzar&pass=sAVDkrEbqd&art='+inputValue+'')
  .then(response => response.json())
  .then(data => { 
    data.map((x) => {
      document.querySelector('.table-field').innerHTML += `
      <div class="table-obj">
      <div class='table-item'>gid - ${x.gid}</div>
      <div class='table-item'>brand - ${x.brand}</div>
      <div class='table-item'>art - ${x.art}</div>
      <div class='table-item'>name - ${x.name}</div>
      <div class='table-item'>d_deliv - ${x.d_deliv}</div>
      <div class='table-item'>kr - ${x.kr}</div>
      <div class='table-item'>num - ${x.num}</div>
      <div class='table-item'>price - ${x.price}</div>
      <div class='table-item'>whse - ${x.whse}</div>
      <div class='table-item'>is_returnable - ${x.is_returnable}</div>
      </div>`
    })


  })}))