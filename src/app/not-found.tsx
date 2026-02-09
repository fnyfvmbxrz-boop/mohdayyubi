import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-center">
      <div className="animate-fade-in">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Either this page never existed, or I moved it and forgot to update the
          links. Both are equally likely.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn btn-primary"
          >
            Go home
          </Link>
          <Link
            href="/#contact"
            className="btn btn-secondary"
          >
            Let me know what&apos;s broken
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            While you&apos;re here, some places that definitely exist:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/#about"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#projects"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#content"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Content
            </Link>
            <Link
              href="/#speaking"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Speaking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
