import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';
import { articles } from '../../constant/articles';

const ArticleDetail = () => {
    const { id } = useParams();

    const article = articles.find(art => art.id === parseInt(id));
    const currentIndex = articles.findIndex(art => art.id === parseInt(id));
    const hasNext = currentIndex !== -1 && currentIndex < articles.length - 1;
    const nextArticle = hasNext ? articles[currentIndex + 1] : null;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [id]);

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
                {nextArticle && (
                        <div className="article-next-nav">
                            <Link
                                className="next-article-button"
                                to={`/articles/${nextArticle.id}`}
                                >
                                <span className="next-article-title">{nextArticle.title}</span>
                                <span className="next-article-arrow">→</span>
                            </Link>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default ArticleDetail;
