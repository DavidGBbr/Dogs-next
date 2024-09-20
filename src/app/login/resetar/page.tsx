import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

const ResetarPage = ({ searchParams }: ResetarSearchParams) => {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
};

export default ResetarPage;
