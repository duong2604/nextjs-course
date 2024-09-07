export default function DocsPage({ params }: { params: { slug: string[] } }) {
  if (params?.slug?.length === 1) {
    return <h2> Viewing Docs {params.slug[0]}</h2>;
  } else if (params?.slug?.length) {
    return (
      <h2>
        {" "}
        Viewing Docs {params.slug[0]} and feature {params?.slug[1]}
      </h2>
    );
  }

  return (
    <div>
      <h2>Welcome to docs</h2>
    </div>
  );
}
