import { regexPatterns } from "../../../regex/regex";
import { z } from "zod";


export const schemaLogin = z.object({
  email: z
    .string()
    .min(1, "O campo é obrigatório.")
    .refine(
      (value) => {
        return (
          regexPatterns.email.test(value) ||
          regexPatterns.cpf.test(value) ||
          regexPatterns.cnpj.test(value)
        );
      },
      {
        message: "Por favor, insira um email, CPF ou CNPJ válido.",
      }
    ),
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
});
