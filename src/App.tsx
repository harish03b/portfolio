function App() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="rounded-lg border border-border bg-card p-10 shadow-md">
        <h1 className="font-heading text-4xl font-bold">
          Portfolio
        </h1>

        <p className="mt-4 text-foreground-muted">
          Design system is working.
        </p>

        <button className="mt-6 rounded-md bg-primary px-5 py-2 text-primary-foreground transition-colors hover:bg-primary-hover">
          Continue
        </button>
      </div>
    </main>
  );
}

export default App;