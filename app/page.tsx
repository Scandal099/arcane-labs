import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <Badge variant="outline" className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400 border-zinc-700">
          Scalable Craft
        </Badge>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          Precision Architecture.<br/>
          <span className="text-[#3B82F6]">Artistic Execution.</span>
        </h1>
        <p className="text-xl text-zinc-400 text-center mb-10 max-w-2xl">
          ARCANE Labs: Architectural Boutique Agency.
        </p>
        <div className="flex gap-4">
          <Button className="h-12 rounded-full bg-zinc-50 px-8 text-black hover:bg-zinc-200">
            Architect Your Vision
          </Button>
          <Button variant="outline" className="h-12 rounded-full text-white border-zinc-700 bg-transparent px-8 hover:bg-zinc-900">
            Explore Capabilities
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
        <Card className="bg-[#111111] border-zinc-800 rounded-3xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Corporate Grade</h2>
            <p className="text-zinc-400">Precision Architecture designed for scalability.</p>
          </CardContent>
        </Card>
        <Card className="bg-[#111111] border-zinc-800 rounded-3xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Premium Execution</h2>
            <p className="text-zinc-400">Artistic craftsmanship for the discerning brand.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
