import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

function App() {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3">
          <Badge>AI + Full Stack</Badge>

          <Badge variant="secondary">
            Available for Full-Time
          </Badge>

          <Badge variant="outline">
            Open Source
          </Badge>

          <Badge variant="success">
            React
          </Badge>

          <Badge variant="warning">
            TypeScript
          </Badge>

          <Badge variant="error">
            FastAPI
          </Badge>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;