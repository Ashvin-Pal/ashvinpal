import { Button } from "@ashvinpal/ui-verse";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Ashvin Pal</h2>
        <p>A little about me</p>
        <Button label="Click me" size="large" />
      </div>
    </main>
  );
}
