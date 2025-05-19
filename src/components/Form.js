import React, {useState} from 'react';


function Form(props){
    const [username, SetUsername] = useState();
    const [password, SetPassword] = useState();

    function usernameHandler(e){ SetUsername(e.target.value);}
    function passwordHandler(e) {SetPassword(e.target.value);}

    function submit(){
        //
    }
    return (
        <div>
            <form >
                <p> Username: <input type="input" onChange={usernameHandler} /></p>
                <p> Password: <input type="password" onChange={passwordHandler} /></p>
                <p><button >Submit</button> </p>
                <p> UN: {username}</p>
                <p> PW: {password}</p>
            </form>
        </div>
    );
}

export default Form;