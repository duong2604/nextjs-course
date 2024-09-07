export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <>
      Review detail {params.reviewId} for product detail {params.productId}
    </>
  );
}
