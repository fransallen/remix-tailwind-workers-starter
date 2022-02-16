import { Link } from "remix";

export default function Index() {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.4" }}
      className="p-8 text-gray-700"
    >
      <header className="pt-24 md:pt-28 text-center">
        <Link to="/" className="inline-block">
          <h1 className="text-5xl md:text-6xl text-black font-extrabold leading-tighter tracking-tighter mb-4">
            Remix Starter
          </h1>
        </Link>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl mb-8">
            A Remix starter that includes Tailwind CSS, TypeScript, and
            Cloudflare Workers deployment.
          </p>
        </div>
      </header>

      <main className="pt-8 md:pt-12 text-center text-xl max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </main>

      <footer className="py-24 md:py-28 text-center space-y-5">
        <p className="text-base">
          &copy; {new Date().getFullYear()} Remix Starter
        </p>
      </footer>
    </div>
  );
}
