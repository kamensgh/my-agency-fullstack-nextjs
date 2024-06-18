'use server';

import { revalidatePath } from 'next/cache';
import { connectToDb } from './db';
import { Post } from './models';

export const addPost = async (
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log('Saved to db');
    revalidatePath("/blog") // refresh post page after seccussful save
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};


export const deletePost = async (
  formData: Iterable<readonly [PropertyKey, any]>
) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
   
    await Post.findByIdAndDelete(id);
    console.log('Deleted from db');
    revalidatePath('/blog'); // refresh post page after seccussful delete
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};