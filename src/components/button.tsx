import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400";

export function PrimaryButton({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} bg-accent-500 text-white shadow-[0_0_45px_rgba(82,136,255,0.55)] hover:bg-accent-400`}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} border border-white/20 bg-white/5 text-slate-100 hover:border-white/40 hover:bg-white/10`}
    >
      {children}
    </Link>
  );
}
