const input = document.getElementById("content");
const todo = document.getElementById("do");
const done = document.getElementById("done");

input.addEventListener('keydown', ent);

function ent(event){
    if (event.keyCode === 13) {
        // 엔터가 눌리면?
        // div 생성하기(input에 있는 값 포함해서)
        const newct = document.createElement("div");
        const newbt = document.createElement("button");
        newct.setAttribute("class", "do");
        newbt.setAttribute("class", "btn");
        newct.innerHTML = input.value;
        newbt.innerHTML = "완료";
        todo.appendChild(newct);
        newct.appendChild(newbt);
        // console.log(input.innerHTML);
        // input.innerHTML = ""; 

        // chat gpt (...)
        // btn = document.getElementsByClassName("btn");
        newbt.addEventListener('click', function() {
            clc(newbt, newct, todo);
        });
        
    }
}

// btn.addEventListener('click', clc);

function clc(newbt, newct, todo){
    newbt.innerHTML = "삭제";
    done.appendChild(newct);
    //chat gpt
    if (todo.contains(newct)) {
    todo.removeChild(newct);
    }

    newbt.removeEventListener('click', clc);
    newbt.addEventListener('click', function() {
        del(newct, done);
    });
}

function del(newct, done){
    done.removeChild(newct);
}
