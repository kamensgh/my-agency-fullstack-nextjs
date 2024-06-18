
import { connectToDb } from "./db"
import { User, Post } from "./models"
import { unstable_noStore as noStore } from 'next/cache';





export const getPosts = async () => {
    try {
        connectToDb()
        const posts = await Post.find()
        return posts;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!")
    }

}


export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.findOne({slug})
        return post;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!")
    }

}


export const getUsers = async () => {
    try {
        connectToDb()
        const users = await User.find()
        return users;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users!")
    }

}

export const getUser = async (id) => {
    noStore()
    try {
        connectToDb()
        const user = await User.findById(id)
        return user;

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user!")
    }

}