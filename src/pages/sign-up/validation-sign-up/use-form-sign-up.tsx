import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schemaSignUp } from "./validation-sign-up";

type SignUpFormProps = z.infer<typeof schemaSignUp>;
export function useSignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormProps>({
    mode: "all",
    resolver: zodResolver(schemaSignUp),
  });

  const handleSignUp = (data: SignUpFormProps) => {};

  return {
    register,
    handleSubmit,
    errors,
    handleSignUp,
  };
}
