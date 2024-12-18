import React, { useEffect, useState } from 'react'
import Container from "../components/container/Container"
import Button from '../components/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import backDB from "../appwrite/backDB"
import parse from "html-react-parser"

function Post() {

  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.authSlice.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;


  useEffect(() => {
    if (slug) {
      backDB.getPost(slug)
        .then((post) => {
          if (post) setPost(post)
          else navigate('/');
        })
    } else navigate('/');
  }, [slug, navigate]);

  const deletePost = () => {
    backDB.deletePost(post.$id)
      .then((status) => {
        if (status) {
          backDB.deleteFile(post.fetuaredImage);
          navigate('/');
        }
      })
  }

 

  return post ? (
    <div className='py-8'>
      <Container>
        <div className="w-full h-[50vh] flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={backDB.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          <p>
            by {post.userName}
          </p>

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post