import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/showreel", label: "Showreel" },
  { to: "/about", label: "About" },
  { to: "/measurements", label: "Measurements" },
  { to: "/experience", label: "Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="container-luxe flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-xl tracking-widest text-white">AARAV</span>
            <span className="font-display text-xl tracking-widest text-gold">MEHRA</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[11px] tracking-[0.25em] uppercase text-white/70 transition-colors hover:text-gold"
                activeProps={{ className: "text-[11px] tracking-[0.25em] uppercase text-gold" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold">Book</Link>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black animate-fade-in lg:hidden">
          <div className="container-luxe flex h-20 items-center justify-between">
            <span className="font-display text-xl tracking-widest text-white">
              AARAV <span className="text-gold">MEHRA</span>
            </span>
            <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container-luxe mt-16 flex flex-col gap-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-4xl text-white transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-white">
            Aarav <span className="text-gold">Mehra</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Actor. Model. Commercial talent. Represented for editorial, campaigns, and film across
            India and beyond.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2 text-sm text-white/70">
            {NAV.slice(0, 5).map((item) => (
              <li key={item.to}><Link to={item.to} className="hover:text-gold transition-colors">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>bookings@aaravmehra.com</li>
            <li>+91 98•••• ••••</li>
            <li>Mumbai · India</li>
            <li className="pt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-widest uppercase text-white/40">
          <span>© {new Date().getFullYear()} Aarav Mehra. All rights reserved.</span>
          <span>Represented worldwide.</span>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <p className="mt-4 eyebrow">Page not found</p>
        <p className="mt-4 text-sm text-white/60">
          The page you're looking for has moved off-set.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-gold">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-display text-3xl text-white">This page didn't load</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-gold">Try again</button>
          <a href="/" className="btn-ghost-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aarav Mehra — Actor · Model · Commercial Talent" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Aarav Mehra — actor, fashion model and commercial talent based in Mumbai.",
      },
      { name: "author", content: "Aarav Mehra" },
      { property: "og:title", content: "Aarav Mehra — Actor · Model · Commercial Talent" },
      { property: "og:description", content: "Cinematic portfolio of Aarav Mehra — actor, fashion model and commercial talent based in Mumbai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aarav Mehra — Actor · Model · Commercial Talent" },
      { name: "twitter:description", content: "Cinematic portfolio of Aarav Mehra — actor, fashion model and commercial talent based in Mumbai." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/85c94caf-335a-4e71-ab03-cfb3faa40b12/id-preview-2b1f2e41--890139af-0704-4f54-9ccf-3ee602a1d7b4.lovable.app-1784478730762.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/85c94caf-335a-4e71-ab03-cfb3faa40b12/id-preview-2b1f2e41--890139af-0704-4f54-9ccf-3ee602a1d7b4.lovable.app-1784478730762.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main className="pt-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
