import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="flex min-h-screen items-center justify-center">
        <Card
          variant="interactive"
          padding="lg"
          className="max-w-xl"
        >
          <Badge>Featured Project</Badge>

          <h1 className="heading-2 mt-6">
            Enterprise Retail Decision Intelligence Platform
          </h1>

          <p className="body mt-4">
            AI-powered retail analytics platform combining machine learning,
            RAG, FastAPI, React, and enterprise dashboards to deliver
            intelligent business insights.
          </p>

          <div className="mt-8 flex gap-3">
            <Button>View Project</Button>

            <Button variant="outline">
              GitHub
            </Button>
          </div>
        </Card>
      </Container>
    </main>
  );
}

export default App;