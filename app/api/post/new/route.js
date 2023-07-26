import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (request) => {
    const { userId, post, tag } = await request.json();
console.log(userId);
    try {
        await connectToDB();
        const newPost = new Post ({
            creator: userId,
            post,
            tag
        })
        await newPost.save();
        return new Response(JSON.stringify(newPost), { status:201 })
    } catch (error) {
        return new Response("Failed to create a new post", {
            status: 500
        })
    }
}