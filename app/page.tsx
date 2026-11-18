import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] p-4 text-white">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Precision Architecture.
          <br />
          <span className="text-[#3B82F6]">Artistic Execution.</span>
        </h1>
        <p className="max-w-xl text-lg text-zinc-400">
          Scalable Craft for the modern digital era.
        </p>
        <div className="flex gap-4">
          <button className="rounded-full bg-[#3B82F6] px-8 py-3 text-sm font-semibold transition hover:bg-[#2563EB]">
            Architect Your Vision
          </button>
          <button className="rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-900">
            Explore Capabilities
          </button>
        </div>
      </div>
    </main>
  );
}
