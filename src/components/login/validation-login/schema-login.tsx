import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().min(1, "O campo é obrigatório."),
  password: z.string().min(1, "A senha é obrigatória."),
});
