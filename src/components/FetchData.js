import React, {useState} from 'react';

function FetchData(){
    const [posts, setPosts] = useState([]);

    function getPosts(){
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            });
    }

    function clearPosts(){
        setPosts([]);
    }

    return (
        <div>
            <button onClick={getPosts}>Fetch</button>
            <button onClick={()=> setPosts([])} >Clear</button>
            <ul>
                {
                    posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default FetchData;