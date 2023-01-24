import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import classes from '../Blog/Blog.module.css'



import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../Button/Button';



const Blog = () => {

  const [posts, setPosts] = useState([])

  const query = `
  query {
      user(username: "Pdev") {
      publication {
          posts(page:0){
          slug
          title
          brief
          coverImage
          cuid
          _id
          }
      }
      }
  }
  `;

  const fetchPosts = async () => {

    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(data);
    setPosts(data.data.user.publication.posts);
    // console.log(data.data.user.publication.posts);
};



useEffect(()=>{
  fetchPosts()
}, [])

  return (
    <section className={classes.blog} id="blog">
       <h5>shared ideas</h5>
      <div className='container'>
      <Title name='BLOG'/>
        <div className={classes.blog_container}>
      
      {posts.map(post => (
   
          <div key={post._id}className={classes.posts}>
          <img src={post.coverImage} alt={post.title} />
          <h2>{post.title}</h2>
          <a href={`https://pdev.hashnode.dev//${post.slug}`} target="_blank" rel="noreferrer" aria-label='this is my blog'className={classes.btns} style={{marginBottom:20}}><Button name='Read More'/></a>
          </div>
         
      ))}
   
      </div>
      </div>
    </section>
  )
}

export default Blog
