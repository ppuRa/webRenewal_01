// 브라우저 버전 정보 등
const ver = navigator.userAgent;
console.log(ver);

// 정규 표현식으로 특정 단어를 검색(브라우저 특징)
const isIE = /trident/i.test(ver); 
console.log(isIE);
// 결과값 : false

// 참이면 경고창 출력
if(isIE) { 
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.')
};


// const isIE = /chrome/i.test(ver);
// console.log(isIE);
// 결과값 : true