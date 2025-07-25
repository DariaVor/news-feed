import { useEffect, useRef, useState } from 'react';
import type { Post } from '../../entities/post/model/types';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import NewsCard from '../../entities/post/ui/NewsCard';

import './NewsFeed.css';

const LIMIT = 10;

const NewsFeed: React.FC = () => {
  const [skip, setSkip] = useState(0);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, isFetching } = useGetPostsQuery({ limit: LIMIT, skip });

  useEffect(() => {
    if (data?.posts) {
      setAllPosts((prev) => [...prev, ...data.posts]);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetching) {
        setSkip((prev) => prev + LIMIT);
      }
    });
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [isFetching]);

  const renderCards = () => {
    return allPosts.map((post, index) => {
      const patternIndex = index % 10;

      const variant =
        patternIndex === 0 || patternIndex === 1 || patternIndex === 5 || patternIndex === 6
          ? 'big'
          : 'small';

      return (
        <div className={`card-wrapper ${variant}`} key={post.id}>
          <NewsCard post={post} variant={variant} />
        </div>
      );
    });
  };

  return (
    <div className="news-container">
      <h1>Новостная лента</h1>
      <div className="news-grid">{renderCards()}</div>

      <div ref={observerRef}></div>
    </div>
  );
};

export default NewsFeed;
