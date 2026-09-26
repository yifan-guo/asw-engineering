import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      <h1 className="sr-only">Heat Tile Line genealogy simulator</h1>
      <iframe
        title="Heat tile line genealogy simulator"
        src="/heat-tile-line-simulator.html"
        className="block min-h-0 w-full flex-1 border-0 bg-bg"
      />
    </div>
  );
}
