import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product Detail ${params.productId}`);
    }, 1000);
  });

  return {
    title: `${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <>
      <h2>Product Detail {params.productId} </h2>
    </>
  );
}
