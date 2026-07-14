import Container from "./Container";

export default function PageLayout({ children, size = "wide" }) {
  return (
    <div className="pt-10 md:pt-16 pb-8">
      <Container size={size}>{children}</Container>
    </div>
  );
}
