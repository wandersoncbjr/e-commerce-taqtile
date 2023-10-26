import { z } from "zod";
import { regexPatterns } from "../../../regex/regex";

export const schemaSignUp = z.object({
  email: z
    .string()
    .min(1, "O campo é obrigatório.")
    .refine((value) => regexPatterns.email.test(value), {
      message: "Por favor, forneça um endereço de e-mail válido.",
    }),
  password: z
    .string()
    .min(1, "A senha é obrigatória.")
    .min(8, "A senha deve conter no mínimo 8 caracteres.")
    .refine((value) => regexPatterns.specialCharacter.test(value), {
      message: "A senha deve conter pelo menos um caractere especial.",
    })
    .refine((value) => regexPatterns.uppercaseLetter.test(value), {
      message: "A senha deve conter pelo menos uma letra maiúscula.",
    })
    .refine((value) => regexPatterns.numericDigit.test(value), {
      message: "A senha deve conter pelo menos um número.",
    }),
  name: z.string().min(1, "O nome é obrigatório."),
});
