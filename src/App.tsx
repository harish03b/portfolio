import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="section">
        <div className="mb-10 flex justify-end">
          <ThemeToggle />
        </div>

        <SectionHeading
          overline="Portfolio"
          title="Selected Work"
          description="A collection of AI-powered platforms, enterprise software, and modern full-stack applications built to solve real-world business problems."
          align="center"
        />
      </Container>
    </main>
  );
}

export default App;