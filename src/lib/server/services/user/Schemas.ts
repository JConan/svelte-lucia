import { z } from "zod"

export const UserSchema = z.object({
    id: z.string().min(15),
    username: z.string().min(3),
    email: z.string().email(),
    firstname: z.string().min(5).optional(),
    lastname: z.string().min(5).optional()
});

export const CreateUserDataSchema = UserSchema.pick({
    username: true,
    email: true
}).extend({
    password: z.string().min(8).superRefine((password, context) => {
        if (! /[A-Z]/.test(password)) context.addIssue({ code: "custom", message: "a least 1 uppercase" })
        if (! /[a-z]/.test(password)) context.addIssue({ code: "custom", message: "a least 1 lowercase" })
        if (! /[0-9]/.test(password)) context.addIssue({ code: "custom", message: "a least 1 digit" })
    })
})


export type CreateUserData = z.infer<typeof CreateUserDataSchema>

export type User = z.infer<typeof UserSchema>