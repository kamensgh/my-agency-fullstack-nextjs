import Link from 'next/link';
import React from 'react';

const PostCard = ({post}) => {
  return (
    <div className="lg:flex">
      {post.img ? (
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src={post.img}
          alt="post-img"
        />
      ) : (
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="post-img"
        />
      )}

      <div className="flex flex-col py-6 lg:mx-6 justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          20 October 2019
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white mb-2"
        >
          {post.title}
        </Link>

        <p>{post.desc}</p>

        <Link href={`/blog/${post.slug}`} className="hover:underline mt-1">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
