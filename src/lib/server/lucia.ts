// src/lib/server/lucia.ts
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { pg } from "@lucia-auth/adapter-postgresql";
import { db } from "@vercel/postgres";


// expect error (see next section)
export const auth = lucia({
    env: 'DEV',
    adapter: pg(db, {
        user: "demo_user",
        key: "demo_user_key",
        session: "demo_user_session"
    }),
    middleware: sveltekit()
});

export type Auth = typeof auth;