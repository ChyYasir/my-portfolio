import Container from "./Container";

export default function PageLayout({ children, size = "wide" }) {
  return (
    <main className="min-h-screen pt-24 pb-8">
      <Container size={size}>{children}</Container>
    </main>
  );
}
