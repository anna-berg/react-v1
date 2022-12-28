import {useState} from 'react';
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const[posts, setPosts] = useState([
        {id:1, title:'JavaScript 1', body:'Description'},
        {id:2, title:'JavaScript 2', body:'Description'},
        {id:3, title:'JavaScript 3', body:'Description'},
        {id:4, title:'JavaScript 4', body:'Description'},
    ]);

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
        console.log('creating post..');

    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !==post.id))
        console.log('removing post..');
    }

    return (
        <div className="App">
            <PostForm create = {createPost}/>
            {posts.length !== 0
                ?
                :
            }
            <PostList remove={removePost} posts={posts} title="List 1"/>
        </div>
    );
}

export default App;
