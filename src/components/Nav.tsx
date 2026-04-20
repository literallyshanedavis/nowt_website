import { navLinks } from "@/data/nav";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-8 py-[18px] backdrop-blur-xl max-[820px]:px-5 max-[820px]:py-3.5"
      style={{
        background:
          "linear-gradient(to bottom, rgba(10,10,11,0.85), rgba(10,10,11,0.55))",
      }}
    >
      <div className="flex items-center gap-2.5 text-[24px] font-medium tracking-[-0.03em]">
        thirtyseven
      </div>
      <ul className="flex gap-7 list-none m-0 p-0 text-[13.5px] text-fg-dim max-[820px]:hidden">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-fg transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#final"
        className="inline-flex items-center gap-2 px-3.5 py-2 border border-line-strong rounded-full text-fg text-[13px] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 transition-colors"
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-accent"
          style={{ animation: "pulse 1.8s infinite" }}
        />
        Join TestFlight
      </a>
    </nav>
  );
}
