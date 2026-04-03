import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-drywall px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Wordmark className="text-lg" />
        <div className="text-right">
          <p className="text-sm text-dusk">
            &copy; 2026 &middot; Built in the North
          </p>
          <p className="mt-1 text-xs text-dusk/60">
            3D model by{" "}
            <a
              href="https://sketchfab.com/DatSketch"
              className="hover:text-dusk"
              target="_blank"
              rel="noopener noreferrer"
            >
              DatSketch
            </a>{" "}
            (CC-BY-NC-4.0)
          </p>
        </div>
      </div>
    </footer>
  );
}
