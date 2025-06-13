import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASEURL} from "../Constants";

function Logout(props){
    const [token, setToken] = useState("");
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);


    function LogoutSubmit(){
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: BASEURL + '/api/auth/logout/',
          headers: {
            'Authorization': 'token b6a909ddb5d3b94f2d210bdd8ba33ab7b3a98635'
          }
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

    }

    return (
        <div></div>
    );
}

export default Logout;