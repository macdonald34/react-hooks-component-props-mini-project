import React from 'react';
import blogData from '../data/blog';
import Article from './Article';

export default function ArticlesList({ posts }) {
  console.log (posts);
  return (
    <div>
      <main>
        {posts.map((x) => (
          <Article
            key={x.id}
            title={x.title}
            date={x.date}
            preview={x.preview}
          />
        ))}
      </main>
    </div>
  );
}