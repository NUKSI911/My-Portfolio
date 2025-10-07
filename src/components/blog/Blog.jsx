import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { articles } from '../../constant/articles';

const Articles = ({ activeMenu }) => {
  const [posts] = useState(articles);

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
