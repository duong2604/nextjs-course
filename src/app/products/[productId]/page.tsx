export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h2>Product Detail {params.productId} </h2>
    </>
  );
}
