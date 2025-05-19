import React, {useState} from 'react';

function Conditions(){
    const [name, setName] = useState();

    function changeMe(){
        name === "John" ? setName("Dacey"): setName("John");
    }

    return (
        <div>
            <h2>Condition: </h2>
            <p>Name: {name}</p>
            <input type="button" value="change" onClick={changeMe} />
        </div>
    );
}

export  default  Conditions;