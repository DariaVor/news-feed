import { Card, Tag, Space } from 'antd';
import type { Post } from '../model/types';

import './NewsCard.css';

interface Props {
  post: Post;
  variant?: 'big' | 'small';
}

const NewsCard: React.FC<Props> = ({ post, variant = 'small' }) => {
  return (
    <Card
      className={`news-card ${variant}`}
      title={post.title}
      bordered={false}
      style={{ width: '100%', height: '100%' }}
    >
      <p className="news-body">{post.body}</p>
      <Space wrap>
        {post.tags.map((tag) => (
          <Tag color="blue" key={tag} style={{ fontFamily: 'Montserrat' }}>
            {tag}
          </Tag>
        ))}
      </Space>
      <div style={{ marginTop: 12 }}>
        {post.reactions.likes} | {post.reactions.dislikes}
      </div>
    </Card>
  );
};

export default NewsCard;
