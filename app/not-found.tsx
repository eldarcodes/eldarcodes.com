export default function NotFoundPage() {
  const email = "eldarcodes@icloud.com";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {"This page doesn't exist."}
      </h1>
      <p className="mb-4">If you expected to see something here, let me know</p>
      <p>
        <a href={`mailto:${email}`}>
          <span className="text-blue-500">{email}</span>
        </a>
      </p>
    </section>
  );
}
