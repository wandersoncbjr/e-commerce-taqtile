import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { SignUpUser } from "../../components/sign-up-user/sign-up-user";
import { ContainerSignUp } from "./style";

export function SignUp() {
  return (
    <>
      <Header />
      <ContainerSignUp>
        <SignUpUser />
      </ContainerSignUp>
      <Footer />
    </>
  );
}
