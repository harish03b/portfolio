import Button from "@/components/ui/Button";

function App() {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <div className="space-y-4">
        <Button>Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="ghost">Ghost</Button>

        <Button loading>Loading</Button>

        <Button size="icon">🚀</Button>
      </div>
    </main>
  );
}

export default App;