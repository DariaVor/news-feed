import { Skeleton } from 'antd';

import './Skeleton.css';

const NewsSkeleton = () => {
  return (
    <div className="news-skeleton-grid">
      {[...Array(2)].map((_, i) => (
        <div className="skeleton-card big" key={`big-${i}`}>
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      ))}

      {[...Array(3)].map((_, i) => (
        <div className="skeleton-card small" key={`small-${i}`}>
          <Skeleton active paragraph={{ rows: 3 }} />
        </div>
      ))}
    </div>
  );
};

export default NewsSkeleton;
