import { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { Card } from './components/Card';
import { posts } from './posts';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts;
    const query = searchQuery.toLowerCase();
    return posts.filter(post => 
      post.sender.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Instafeed</h1>
        
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map(post => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;