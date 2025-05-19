import React from 'react';


function HelloworldFn(props){

    function clickMe(){
        alert("You click me from Function-based Helloworld.");
    }

    return (
        <div>
            <h1>This is Hello world in function.</h1>
            <p>Props: {props.name}</p>
            <p>Props: {props.age}</p>
                <input type="button" value="clickMe" onClick={props.clickMe} />
                <input type="button" value="clickMe2" onClick={clickMe} />
        </div>
    );

}

export default HelloworldFn;