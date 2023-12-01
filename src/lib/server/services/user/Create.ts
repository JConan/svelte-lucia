import { z } from "zod"
import type { CreateUserData } from "."
import { auth } from "../authentication"

export async function createUser(data: CreateUserData) {
    return await auth.createUser({
        key: {
            providerId: "username",
            providerUserId: data.username.toLowerCase(),
            password: data.password,
        },
        attributes: {
            username: data.username.toLowerCase(),
            email: data.email
        }
    });
}