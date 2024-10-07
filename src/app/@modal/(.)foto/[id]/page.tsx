import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/feed-modal";
import { notFound } from "next/navigation";
import React from "react";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}

const FotoIdPage = async ({ params }: { params: { id: string } }) => {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return <FeedModal photo={data} />;
};

export default FotoIdPage;
