let mydata = JSON.parse(JSON.stringify(data));
const message = document.querySelector(".message");
const author = document.querySelector(".author");
const progress = document.querySelector("progress");

function createMsg() {
    addValue();
    i = Math.floor(Math.random() * (593 - 0)) + 0;
    author.innerText = `${mydata[i].author}`;
    message.innerText = `${mydata[i].message}`;
}
//인스타 스토리 느낌의 디자인 추가
function addValue() {
    j = 0;
    let inc = setInterval(() => {progress.value = j; j++; if (j >= 1000) {
        clearInterval(inc);
        createMsg();
    }}, 10);
}
//명언을 직접 추가할 수 있는 기능 추가
//좋아요 기능 추가
//공유기능 추가
//인공지능으로 자신의 생각에대한 명언 보여주기
createMsg();