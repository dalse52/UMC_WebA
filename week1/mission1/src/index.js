let name = document.querySelector("#name");
let email = document.querySelector("#email");
let age = document.querySelector("#age");
let password = document.querySelector("#password");
let pwdbch = document.querySelector("#passworddbch");
let signup = document.querySelector("#signup");

let nmsg = document.querySelector(".nmessage");
let emsg = document.querySelector(".emessage");
let amsg = document.querySelector(".amessage");
let pmsg = document.querySelector(".pmessage");
let p2msg = document.querySelector(".p2message");
let msg;

const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

close.onclick = () => {
    modal.style.display = "none";
};

function effect() {

    check1();
    check2();
    check3();
    check4();
    doublecheck();

    if ((check1() && check2() && check3() && check4() && doublecheck()) == true) {
        modal.style.display = "flex";
    }

}

function fail(me) {
    msg = me;
    msg.computedStyleMap.color = "#FF0000";
    // msg.classList.remove('hide');
    msg.style.display = "flex";
    console.log(msg + "fail");
}

function success(me) {
    msg = me;
    msg.computedStyleMap.color = "#00FF00";
    // msg.classList.remove('hide');
    msg.style.display = "flex";
}

function check1() {
    if (name.value.length < 1) {
        nmsg.innerText = "필수 입력 항목입니다.";
        fail(nmsg);
        // nmsg.computedStyleMap.color = "#FF0000";
        return false;
    }
    else {
        nmsg.innerText = "멋진 이름이네요!";
        success(nmsg);
        // nmsg.computedStyleMap.color = "#00FF00";
        return true;
    }
    // nmsg.classList.remove('hide');
}

function check2() {
    if (!email.value.includes('@')) {
        emsg.innerText = "올바른 이메일 형식이 아닙니다.";
        fail(emsg);
        // emsg.computedStyleMap.color = "#FF0000";
        return false;
    }
    else {
        emsg.innerText = "올바른 이메일 형식입니다!";
        success(emsg);
        // emsg.computedStyleMap.color = "#00FF00";
        return true;
    }
    // emsg.classList.remove('hide')
}

function check3() {
    if (!age.value) {
        amsg.innerText = "나이를 입력해 주세요!";
        fail(amsg);
        // amsg.computedStyleMap.color = "#FF0000";
        return false;
    }
    else if (!/^[0-9.-]*$/.test(age.value)) {
        amsg.innerText = "나이는 숫자 형식이어야 합니다!";
        fail(asmg);
        return false;
    }
    else if (age.value.includes('-')) {
        amsg.innerText = "나이는 음수가 될 수 없습니다!";
        fail(amsg);
        return false;
    }
    else if (age.value.includes('.')) {
        amsg.innerText = "나이는 소수가 될 수 없습니다!";
        fail(amsg);
        return false;
    }
    else if (parseInt(age.value) < 19) {
        amsg.innerText = "미성년자는 가입할 수 없습니다!";
        fail(amsg);
        return false;
    }
    else {
        amsg.innerText = "올바른 나이 형식입니다!";
        success(amsg);
        // amsg.computedStyleMap.color = "#00FF00";
        return true;
    }
    // emsg.classList.remove('hide')

}

function check4() {
    if (password.value.length <= 4) {
        pmsg.innerText = "비밀번호는 최소 4자리 초과여야 합니다."
        fail(pmsg);
        // pmsg.computedStyleMap.color = "#FF0000";
        return false;
    }
    else if (password.value.length > 12) {
        pmsg.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
        fail(pmsg);
        return false;
    }
    else if (!/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).*$/.test(password.value))  {
        pmsg.innerText = "비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.";
        fail(pmsg);
        return false;
    }
    else {
        pmsg.innerText = "올바른 비밀번호입니다!";
        success(pmsg);
        // pmsg.computedStyleMap.color = "#00FF00";
        return true;
    }
    // emsg.classList.remove('hide')
}

function doublecheck() {
    if (!(password.value == pwdbch.value)) {
        p2msg.innerText = "비밀번호가 일치하지 않습니다.";
        fail(p2msg);
        // p2msg.computedStyleMap.color = "#FF0000";
        return false;
    }
    else {
        p2msg.innerText = "비밀번호가 일치합니다!";
        success(p2msg);
        return true;
    }
    // p2msg.classList.remove('hide')

}


    // if (!email.value) console.log("올바른 이메일 형식이 아닙니다.");
    // else console.log("올바른 이메일 형식입니다!");
    // (!parseFloat(age))

    // 유효성 문제 없을 시 폼에 submit
    // document.form.submit(); 함수 같은데 ...
    
    //parseInt(age); 

    // 5개 각각 분리해서 유효성 검사,
    // 5번 유효하지 않다면, 제출 버튼 비활성화
    // 5개 다 멀쩡하면 모달창!
