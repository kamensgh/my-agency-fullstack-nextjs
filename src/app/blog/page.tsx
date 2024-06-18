import React from 'react';
import PostCard from '@/components/postCard/PostCard';
import { PostType } from '@/lib/utils';
import { getPosts } from '@/lib/data';
import { Metadata } from 'next';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
};

export const metadata: Metadata = {
  title: 'Blog Page',
  description: 'Blog description',
};

const Blog = async () => {

  // using api routes
  const posts: PostType[] = await getData();
  
  // using server actions
  //const posts: PostType[] = await getPosts();

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our blog
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
