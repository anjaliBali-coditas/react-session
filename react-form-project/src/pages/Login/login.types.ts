import z from "zod";

export interface LoginProps {}

export const credentials = z.object({
    username: z.string().nonempty().min(4,'cannot be less than 4'),
    password: z.string().nonempty().min(8,'password minimum 8 characters')
})

export type Credential = z.infer<typeof credentials>