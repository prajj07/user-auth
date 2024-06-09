"use server";
import { db } from "@/lib/db";
import * as z from "zod";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register= async (values: z.infer<typeof RegisterSchema> ) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
      }

const existingUser = await getUserByEmail(values.email);

if (existingUser) {
    return { error: "Email already in use!" };
}


await db.user.create({
    data: {
        name: values.name,
        email: values.email,
        password: values.password,
    },
});


    return "success";
};