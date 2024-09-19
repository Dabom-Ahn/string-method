// console.log("test");

// const h1 = document.querySelector("h1");
// h1.innerText = "Test";

// const h2 = document.querySelector("h2");
// const linkURL = "https://www.naver.com";
// h2.innerHTML = `<a href=${linkURL}>naver</a>`;

// const h3 = document.querySelector("h3");
// const h3_text = h3.innerText;
// //h3문자열을 0위치에서 부터 50번째 위치까지 자른뒤, 자른 문자열을 다시 h3.innertext 프로퍼티에 대입해서 적용
// h3.innerText = h3_text.substring(0,50);

// if (h3_text.length < 50) {
//     // 텍스트 길이가 50보다 짧으면 그대로 사용
//     h3_text = h3_text;
// } else {
//     // 텍스트 길이가 50 이상이면 잘라서 '...' 추가
//     h3.innerText = h3_text.substring(0,50) + '...';
// }


// if(h3_text.length > 50) h3.innerText = h3_text.substring(0,50) + '...';
// else h3.innertext = h3_text;

// h3.innerText = h3_text.length > 30 ? h3_text.substring(0,30) + '...': h3_text;
// 이게 제일 많이 씀

// h3.innerText = h3_text.length > 30 
//     ? h3_text.substring(0, 30) + '...'
//     : h3_text.length > 20 
//         ? h3_text.substring(0, 30) + '+++'
//         : h3_text;
// //이거도 되긴함! 근데 복잡하면 if 문이 더 나음

function shortenText(elem, len){
    //첫번째 인수로 받은 문자값으로 DOM 요소 선택
    const el = document.querySelector(elem);
    //해당 요소의 문자값 변수에 할당
    const el_text = el.innerText;
    el.innerText = 
        el_text.length > len ? el_text.substring(0,len) + "..." : el_text;
}

shortenText("h1", 5);
shortenText("h3", 5);
