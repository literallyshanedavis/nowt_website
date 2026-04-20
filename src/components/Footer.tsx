export function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-line flex items-center justify-between font-mono text-[12.5px] text-fg-mute max-[700px]:flex-col max-[700px]:gap-4">
      <div>© thirtyseven, 2026 · Made on iPad</div>
      <div className="flex gap-6">
        <a href="#" className="text-fg-dim hover:text-fg transition-colors">
          Privacy
        </a>
        <a href="#" className="text-fg-dim hover:text-fg transition-colors">
          Terms
        </a>
        <a href="#" className="text-fg-dim hover:text-fg transition-colors">
          Press kit
        </a>
        <a
          href="mailto:hello@thirtyseven.app"
          className="text-fg-dim hover:text-fg transition-colors"
        >
          hello@thirtyseven.app
        </a>
      </div>
    </footer>
  );
}
