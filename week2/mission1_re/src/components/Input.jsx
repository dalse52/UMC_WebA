import React, { useState } from 'react'

function Input({ addTodo }) {
    const [InText, setInText] = useState("");
    const [Id, setId] = useState(3);

    function Enter(e) {
        if(e.key === 'Enter') {
            console.log("Enter 눌림");

            //const newTodo = { id: Id + 1, content: InText, isDone: false };
            setId(Id => Id + 1);
            console.log(Id);
            const newTodo = {
                id: Id,
                content: InText,
                isDone: false
            };
            //진심 이해 x. setId 냅두고 왜 저렇게 변경하지?
            
            addTodo(newTodo);
            
            //setTodos((Todos) => ([...Todos, newtodo]));
            
            // setTodos(Todos => [
            //     ...Todos,
            //     {
            //         id: setId(Id => Id + 1),
            //         content: setCtt((Ctt) => (e.target.value)),
            //         isDone: false,
            //     }
            // ])

            setInText("");

            //console.log(InText);
            //console.log(Todos);
        }
    }

    return(
        <input
            value = {InText}
            type='text'
            id='content'
            placeholder='스터디 계획을 작성해보세요!'
            onChange={(e) => setInText(e.target.value) }
            onKeyDown={Enter}>
        </input>       
    )
}

export default Input