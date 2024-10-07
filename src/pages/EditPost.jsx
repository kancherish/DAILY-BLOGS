import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import backDB from '../appwrite/backDB';
import Container from '../components/container/Container';
import PostForm from '../components/PostForm';

function EditPost() {
    const [post, setPost] = useState();
    const {slug} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        if (slug) {
            backDB.getPost(slug)
            .then((post)=>{
                setPost(post)
            })
        }else{
            navigate('/');
        }

    },[slug,navigate]);

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : "please re try";
}


export default EditPost