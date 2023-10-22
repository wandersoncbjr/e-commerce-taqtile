import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schemaLogin } from "./schema-login";

type FormProps = z.infer<typeof schemaLogin>;
export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schemaLogin),
  });

  const handleForm = (data: FormProps) => {};

  return {
    register,
    handleSubmit,
    errors,
    handleForm,
  };
}
