import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';

const handler = NextAuth(
    {
        providers: [
            GoogleProvider(
                {
                    clientId: process.env.GOOGLE_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                }
            )
        ],
        callbacks:{
            async session({ session }) {
    
                // get data of a user to keep existing session 
                const sessionUser = await User.findOne({
                    //getting currrent email from session
                    email: session.user.email
                })
    
                // update id
                session.user.id = sessionUser._id.toString();
                return session;
    
            },
                    //sign in function that also automatically creates new
                    //user in the Database
    
            async signIn ({ profile }) {
                try {
                    //serverless -> 
                    //Lambda function opens only when its called, 
                    //everytime its called it spins a connection to the db
    
                    await connectToDB();
                    
                    // check if user already exists
    
                    const userExists = await User.findOne({
                        email: profile.email
                    });
    
                    //if not, create new user, save to db
                    if (!userExists) {
                        await User.create({
                            email: profile.email,
                            username: profile.name.replace(" ", "").toLowerCase(),
                            image: profile.picture,
                        })
                    }
    
                    // if signed in correctly, return true;
    
                    return true;
            
                } catch(error) {
                        console.log(error);
                        return false;
                }
            }

        }

    })
    // normally everything as get OR post but this is how next auth does it

    
    export {handler as GET, handler as POST}