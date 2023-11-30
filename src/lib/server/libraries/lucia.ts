import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { pg } from "@lucia-auth/adapter-postgresql";
import { db } from "@vercel/postgres";

export const auth = lucia({
    env: 'DEV',
    adapter: pg(db, {
        user: "demo_user",
        key: "demo_user_key",
        session: "demo_user_session"
    }),
    middleware: sveltekit(),
    getUserAttributes: (databaseUser) => {
        return {
            username: databaseUser.username,
            firstname: databaseUser.first_name,
            lastname: databaseUser.last_name
        }
    },
});

export type Auth = typeof auth;
export { type AuthRequest, LuciaError as AuthError } from "lucia";
