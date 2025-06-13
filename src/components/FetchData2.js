import React, {useEffect, useState} from 'react';
function FetchData2(props) {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts2')
            .then(response => response.json())
            .then(data => setPosts(data !== null ?data.slice(0, 3):[]))
            .catch(err => setErr(err));
    }, []);

    return(
        <div>
            {posts.map( post => {
                return(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                );
            })}
            {err instanceof Error && <p>{err.message}</p>}
        </div>
    )
}
export default FetchData2;