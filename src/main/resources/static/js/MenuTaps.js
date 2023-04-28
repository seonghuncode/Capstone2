// <!-- 현재 a태그를 클릭하면 색상이 안들어옴 -->
const target1 = document.getElementById('vbtn-radio1');
const target2 = document.getElementById('vbtn-radio2');
const target3 = document.getElementById('vbtn-radio3');
const target4 = document.getElementById('vbtn-radio4');

//현재 페이지를 locahost:8085다음 ?전까지 불러온다
const nowPage = window.location.pathname;

if (nowPage === "/mainPage") {
    target1.checked = true;
    target2.checked = false;
    target3.checked = false;
    target4.checked = false;
} else if (nowPage === "/rules") {
    target1.checked = false;
    target2.checked = true;
    target3.checked = false;
    target4.checked = false;
} else if (nowPage === "") {
    target1.checked = false;
    target2.checked = false;
    target3.checked = true;
    target4.checked = false;
} else if (nowPage === "") {
    target1.checked = false;
    target2.checked = false;
    target3.checked = false;
    target4.checked = true;
}

