import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''})
    const addNewPost = (e) => {
        e.preventDefault()
        console.log('you are in "Add new post"..');
        const newPost={...post, id: Date.now()}
        create(newPost)
        setPost({title: '', body:''})
    }
    return (
        <form>
            <h3 style={{textAlign:'center'}}>Create Post</h3>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Post Name"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Post Detail"
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;