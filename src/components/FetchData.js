import React, {useState} from 'react';

function FetchData(){
    const [posts, setPosts] = useState([]);

    function getPosts(limit){
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((data) => {
                setPosts(data.slice(0, limit));
            });
    }

    function clearPosts(){
        setPosts([]);
    }

    return (
        <div>
            <button onClick={()=> getPosts(10)}>Fetch</button>
            <button onClick={clearPosts} >Clear</button>
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