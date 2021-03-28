## miniShop 프로젝트

- 이 프로젝트는 드림코딩 by 엘리님께서 기획해주신 온라인 쇼핑몰 프로젝트이다.  
- 쇼핑몰이라 했지만 간단한 게임 같기도 하고, 메뉴에 있는 아이템들을 누르면 밑에 리스트 항목들이 필터링되어 나타나게 되는 프로젝트이다.
- [사이트 보기](https://azurealstn.github.io/miniShop/)

### 제작 기간

- 2021-03-28 약 3시간 반 소요

### 사용 언어

- HTML, CSS, JavaScript

### 프로젝트 메인 화면

![캡처](https://user-images.githubusercontent.com/55525868/112750338-0d74eb80-9003-11eb-83d3-653fa6743dd2.PNG)

### 마크업 구조

![캡처](https://user-images.githubusercontent.com/55525868/112750529-12866a80-9004-11eb-8013-b22ba1c1be6b.PNG)

- 마크업 구조는 간단하다. 로고와 버튼들 그리고 아이템 리스트 섹션이 있다.

### 코드 설명

- 먼저 아이템 리스트들을 동적으로 가져오기 위해 `JSON` 데이터 파일을 읽어오기 위한 `fetch()` API를 사용하였다.
- 아이템 리스트들을 보여주기 위해 `innerHTML`을 사용하였다.
- 아이템들을 필터링하기 위해 HTML에 `data 속성`을 추가하였고, 추가한 `data`의 `key`와 `value`를 가져와 필터 처리하였다.
