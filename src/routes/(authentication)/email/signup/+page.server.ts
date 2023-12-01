import { AuthError } from "$lib/server/services/authentication";
import { fail, redirect } from "@sveltejs/kit";
import { ZodError } from "zod";
import { CreateUserDataSchema, createUser } from "$lib/server/services/user";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        try {
            const userData = await CreateUserDataSchema.parse({
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password")
            })
            await createUser(userData)
        } catch (e) {
            // Forms Validation errors
            if (e instanceof ZodError) {
                return fail(400, { success: false, errors: e.formErrors.fieldErrors })
            }

            // Database errors
            if (e instanceof AuthError && e.message === 'AUTH_DUPLICATE_KEY_ID') {
                return fail(400, { success: false, message: 'Already in use' })
            }


            console.dir(e, { depth: null })
            return fail(500, {
                message: "An unknown error occurred"
            });
        }

        throw redirect(302, "/email/login");
    }
};