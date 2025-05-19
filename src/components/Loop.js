import React, {useState} from 'react';

function Loop(){
    const [names, setNames] = useState([]);
    const [name, setName] = useState("");

    function addName(e){
        setNames([...names, name]);
    }

    function NameHandler(e){
        setName(e.target.value);
    }

    return (
        <div>
            <button onClick={addName}>AddName</button>
            <input type="input" name="Name" onChange={(e)=>setName(e.target.value)} />
            {
                names.map(
                    (name, index) => {
                        return (
                            <h3 key={index}>{name}</h3>
                        )
                    }
                )
            }

        </div>

    );
}
export default Loop;