import React, { useEffect, useState } from 'react'
import backDB from '../appwrite/backDB';
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'

function AllPosts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {

    });

    backDB.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })

    return (
        <>
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AllPosts