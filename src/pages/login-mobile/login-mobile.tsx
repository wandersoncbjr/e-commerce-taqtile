import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Login } from "../../components/login/login";
import { Separator } from "../../components/separator";
import useWindowWidth from "../../useWindowSize";
import { useNavigate } from "react-router-dom";
import { ContainerLoginMobile } from "./styles";
import { useEffect } from "react";

export function LoginMobile() {
  const windowSize = useWindowWidth();
  const navigate = useNavigate();

  useEffect(() => {
    if (windowSize >= 769) {
      navigate("/");
    }
  }, [windowSize, navigate]);

  return (
    <>
      {windowSize >= 769 ? null : (
        <>
          <Header />
          <ContainerLoginMobile>
            <Login />
          </ContainerLoginMobile>
          <Separator size="small" />
          <Footer />
        </>
      )}
    </>
  );
}
