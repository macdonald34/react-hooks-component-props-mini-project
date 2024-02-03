import React from 'react';
import blogData from '../data/blog';
import ArticlesList from './ArticlesList';
import Article from './Article';
import Header from './Header';
import About from './About';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticlesList posts={blogData.posts} />
    </div>
  );
}

export default App;