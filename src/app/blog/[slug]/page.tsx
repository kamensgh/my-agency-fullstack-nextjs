import React, { Suspense } from 'react';
import { PostType } from '@/lib/utils';
import UserInfo from '@/components/UserInfo';
import { getPost } from '@/lib/data';

const getData = async (slug: any) => {
  const url = 'http://localhost:3000/api/blog/' + slug;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();  
  return data;
};

export const generateMetadata = async ({ params }: any) => {
  const { slug } = params;

  const post: PostType = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostView = async ({ params }: any) => {
  const { slug } = params;

  // using api routes
  const post: PostType = await getData(slug);  

  // using server actions
  //const post: PostType = await getPost(slug);

  return (
    <div>
      <>
        {/* component */}
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              From the blog
            </h1>

            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
              <img
                className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-blue-500 uppercase">category</p>

                <a
                  href="#"
                  className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
                >
                  {post?.title}
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  {post?.desc}
                </p>

                {/* <Suspense fallback={'Loading...'}>
                  <UserInfo userId={post?.userId} />
                </Suspense> */}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default SinglePostView;
