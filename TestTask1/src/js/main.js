"use strict";
console.log('файл js подключен');


const controller = document.querySelector('.range');
const count = document.getElementById('count');

// ------------градиент ползунка--------//
const range = () => {
  let val = controller.value;
  controller.style.background = '-webkit-linear-gradient(left, #BE69D5 0%, #BE69D5 '+val+'%, #BAF1FF '+val+'%, #BAF1FF 100%)'
  count.innerHTML = `${val}м²`;
}

//-------------------------загрузка дом дерева-------------------------------//
document.addEventListener("DOMContentLoaded", function () {

const menuBtn = document.getElementById("header-button");
const menuModal = document.getElementById("header-modal");
const menuList = document.getElementById("header-icon");


const leftSection = document.getElementById("left-section");
const sectionPrice = document.getElementById("price");
const backImg = document.getElementById("back-img");

//------------добавление анимации появления при загрузке ДОМ дерева--------//
leftSection.className += " mainSection-left_appear";
sectionPrice.className += " mainSection__priceWrapper_appear";
backImg.className += " mainImg_appear";

//--------------------------клик на модалку-------------------------------//
if (menuModal && menuBtn && menuList) {
  menuBtn.addEventListener("click", () => {
    menuModal.classList.toggle("menu-active");
    menuList.classList.toggle("menuBtn-active");
  });

  menuModal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuModal.classList.remove("menu-active");
      menuList.classList.remove("menuBtn-active");
    });
  });
}

//-----------скрывание по модалок по клику-----------------//
document.addEventListener('click', (e) => {
  const click1 = e.composedPath().includes(menuBtn);
  const click2 = e.composedPath().includes(menuModal);
  const click3 = e.composedPath().includes(menuList);
  if (!click1 && !click2 && !click3) {
    menuModal.classList.remove("menu-active");
    menuList.classList.remove("menuBtn-active");
  }
})



})