import React from "react";

const FotoIdPage = ({ params }: { params: { id: number } }) => {
  return (
    <main>
      <h1>Foto Id: {params.id}</h1>
    </main>
  );
};

export default FotoIdPage;
