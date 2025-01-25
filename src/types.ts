export interface Post {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  content: {
    text: string;
    media: {
      type: string;
      src: string;
    }[];
  };
  timestamp: string;
  likes: number;
  comments: number;
}

export interface CardProps {
  post: Post;
}

export interface GridProps {
  media: { type: string; src: string }[];
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}