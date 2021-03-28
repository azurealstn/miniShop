'use strict';

/**
 * data.json을 읽기 fetch()
 * items 배열을 반환
 */
function loadJSON() {
  return fetch('./json/data.json')
    .then(results => results.json()) //json 변환
    .then(result => result.items) //items 배열
    .catch(error => console.log(error));
}


//배열을 화면에 보여주기
function displayScreen(items) {
  const list = document.querySelector('.list');
  list.innerHTML = items.map(item => createItem(item)).join();
}

//HTML li 태그 리턴
function createItem(item) {
  return `
  <li>
    <img src="${item.image}" alt="" class="image">
    <div class="text">${item.gender}, ${item.size} size</div>
  </li>`;
}

function onClickButton(e, items) {
  /* const dataset = e.target.dataset; */
  const target = e.target;
  const key = target.dataset.key;
  const value = target.dataset.value;

  if (key === null || value === null) return;

  const filtering = items.filter(item => item[key] === value);
  console.log(filtering);
  displayScreen(filtering); //필터링 처리
}

//버튼 클릭시 해당하는 아이템들을 필터링하여 정렬
function itemFiltering(items) {
  const logo = document.querySelector('.logo');
  const menuBtn = document.querySelector('.menu');

  logo.addEventListener('click', () => displayScreen(items)); //logo 클릭시 전체리스트 보여주기
  menuBtn.addEventListener('click', e => onClickButton(e, items)); //버튼 클릭시 아이템 필터링하여 보여주기
}

//main
function init() {
  loadJSON()
    .then(items => {
      console.log(items); //items 배열 출력
      displayScreen(items); //리스트 보여주기
      itemFiltering(items); //아이템 필터링하기
    })
    .catch(error => console.log(error));

}
init();