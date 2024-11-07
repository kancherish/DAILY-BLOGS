import React, { useState,useEffect } from 'react'
import backDB from '../appwrite/backDB';
import Container from '../components/container/Container';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';
import { Query } from 'appwrite';

function Home() {
    const [posts,setPosts] = useState([]);
    const userStatus = useSelector((state)=>state.authSlice.userStatus)
    const userData = useSelector((state)=>state.authSlice.userData)


    useEffect(() => {
        if (userData) {
            backDB.getPosts([Query.equal("userId",userData.userAccount?.$id)]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })    
        }
        
    }, [userStatus])

 

    if (posts.length === 0 || !(userStatus)) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {userStatus ? "NO POSTS" : "PLEASE LOGIN TO CONTINUE"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
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
    )
}

export default Home