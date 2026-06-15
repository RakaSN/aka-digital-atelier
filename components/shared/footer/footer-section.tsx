import { Container } from "@/components/layout/container";

function FooterSection() {
  return (
    <footer className="border-t border-zinc-900 py-16">
      <Container>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            AKA
          </h3>

          <p className="text-zinc-500">
            Teacher • Developer • Linux Engineer • Creative Technologist • Music Producer
          </p>

          <p className="text-sm text-zinc-600">
            © 2026 AKA. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
export default FooterSection;