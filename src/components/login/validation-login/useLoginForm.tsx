import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schemaLogin } from "./schema-login";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../../graphql/mutations/mutation-login/mutation-login";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const [login, { error, loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      localStorage.setItem("token", `${data.login.token}`);
      navigate("/");
    },
  });

  const handleForm = (data: FormProps) => {
    login({
      variables: {
        data: {
          email: data.email,
          password: data.password,
        },
      },
    });
  };

  return {
    register,
    error,
    handleSubmit,
    errors,
    handleForm,
    loading,
  };
}
