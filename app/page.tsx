import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
          Scalable Craft
        </Badge>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          ARCANE Labs
        </h1>
        <p className="text-xl text-zinc-400 text-center mb-10 max-w-2xl">
          Architectural Boutique Agency. Where Algorithmic Precision meets Artistic Execution.
        </p>
        <div className="flex gap-4">
          <Button variant="default" className="bg-white text-black hover:bg-zinc-200">
            View Work
          </Button>
          <Button variant="outline" className="text-white border-zinc-700 hover:bg-zinc-800">
            Contact
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Corporate Grade</h2>
            <p className="text-zinc-400">Precision Architecture designed for scalability.</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Premium Execution</h2>
            <p className="text-zinc-400">Artistic craftsmanship for the discerning brand.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
