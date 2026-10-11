import NextAuth, { type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// 1. Extend the built-in session types to include `id`
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

// 2. Extend the JWT type to hold the user object
declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Replace this with your actual database/Sanity auth logic
        if (
          credentials?.email === "demo@businesshub.com" &&
          credentials?.password === "demo123"
        ) {
          return {
            id: "1",
            name: "Demo User",
            email: credentials.email,
            image: null,
          };
        }
        return null; // Return null if credentials are invalid
      },
    }),
  ],
  pages: {
    signIn: "/account/login", // Your custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // On initial sign in, attach the user object to the token
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the user ID from the token to the session
      if (token.user) {
        session.user = {
          ...session.user,
          id: token.user.id,
        };
      }
      return session;
    },
  },
});

// Export the handlers for the App Router
export { handler as GET, handler as POST };