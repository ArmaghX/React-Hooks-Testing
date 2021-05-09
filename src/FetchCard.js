import React, { useState, useEffect } from 'react';

// helpers
import getUser from './helpers/getUser';
import getPosts from './helpers/getPosts';

const FetchCard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            })
    };

    const updatePosts = () => {
        getPosts(user.id)
            .then((newPosts) => {
                setPosts(newPosts);
            })
    }

    useEffect(() => {
        console.log('Ejecutado en el montaje del componente')
        updateUser();
    }, []);

    useEffect(() => {
        console.log('Ejecutado en los cambios de usuario')
        if (user?.id){
            updatePosts();
        }
    }, [user]);

    return (
        <div>
        <button onClick={updateUser}>
            Another User
        </button>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <br/>
        <h2>Posts - user: {user.id}</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    )
}

export default FetchCard;
