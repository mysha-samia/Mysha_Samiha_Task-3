import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle } from 'lucide-react';
import { Grid } from './Grid';
import type { CardProps } from '../types';

export function Card({ post }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            src={post.sender.avatar}
            alt={post.sender.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900">{post.sender.name}</h3>
            <p className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
            </p>
          </div>
        </div>
        <p className="text-gray-800 mb-4">{post.content.text}</p>
        <Grid media={post.content.media} />
        <div className="flex items-center gap-6 mt-4 pt-4 border-t">
          <div className="flex items-center gap-2 text-gray-500">
            <Heart size={20} className="text-pink-500" />
            <span>{post.likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MessageCircle size={20} className="text-blue-500" />
            <span>{post.comments.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}