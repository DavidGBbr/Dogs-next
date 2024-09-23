"use client";

import { useUser } from "@/context/user-context";

const ContaPage = () => {
  const { user } = useUser();
  return (
    <main>
      <h1>Conta: {user?.nome}</h1>
    </main>
  );
};

export default ContaPage;
