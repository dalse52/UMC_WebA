import React from 'react'

function Content(props) {
    return (
        <div>
            {props.name}
            <button>완료</button>
            <hr></hr>
        </div>
    )

}

export default Content