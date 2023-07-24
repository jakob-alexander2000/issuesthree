import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = nextAuth(
    {
        providers: [
            GoogleProvider(
                {
                    clientId: '',
                    clientSecret: '',
                }
            )
        ],

        async session({ session }) {
            
        },

        async signIn ({ profile }) {
        
        }
    })
    // normally everything as get OR post but this is how next auth does it

    
    export {handler as GET, handler as POST}