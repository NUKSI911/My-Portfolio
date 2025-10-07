import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';
import { articles } from '../../data/articles';

const ArticleDetail = () => {
    const { id } = useParams();

    const article = articles.find(art => art.id === parseInt(id));
    
    if (article?.id == undefined) {
        return (
            <div className="article-detail-container">
                <div className="article-not-found">
                    <h1>Article Not Found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                    <Link to="/articles" className="back-button">
                        ← Back to Articles
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="article-detail-container">
            <div className="article-detail">
                <Link to="/articles" className="back-button">
                    ← Back to Articles
                </Link>

                <article className="article-content">
                    <header className="article-header">
                        <div className="article-meta">
                            <span className="article-category">{article.category}</span>
                            <span className="article-date">
                                {new Date(article.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="article-read-time">{article.readTime}</span>
                        </div>

                        <h1 className="article-title">{article.title}</h1>

                        <div className="article-author">
                            By {article.author}
                        </div>

                        <div className="article-tags">
                            {article.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </header>

                    <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>
            </div>
        </div>
    );
};

export default ArticleDetail;
