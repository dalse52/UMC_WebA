import React, { useState } from 'react'

function Input() {

    const [Id, setId] = useState(3);
    const [InText, setInText] = useState("");
    const [Todos, setTodos] = useState([
        { id: 0, content: "Send E-mail", isDone: false },
        { id: 1, content: "Make Work-Books", isDone: false },
        { id: 2, content: "Sleeping", isDone: true },
        { id: 3, content: "Watching You-Tube", isDone: true },
      ]);

      
    function Enter(e) {

        if(e.key === 'Enter') {
            console.log("Enter 키 눌림");

            const newtodo = { id: Id + 1, content: InText, isDone: false };
            //진심 이해 x. setId 냅두고 왜 저렇게 변경하지?
            
            setTodos((Todos) => ([...Todos, newtodo]));
            
            // setTodos(Todos => [
            //     ...Todos,
            //     {
            //         id: setId(Id => Id + 1),
            //         content: setCtt((Ctt) => (e.target.value)),
            //         isDone: false,
            //     }
            // ])
            setInText("");

            console.log(InText);
            console.log(Todos);
        }
    }

    return(
        <input value = {InText} type='text' id='content' placeholder='스터디 계획을 작성해보세요!' onChange={(e) => setInText(e.target.value) } onKeyDown={Enter}>

        </input>       
    )
}

export default Input