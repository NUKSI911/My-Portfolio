import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Articles = ({ activeMenu }) => {
  const [posts] = useState([
    {
      id: 1,
      title: "Building Modern React Applications with Vite: A Senior Engineer's Perspective",
      excerpt: "Learn how to set up and optimize React applications using Vite for lightning-fast development and builds.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Development",
      featured: true
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "CSS",
      featured: false
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features Every Developer Should Know",
      excerpt: "Explore essential ES6+ features that will make your JavaScript code more modern and efficient.",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "JavaScript",
      featured: false
    },
    {
      id: 4,
      title: "Responsive Design Best Practices in 2024",
      excerpt: "Modern approaches to creating responsive designs that work across all devices and screen sizes.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Design",
      featured: false
    }
  ]);

  useEffect(() => {
    activeMenu(2);
  }, []);

  return (
    <div className='blog_container'>
      <div className='blog_header'>
        <h1>Articles</h1>
        <p>Thoughts on web development, design, and technology</p>
      </div>

      <div className='blog_content'>
        <div className='featured_post'>
          {posts.filter(post => post.featured).map(post => (
            <article key={post.id} className='featured_article'>
              <div className='featured_badge'>Featured</div>
              <h2>{post.title}</h2>
              <p className='excerpt'>{post.excerpt}</p>
              <div className='meta'>
                <span className='date'>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <span className='read_time'>{post.readTime}</span>
                <span className='category'>{post.category}</span>
              </div>
              <Link to={`/articles/${post.id}`} className='read_more_link'>
                <button className='read_more'>Read More</button>
              </Link>
            </article>
          ))}
        </div>

        <div className='blog_posts'>
          <h3>Recent Posts</h3>
          <div className='posts_grid'>
            {posts.filter(post => !post.featured).map(post => (
              <article key={post.id} className='blog_post'>
                <Link to={`/articles/${post.id}`} className='post_link'>
                  <div className='post_category'>{post.category}</div>

                  <h4>{post.title}</h4>

                  <p className='post_excerpt'>{post.excerpt}</p>
                  <div className='post_meta'>
                    <span className='post_date'>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                    <span className='post_read_time'>{post.readTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
