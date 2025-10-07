import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  
    const articles = [
        {
            id: 1,
            title: "Building Modern React Applications with Vite",
            excerpt: "Learn how to set up and optimize React applications using Vite for lightning-fast development and builds.",
            content: `
        <p>In the ever-evolving landscape of web development, build tools play a crucial role in determining the efficiency and performance of your applications. Vite has emerged as a game-changer in the React ecosystem, offering blazing-fast development experiences and optimized production builds.</p>
        
        <h3>What is Vite?</h3>
        <p>Vite (pronounced "veet", French for "fast") is a build tool created by Evan You, the creator of Vue.js. It leverages native ES modules in development and Rollup for production builds, resulting in significantly faster development server startup and hot module replacement (HMR).</p>
        
        <h3>Key Benefits of Using Vite with React</h3>
        <ul>
          <li><strong>Lightning-fast dev server:</strong> Start your development server in milliseconds, not seconds</li>
          <li><strong>Instant HMR:</strong> See your changes reflected in the browser almost instantly</li>
          <li><strong>Optimized builds:</strong> Production builds are automatically optimized with tree-shaking and code splitting</li>
          <li><strong>TypeScript support:</strong> Built-in TypeScript support without additional configuration</li>
          <li><strong>Plugin ecosystem:</strong> Rich ecosystem of plugins for various frameworks and tools</li>
        </ul>
        
        <h3>Setting Up Vite with React</h3>
        <p>Getting started with Vite and React is straightforward. You can create a new project using the official Vite template:</p>
        
        <pre><code>npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev</code></pre>
        
        <h3>Performance Optimizations</h3>
        <p>Vite automatically handles many optimizations for you, but here are some additional tips to maximize performance:</p>
        
        <ul>
          <li>Use dynamic imports for code splitting</li>
          <li>Leverage Vite's built-in CSS code splitting</li>
          <li>Configure chunk size limits for optimal loading</li>
          <li>Use the Vite bundle analyzer to identify optimization opportunities</li>
        </ul>
        
        <p>Vite represents the future of build tooling, offering a perfect balance between developer experience and production performance. Whether you're starting a new project or considering migrating an existing one, Vite provides compelling reasons to make the switch.</p>
      `,
            date: "2024-01-15",
            readTime: "5 min read",
            category: "Development",
            featured: true,
            author: "Nurudeen Yekeen",
            tags: ["React", "Vite", "JavaScript", "Build Tools"]
        },
        {
            id: 2,
            title: "CSS Grid vs Flexbox: When to Use What",
            excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
            content: `
        <p>CSS layout has evolved significantly over the years, and two of the most powerful tools in a modern developer's arsenal are CSS Grid and Flexbox. Understanding when and how to use each can dramatically improve your ability to create complex, responsive layouts.</p>
        
        <h3>Understanding the Fundamental Differences</h3>
        <p>The key difference lies in their dimensional focus:</p>
        <ul>
          <li><strong>Flexbox:</strong> One-dimensional layout system (either row or column)</li>
          <li><strong>CSS Grid:</strong> Two-dimensional layout system (both rows and columns simultaneously)</li>
        </ul>
        
        <h3>When to Use Flexbox</h3>
        <p>Flexbox excels in these scenarios:</p>
        <ul>
          <li>Distributing space within a single row or column</li>
          <li>Aligning items within a container</li>
          <li>Creating flexible, responsive components</li>
          <li>Building navigation bars and toolbars</li>
          <li>Centering content both horizontally and vertically</li>
        </ul>
        
        <h3>When to Use CSS Grid</h3>
        <p>CSS Grid is ideal for:</p>
        <ul>
          <li>Complex, two-dimensional layouts</li>
          <li>Creating page-level layouts</li>
          <li>Overlapping elements</li>
          <li>Precise control over both rows and columns</li>
          <li>Building card-based layouts and dashboards</li>
        </ul>
        
        <h3>Best Practices</h3>
        <p>Here are some guidelines to help you choose the right tool:</p>
        <ul>
          <li>Start with CSS Grid for overall page layout</li>
          <li>Use Flexbox for component-level layouts</li>
          <li>Combine both for maximum flexibility</li>
          <li>Consider browser support for your target audience</li>
        </ul>
        
        <p>Both CSS Grid and Flexbox are powerful tools that complement each other. The key is understanding their strengths and using them appropriately for your specific use case.</p>
      `,
            date: "2024-01-10",
            readTime: "7 min read",
            category: "CSS",
            featured: false,
            author: "Nurudeen Yekeen",
            tags: ["CSS", "Grid", "Flexbox", "Layout"]
        },
        {
            id: 3,
            title: "JavaScript ES6+ Features Every Developer Should Know",
            excerpt: "Explore essential ES6+ features that will make your JavaScript code more modern and efficient.",
            content: `
        <p>JavaScript has undergone significant evolution since ES6 (ES2015), introducing many features that have become essential for modern development. Understanding these features is crucial for writing clean, efficient, and maintainable code.</p>
        
        <h3>Arrow Functions</h3>
        <p>Arrow functions provide a concise syntax for writing functions and have different behavior regarding the <code>this</code> keyword:</p>
        <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>
        
        <h3>Destructuring Assignment</h3>
        <p>Destructuring allows you to extract values from arrays or properties from objects into distinct variables:</p>
        <pre><code>// Object destructuring
const { name, age } = person;

// Array destructuring
const [first, second] = array;</code></pre>
        
        <h3>Template Literals</h3>
        <p>Template literals provide an easy way to create strings with embedded expressions:</p>
        <pre><code>const message = \`Hello, \${name}! You are \${age} years old.\`;</code></pre>
        
        <h3>Promises and Async/Await</h3>
        <p>Modern asynchronous JavaScript is built around Promises and the async/await syntax:</p>
        <pre><code>// Using async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>
        
        <h3>Modules (import/export)</h3>
        <p>ES6 modules provide a standardized way to organize and share code:</p>
        <pre><code>// Export
export const myFunction = () => { /* ... */ };

// Import
import { myFunction } from './module.js';</code></pre>
        
        <p>These features form the foundation of modern JavaScript development. Mastering them will significantly improve your coding efficiency and code quality.</p>
      `,
            date: "2024-01-05",
            readTime: "8 min read",
            category: "JavaScript",
            featured: false,
            author: "Nurudeen Yekeen",
            tags: ["JavaScript", "ES6", "ES2015", "Modern JS"]
        },
        {
            id: 4,
            title: "Responsive Design Best Practices in 2024",
            excerpt: "Modern approaches to creating responsive designs that work across all devices and screen sizes.",
            content: `
        <p>Responsive design continues to evolve as new devices and screen sizes enter the market. In 2024, creating truly responsive experiences requires a comprehensive approach that goes beyond simple breakpoints.</p>
        
        <h3>Mobile-First Design Philosophy</h3>
        <p>Starting with mobile devices and scaling up ensures better performance and user experience:</p>
        <ul>
          <li>Design for the smallest screen first</li>
          <li>Progressive enhancement for larger screens</li>
          <li>Focus on essential content and functionality</li>
          <li>Optimize for touch interactions</li>
        </ul>
        
        <h3>Modern CSS Techniques</h3>
        <p>Leverage modern CSS features for better responsive design:</p>
        <ul>
          <li><strong>CSS Grid and Flexbox:</strong> For flexible layouts</li>
          <li><strong>Container Queries:</strong> Component-based responsive design</li>
          <li><strong>CSS Custom Properties:</strong> For consistent theming</li>
          <li><strong>Logical Properties:</strong> For better internationalization</li>
        </ul>
        
        <h3>Performance Considerations</h3>
        <p>Responsive design isn't just about layout—it's also about performance:</p>
        <ul>
          <li>Optimize images for different screen densities</li>
          <li>Use lazy loading for below-the-fold content</li>
          <li>Implement critical CSS inlining</li>
          <li>Consider network conditions in your design decisions</li>
        </ul>
        
        <h3>Accessibility in Responsive Design</h3>
        <p>Ensure your responsive designs are accessible:</p>
        <ul>
          <li>Maintain proper contrast ratios across all breakpoints</li>
          <li>Ensure touch targets are appropriately sized</li>
          <li>Test with screen readers on different devices</li>
          <li>Consider reduced motion preferences</li>
        </ul>
        
        <p>Responsive design in 2024 requires a holistic approach that considers performance, accessibility, and user experience across all devices and contexts.</p>
      `,
            date: "2024-01-01",
            readTime: "6 min read",
            category: "Design",
            featured: false,
            author: "Nurudeen Yekeen",
            tags: ["CSS", "Responsive", "Mobile-First", "UX"]
        }
    ];

    const article = articles.find(art => art.id === parseInt(id));
    console.log(article.id,id);
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
