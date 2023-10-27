import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schemaSignUp } from "./schema-sign-up";
import { SIGN_UP_MUTATION } from "../../../graphql/mutations/mutation-sign-up/mutation-sign-up";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const [signUp, { loading }] = useMutation(SIGN_UP_MUTATION, {
    onCompleted: () => {
      navigate("/login");
    },
  });

  const handleSignUp = (data: SignUpFormProps) => {
    signUp({
      variables: {
        data: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    handleSignUp,
    loading,
  };
}
