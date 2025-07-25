import { Card, Tag, Space } from 'antd';
import type { Post } from '../model/types';

import './NewsCard.css';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';

interface Props {
  post: Post;
  variant?: 'big' | 'small';
}

const NewsCard: React.FC<Props> = ({ post, variant = 'small' }) => {
  return (
    <Card
      className={`news-card ${variant}`}
      title={post.title}
      variant="borderless"
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
      <div className="reactions">
        <Space size="middle">
          <span>
            <LikeOutlined style={{ fontSize: 14 }} /> {post.reactions.likes}
          </span>
          <span>
            <DislikeOutlined style={{ fontSize: 14 }} /> {post.reactions.dislikes}
          </span>
        </Space>
      </div>
    </Card>
  );
};

export default NewsCard;
