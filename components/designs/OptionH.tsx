"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option H — "Version B"
   Hi-fi recreation of the Version B UI kit (the React + raw CSS files shared
   on 2026-05-19). Converted from <link rel="stylesheet"> + className-based
   CSS into the inline-styles + useIsMobile pattern used everywhere else in
   this codebase. All 7 pages built: Home, Coaching, Consulting, Talent,
   AI Solutions, About, Contact. Missing pages (Coaching, Talent, About)
   carry verbatim content from Version A (OptionC) so the two versions can
   be compared head-to-head without missing surfaces.

   Distinctive design choices preserved from the kit:
   - Dark navy hero with photo backdrop + diagonal gradient overlay
   - Spaced-caps eyebrows ("S E R V I C E  L I N E")
   - 4-column stat strip with hairline dividers
   - Sharper 8px card geometry (vs Version A's 4-12px)
   - Editorial italic pull-quote on home page
   - Numbered horizontal engagement steps
   - Section--navy "Let's Start" CTA at the foot of every page
*/

// ----- Design tokens -----
const T = {
  // Navy scale
  navy900: "#0E141C",
  navy800: "#1B2838",
  navy700: "#2A3A4F",
  navy500: "#3F4E66",
  navy400: "#5E6F86",
  navy300: "#92A2B9",
  navy200: "#B6C3D5",
  // Bone scale (warm cream paper)
  bone0: "#FFFFFF",
  bone50: "#FAF8F4",
  bone100: "#F2EEE7",
  // Teal accent
  teal800: "#1B5F63",
  teal700: "#247479",
  teal500: "#3AAFB5",
  teal400: "#5AC3C9",
  teal300: "#8ED6D9",
  // Orange highlight
  orange500: "#E8943A",
  // Foreground
  fg: "#0E141C",
  fgMuted: "#4A5563",
  fgSoft: "#8A93A0",
  // Borders
  border: "rgba(27,40,56,0.10)",
  borderNavy: "rgba(255,255,255,0.10)",
  // Type
  sans: "'Inter', system-ui, sans-serif",
  serif: "'Petrona', Georgia, serif",
} as const;

type Page = "home" | "coaching" | "consulting" | "talent" | "ai" | "about" | "contact";

// Helpers ---------------------------------------------------------------

function spacedCaps(text: string): string {
  return text.split("").join(" ").replace(/   /g, "  ");
}

function Eyebrow({ children, onNavy = false, className }: { children: string; onNavy?: boolean; className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase" as const,
        color: onNavy ? T.teal300 : T.navy400,
        display: "inline-block",
        fontFamily: T.sans,
      }}
    >
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lede,
  onNavy = false,
  m,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: string;
  onNavy?: boolean;
  m: boolean;
}) {
  return (
    <div style={{ maxWidth: 720, marginBottom: m ? "2.5rem" : "3.5rem" }}>
      {eyebrow && <Eyebrow onNavy={onNavy}>{eyebrow}</Eyebrow>}
      {title && (
        <h2
          style={{
            fontFamily: T.sans,
            fontSize: m ? "1.85rem" : "2.5rem",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            lineHeight: 1.1,
            color: onNavy ? T.bone50 : T.fg,
            margin: "0.85rem 0 1rem",
          }}
        >
          {title}
        </h2>
      )}
      {lede && (
        <p
          style={{
            fontFamily: T.sans,
            fontSize: m ? "1rem" : "1.0625rem",
            lineHeight: 1.55,
            color: onNavy ? T.navy200 : T.fgMuted,
            maxWidth: 600,
            margin: 0,
          }}
        >
          {lede}
        </p>
      )}
      <span
        aria-hidden
        style={{
          display: "block",
          width: 36,
          height: 2,
          background: onNavy ? T.teal500 : T.navy800,
          marginTop: "1.25rem",
        }}
      />
    </div>
  );
}

function PrimaryBtn({ children, onClick, onNavy = false }: { children: React.ReactNode; onClick?: () => void; onNavy?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: T.sans,
        fontSize: "0.85rem",
        fontWeight: 500,
        padding: "0.85rem 1.4rem",
        borderRadius: 2,
        border: "1px solid transparent",
        cursor: "pointer",
        letterSpacing: "0.005em",
        transition: "background-color 0.15s ease, transform 0.1s ease",
        background: onNavy ? T.bone50 : T.navy800,
        color: onNavy ? T.navy900 : T.bone50,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = onNavy ? T.bone100 : T.navy700;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = onNavy ? T.bone50 : T.navy800;
      }}
    >
      {children}
    </button>
  );
}

function SecondaryBtn({ children, onClick, onNavy = false }: { children: React.ReactNode; onClick?: () => void; onNavy?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: T.sans,
        fontSize: "0.85rem",
        fontWeight: 500,
        padding: "0.85rem 1.4rem",
        borderRadius: 2,
        background: "transparent",
        color: onNavy ? T.bone50 : T.navy800,
        border: `1px solid ${onNavy ? T.bone50 : T.navy800}`,
        cursor: "pointer",
        letterSpacing: "0.005em",
        transition: "background-color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = onNavy ? "rgba(255,255,255,0.08)" : "rgba(27,40,56,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: T.navy800,
        color: T.bone50,
        display: "grid",
        placeItems: "center",
        fontWeight: 700,
        fontSize: size * 0.32,
        letterSpacing: "0.04em",
        borderRadius: "50%",
        position: "relative",
        overflow: "hidden",
        fontFamily: T.sans,
      }}
      aria-label="CCS"
    >
      <span style={{ position: "relative", zIndex: 2 }}>CCS</span>
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: "14%",
          right: "14%",
          bottom: "22%",
          height: 2,
          background: T.teal500,
          borderRadius: 999,
        }}
      />
    </div>
  );
}

function StatStrip({ stats, m }: { stats: { big: string; label: string; highlight?: boolean }[]; m: boolean }) {
  return (
    <div
      style={{
        background: T.bone50,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: m ? "1.5rem 1.25rem" : "2.25rem 1.5rem",
          display: "grid",
          gridTemplateColumns: m ? "1fr 1fr" : `repeat(${stats.length}, 1fr)`,
          gap: m ? "1rem" : "1.5rem",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "flex-start",
              paddingLeft: !m && i > 0 ? "1.5rem" : 0,
              borderLeft: !m && i > 0 ? `1px solid ${T.border}` : "none",
            }}
          >
            <span
              style={{
                fontFamily: T.sans,
                fontSize: m ? "1.75rem" : "2.5rem",
                fontWeight: 600,
                color: s.highlight ? T.orange500 : T.navy800,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.big}
            </span>
            <span
              style={{
                fontFamily: T.sans,
                fontSize: m ? "0.62rem" : "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                color: T.fgSoft,
                textTransform: "uppercase" as const,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pillar({
  n,
  title,
  body,
  onClick,
  m,
}: {
  n: number;
  title: string;
  body: string;
  onClick?: () => void;
  m: boolean;
}) {
  return (
    <article
      onClick={onClick}
      style={{
        background: T.bone0,
        border: `1px solid ${T.border}`,
        borderRadius: 8,
        padding: m ? "1.5rem 1.5rem 1.25rem" : "2rem 2.15rem 1.85rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!onClick) return;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(15,25,40,0.06), 0 12px 32px rgba(15,25,40,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          fontFamily: T.sans,
          fontSize: "0.75rem",
          fontWeight: 500,
          color: T.teal700,
          letterSpacing: "0.06em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {n.toString().padStart(2, "0")}
      </span>
      <Eyebrow>{spacedCaps("SERVICE LINE")}</Eyebrow>
      <h3
        style={{
          fontFamily: T.sans,
          fontSize: m ? "1.3rem" : "1.5rem",
          fontWeight: 600,
          letterSpacing: "-0.012em",
          color: T.fg,
          marginTop: 2,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: T.sans,
          fontSize: "0.875rem",
          lineHeight: 1.6,
          color: T.fgMuted,
          marginBottom: "0.5rem",
          margin: 0,
        }}
      >
        {body}
      </p>
      <span
        style={{
          fontFamily: T.sans,
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          color: T.teal700,
          textTransform: "uppercase" as const,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {spacedCaps("LEARN MORE")} <span>→</span>
      </span>
    </article>
  );
}

function EngagementStep({
  n,
  title,
  body,
  onNavy = false,
  m,
}: {
  n: number;
  title: string;
  body: string;
  onNavy?: boolean;
  m: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: m ? "60px 1fr" : "80px 220px 1fr",
        gap: m ? "1rem" : "2rem",
        padding: "1.75rem 0",
        borderTop: `1px solid ${onNavy ? T.borderNavy : T.border}`,
        alignItems: "baseline",
      }}
    >
      <span
        style={{
          fontFamily: T.sans,
          fontSize: m ? "1.5rem" : "2rem",
          fontWeight: 300,
          color: onNavy ? T.teal400 : T.navy400,
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        {n.toString().padStart(2, "0")}
      </span>
      <h3
        style={{
          fontFamily: T.sans,
          fontSize: m ? "1.15rem" : "1.375rem",
          fontWeight: 600,
          color: onNavy ? T.bone50 : T.fg,
          margin: 0,
          gridColumn: m ? "2 / 3" : "auto",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: T.sans,
          fontSize: "0.94rem",
          lineHeight: 1.6,
          color: onNavy ? T.navy200 : T.fgMuted,
          margin: 0,
          marginTop: m ? "0.5rem" : 0,
          gridColumn: m ? "2 / 3" : "auto",
        }}
      >
        {body}
      </p>
    </div>
  );
}

function LongItem({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: "0.875rem", borderTop: `1px solid ${T.border}` }}>
      <h3 style={{ fontFamily: T.sans, fontSize: "1.125rem", fontWeight: 600, color: T.fg, margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: T.sans, fontSize: "0.875rem", lineHeight: 1.6, color: T.fgMuted, margin: 0 }}>{body}</p>
    </div>
  );
}

function LongList({ items, m }: { items: { title: string; body: string }[]; m: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "1.25rem" : "2rem 3rem" }}>
      {items.map((it) => (
        <LongItem key={it.title} {...it} />
      ))}
    </div>
  );
}

function LetsStart({
  title,
  body,
  primary,
  secondary,
  onClick,
  m,
}: {
  title: React.ReactNode;
  body: string;
  primary: string;
  secondary?: string;
  onClick?: () => void;
  m: boolean;
}) {
  return (
    <section style={{ background: T.navy800, color: T.bone50 }}>
      <div
        style={{
          padding: m ? "3rem 1.25rem" : "5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <Eyebrow onNavy>{spacedCaps("LET'S START")}</Eyebrow>
          <h2
            style={{
              fontFamily: T.sans,
              fontSize: m ? "2rem" : "3.25rem",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: T.bone50,
              margin: "0.875rem 0 1.125rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: T.sans,
              fontSize: "1rem",
              lineHeight: 1.6,
              color: T.navy200,
              maxWidth: 540,
              marginBottom: "1.75rem",
            }}
          >
            {body}
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <PrimaryBtn onClick={onClick} onNavy>
              {primary}
            </PrimaryBtn>
            {secondary && (
              <button
                onClick={onClick}
                style={{
                  background: "transparent",
                  color: T.teal300,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: T.sans,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  padding: "0.5rem 0",
                }}
              >
                {secondary} <span style={{ marginLeft: 4 }}>→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({
  page,
  onNav,
  m,
}: {
  page: Page;
  onNav: (p: Page) => void;
  m: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [Page, string][] = [
    ["home", "Home"],
    ["coaching", "Coaching"],
    ["consulting", "Consulting"],
    ["talent", "Talent"],
    ["ai", "AI Solutions"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250, 248, 244, 0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "border-color 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: m ? "0 1.25rem" : "0 1.5rem",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div
          onClick={() => {
            onNav("home");
            setMenuOpen(false);
          }}
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
        >
          <LogoMark size={36} />
          {!m && (
            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: T.navy900, letterSpacing: "-0.005em", fontFamily: T.sans }}>
              Complete Career Solutions
            </span>
          )}
        </div>

        {m ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={`h-ham-${i}`}
                style={{
                  width: 22,
                  height: 2,
                  background: T.navy800,
                  transition: "all 0.25s",
                  transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none") : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        ) : (
          <nav style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {links.map(([id, label]) => (
              <a
                key={id}
                onClick={() => onNav(id)}
                style={{
                  fontFamily: T.sans,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: page === id ? T.navy900 : T.navy700,
                  letterSpacing: "0.005em",
                  padding: "6px 0",
                  borderBottom: `1px solid ${page === id ? T.navy800 : "transparent"}`,
                  cursor: "pointer",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                }}
              >
                {label}
              </a>
            ))}
            <PrimaryBtn onClick={() => onNav("contact")}>Schedule a Call</PrimaryBtn>
          </nav>
        )}
      </div>

      {m && menuOpen && (
        <div
          style={{
            background: "rgba(250, 248, 244, 0.98)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${T.border}`,
            padding: "1rem 1.25rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {links.map(([id, label]) => (
            <a
              key={`m-${id}`}
              onClick={() => {
                onNav(id);
                setMenuOpen(false);
              }}
              style={{
                fontFamily: T.sans,
                fontSize: "0.95rem",
                fontWeight: 500,
                color: page === id ? T.navy900 : T.navy700,
                padding: "0.85rem 0",
                borderBottom: `1px solid ${T.border}`,
                cursor: "pointer",
              }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              onNav("contact");
              setMenuOpen(false);
            }}
            style={{
              marginTop: "1rem",
              padding: "0.85rem 1.25rem",
              background: T.navy800,
              color: T.bone50,
              border: "none",
              borderRadius: 2,
              fontFamily: T.sans,
              fontSize: "0.85rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Schedule a Call
          </button>
        </div>
      )}
    </header>
  );
}

function Footer({ onNav, m }: { onNav: (p: Page) => void; m: boolean }) {
  return (
    <footer
      style={{
        background: T.navy900,
        color: T.bone50,
        padding: m ? "3rem 0 1.5rem" : "4.5rem 0 1.75rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: m ? "0 1.25rem" : "0 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: m ? "2.25rem" : "3rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "2fr 1fr 1fr 1fr",
            gap: m ? "2rem" : "2.5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 320 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <LogoMark size={32} />
              <span style={{ fontSize: "1rem", fontWeight: 600, color: T.bone50, fontFamily: T.sans }}>Complete Career Solutions</span>
            </div>
            <p style={{ fontFamily: T.sans, fontSize: "0.82rem", lineHeight: 1.55, color: T.navy300, margin: 0 }}>
              A consulting house in Austin. Driving impactful change since 2010.
            </p>
          </div>

          {[
            {
              label: spacedCaps("SERVICES"),
              links: [
                ["Executive Coaching", "coaching"],
                ["Consulting", "consulting"],
                ["Talent Management", "talent"],
                ["AI Enablement", "ai"],
              ] as [string, Page][],
            },
            {
              label: spacedCaps("FIRM"),
              links: [
                ["About", "about"],
                ["Contact", "contact"],
              ] as [string, Page][],
            },
          ].map((col) => (
            <div key={col.label}>
              <div
                style={{
                  fontFamily: T.sans,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  color: T.teal300,
                  textTransform: "uppercase" as const,
                  marginBottom: "1rem",
                }}
              >
                {col.label}
              </div>
              {col.links.map(([label, target]) => (
                <a
                  key={label}
                  onClick={() => onNav(target)}
                  style={{
                    display: "block",
                    fontFamily: T.sans,
                    fontSize: "0.82rem",
                    color: T.navy200,
                    padding: "4px 0",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          ))}

          <div>
            <div
              style={{
                fontFamily: T.sans,
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: T.teal300,
                textTransform: "uppercase" as const,
                marginBottom: "1rem",
              }}
            >
              {spacedCaps("AUSTIN, TX")}
            </div>
            {["555 E 5th St", "+1 (512) 579-1819", "ttriolo@completecareersolutions.com"].map((line) => (
              <div
                key={line}
                style={{
                  fontFamily: T.sans,
                  fontSize: "0.82rem",
                  color: T.navy200,
                  padding: "4px 0",
                  wordBreak: "break-word" as const,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${T.borderNavy}`,
            paddingTop: "1.375rem",
            display: "flex",
            flexDirection: m ? "column" : "row",
            justifyContent: "space-between",
            alignItems: m ? "flex-start" : "center",
            gap: m ? "0.75rem" : 0,
            fontFamily: T.sans,
            fontSize: "0.7rem",
            color: T.navy400,
          }}
        >
          <span>© 2026 Complete Career Solutions · Austin, Texas</span>
          <div style={{ display: "flex", gap: "1.125rem" }}>
            <a style={{ color: T.navy300, cursor: "pointer" }}>LinkedIn</a>
            <a style={{ color: T.navy300, cursor: "pointer" }}>Privacy</a>
            <a style={{ color: T.navy300, cursor: "pointer" }}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Hero({
  eyebrow,
  title,
  lede,
  bgImage,
  ctas,
  m,
  minHeight = 640,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  bgImage: string;
  ctas: React.ReactNode;
  m: boolean;
  minHeight?: number;
}) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: m ? 460 : minHeight,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: T.navy800,
        color: T.bone50,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.85)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(14,20,28,0.82) 0%, rgba(14,20,28,0.55) 45%, rgba(14,20,28,0.2) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: m ? "4rem 1.25rem 3rem" : "5rem 1.5rem 4rem",
          width: "100%",
        }}
      >
        <Eyebrow onNavy>{eyebrow}</Eyebrow>
        <h1
          style={{
            fontFamily: T.sans,
            fontSize: m ? "2.25rem" : "clamp(2.75rem, 6vw, 4.5rem)",
            fontWeight: 600,
            lineHeight: 1.04,
            letterSpacing: "-0.022em",
            margin: m ? "0.875rem 0 1rem" : "1.125rem 0 1.375rem",
            maxWidth: 880,
            color: T.bone50,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: T.sans,
            fontSize: m ? "1rem" : "1.125rem",
            lineHeight: 1.6,
            color: T.navy200,
            maxWidth: 580,
            marginBottom: "2rem",
          }}
        >
          {lede}
        </p>
        <div style={{ display: "flex", gap: m ? "0.75rem" : "0.875rem", flexWrap: "wrap" }}>
          {ctas}
        </div>
      </div>
    </section>
  );
}

// Pages -----------------------------------------------------------------

function HomePage({ onNav, m }: { onNav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <Hero
        eyebrow={spacedCaps("DRIVING IMPACTFUL CHANGE SINCE 2010 · AUSTIN, TEXAS")}
        title={
          <>
            Empowering organizations
            {!m && <br />}
            {m ? " " : ""}through strategic consulting.
          </>
        }
        lede="At Complete Career Solutions, we drive impactful change rooted in the power of the individual. Our mission is to guide you in surpassing your business objectives."
        bgImage="/HomePageBackground.jpg"
        ctas={
          <>
            <PrimaryBtn onClick={() => onNav("contact")} onNavy>
              Schedule a Discovery Call
            </PrimaryBtn>
            <SecondaryBtn onClick={() => onNav("consulting")} onNavy>
              See How We Work
            </SecondaryBtn>
          </>
        }
        m={m}
      />

      <StatStrip
        m={m}
        stats={[
          { big: "25+", label: "Years Leadership Experience" },
          { big: "6", label: "Industries Served" },
          { big: "100%", label: "Referral-Driven Growth", highlight: true },
          { big: "2010", label: "Founded · Austin, TX" },
        ]}
      />

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("WHAT WE DO")}
            title="Four integrated pillars that meet leaders where they are."
            lede="The point of entry can be coaching, consulting, talent, or AI enablement. The engagement looks the same once we're in: solve the problem in the way best suited for you in that moment."
          />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "1rem" }}>
            <Pillar
              m={m}
              n={1}
              title="Executive Coaching"
              body="Enhance leadership skills and maximize potential through personalized coaching programs tailored to your organization's needs."
              onClick={() => onNav("coaching")}
            />
            <Pillar
              m={m}
              n={2}
              title="Consulting"
              body="Optimize your business operations and processes for efficiency and profitability under expert guidance."
              onClick={() => onNav("consulting")}
            />
            <Pillar
              m={m}
              n={3}
              title="Talent Management"
              body="Foster a culture of strong leadership and professional growth with tailored development solutions, anchored in coaching-informed recruitment."
              onClick={() => onNav("talent")}
            />
            <Pillar
              m={m}
              n={4}
              title="AI Solutions"
              body="Build confident leaders in the age of AI through readiness assessments, secure workspace setup, and ongoing enablement."
              onClick={() => onNav("ai")}
            />
          </div>
        </div>
      </section>

      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "1.5rem" : "4rem", alignItems: "start" }}>
            <div>
              <Eyebrow>{spacedCaps("PARTNERING FOR SUCCESS")}</Eyebrow>
              <h2
                style={{
                  fontFamily: T.sans,
                  fontSize: m ? "1.85rem" : "2.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.018em",
                  lineHeight: 1.1,
                  color: T.fg,
                  margin: "0.875rem 0 0",
                }}
              >
                Driving impactful change since 2010.
              </h2>
              <span aria-hidden style={{ display: "block", width: 36, height: 2, background: T.navy800, marginTop: "1.375rem" }} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: T.sans,
                  fontSize: m ? "1rem" : "1.0625rem",
                  lineHeight: 1.55,
                  color: T.fgMuted,
                  marginBottom: "1.25rem",
                  margin: 0,
                }}
              >
                With a focus on intention, integrity, and excellence, we build lasting partnerships that foster growth and resilience. By partnering with us, you gain access to a wealth of knowledge and trusted advisors committed to driving your business forward.
              </p>
              <p
                style={{
                  fontFamily: T.serif,
                  fontSize: m ? "1.2rem" : "1.5rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.35,
                  color: T.navy900,
                  letterSpacing: "-0.005em",
                  marginTop: "1.5rem",
                }}
              >
                &ldquo;We self-select a small number of clients we want to work with. Whatever the point of entry, coaching, talent, or AI, the engagement looks the same.&rdquo;
              </p>
              <div
                style={{
                  marginTop: "1.125rem",
                  fontFamily: T.sans,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase" as const,
                  color: T.fgSoft,
                }}
              >
                {spacedCaps("TOM TRIOLO, CEO & EXECUTIVE COACH")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("IMPACT")}
            title="Leaders across six industries trust CCS."
            lede="Technology · Financial Services · Medical Devices · Professional Services · Consumer Products · Commercial Development"
          />
        </div>
      </section>

      <LetsStart
        m={m}
        title={
          <>
            Ready to build leaders
            {!m && <br />}
            {m ? " " : ""}who build what&apos;s next?
          </>
        }
        body="Every engagement starts with a conversation. Tell us where you are and where you need to be, and we'll map the path together."
        primary="Schedule a Discovery Call"
        secondary="See How We Work"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

function CoachingPage({ onNav, setModal, m }: { onNav: (p: Page) => void; setModal: (k: "tom" | "brent") => void; m: boolean }) {
  return (
    <>
      <Hero
        eyebrow={spacedCaps("EXECUTIVE COACHING")}
        title={<>Unlock the potential of executive coaching.</>}
        lede="Empower leaders to excel in today's challenges and capitalize on tomorrow's opportunities. Our coaches blend established methodologies with a personalized approach for each leader."
        bgImage="/ExecutiveCoachingImage.jpg"
        ctas={
          <PrimaryBtn onClick={() => onNav("contact")} onNavy>
            Start a Coaching Engagement
          </PrimaryBtn>
        }
        m={m}
        minHeight={540}
      />

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("COACHING OUTCOMES")}
            title="What leaders gain from working with CCS."
            lede="This powerful fusion equips us with unparalleled capabilities to elevate leadership effectiveness."
          />
          <LongList
            m={m}
            items={[
              { title: "Accelerated Leadership Impact", body: "Propel your leadership journey forward by honing the mindsets and skillsets crucial for success." },
              { title: "Enhanced Communication Skills", body: "Cultivate more impactful communication techniques to engage effectively with your team and stakeholders." },
              { title: "Elevated Executive Presence", body: "Develop a commanding executive presence that garners respect and inspires confidence." },
              { title: "Heightened Self-Awareness", body: "Gain deeper insights into your strengths, weaknesses, and blind spots, fostering personal growth and resilience." },
            ]}
          />
        </div>
      </section>

      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("OUR APPROACH")}
            title={<>Integrating &ldquo;inside-out&rdquo; and &ldquo;outside-in&rdquo; coaching.</>}
          />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "1rem" : "1.5rem" }}>
            <div style={{ padding: "1.75rem", background: T.bone0, border: `1px solid ${T.border}`, borderRadius: 8, borderTop: `3px solid ${T.teal500}` }}>
              <Eyebrow>{spacedCaps("INSIDE-OUT")}</Eyebrow>
              <h4 style={{ fontFamily: T.sans, fontSize: "1.25rem", fontWeight: 600, color: T.fg, margin: "0.6rem 0 0.6rem" }}>
                Personal alignment
              </h4>
              <p style={{ fontFamily: T.sans, fontSize: "0.92rem", lineHeight: 1.6, color: T.fgMuted, margin: 0 }}>
                Delves into personal traits and motivations, enabling leaders to align their goals with their core beliefs and values.
              </p>
            </div>
            <div style={{ padding: "1.75rem", background: T.bone0, border: `1px solid ${T.border}`, borderRadius: 8, borderTop: `3px solid ${T.orange500}` }}>
              <Eyebrow>{spacedCaps("OUTSIDE-IN")}</Eyebrow>
              <h4 style={{ fontFamily: T.sans, fontSize: "1.25rem", fontWeight: 600, color: T.fg, margin: "0.6rem 0 0.6rem" }}>
                Organizational alignment
              </h4>
              <p style={{ fontFamily: T.sans, fontSize: "0.92rem", lineHeight: 1.6, color: T.fgMuted, margin: 0 }}>
                Focuses on organizational objectives, providing leaders with a holistic understanding of success criteria and how they are perceived by others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("EXECUTIVE TEAM COACHING")}
            title="Unlocking high performance."
            lede="High-performance leadership teams don't just happen. They are a deliberate effort that requires collective commitment from every team member."
          />
          <LongList
            m={m}
            items={[
              { title: "Cohesive Alignment", body: "Sessions that create space for executive teams to align on goals, strategies, and stakeholder perceptions, fostering a united front." },
              { title: "Reflective Dialogue", body: "Guided reflection and open dialogue surfaces what works and what impedes effectiveness, driving continuous improvement." },
              { title: "Enhanced Relationships", body: "Stronger relationships, trust, and connectedness among team members, leading to greater team effectiveness." },
              { title: "Learning and Development", body: "Team members learn and grow together with a direct impact on organizational success and performance." },
            ]}
          />
        </div>
      </section>

      {/* Use the Leadership tease so coaching feels personally led */}
      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader m={m} eyebrow={spacedCaps("LED BY")} title="25 years of senior leadership experience." />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "1rem" : "1.5rem" }}>
            {(["tom", "brent"] as const).map((key) => {
              const p = teamData[key];
              return (
                <button
                  key={key}
                  onClick={() => setModal(key)}
                  style={{
                    textAlign: "left",
                    background: T.bone0,
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: m ? "1.5rem" : "1.75rem",
                    cursor: "pointer",
                    fontFamily: T.sans,
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  {p.photo ? (
                    <Image src={p.photo} alt={p.name} width={56} height={56} style={{ borderRadius: "50%", objectFit: "cover" }} />
                  ) : (
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: T.navy800, color: T.teal300, display: "grid", placeItems: "center", fontWeight: 700 }}>
                      {p.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 600, color: T.fg }}>{p.name}</div>
                    <div style={{ fontSize: "0.72rem", color: T.teal700, fontWeight: 600, letterSpacing: "0.04em", marginTop: 4 }}>
                      {p.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <LetsStart
        m={m}
        title="What leadership challenge are your executives facing today?"
        body="Let's explore how coaching can create measurable leadership impact."
        primary="Schedule a Discovery Call"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

function ConsultingPage({ onNav, m }: { onNav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <Hero
        eyebrow={spacedCaps("CONSULTING · EST. 2010")}
        title={
          <>
            Human Capital Strategy
            {!m && <br />}
            {m ? " " : ""}&amp; Solutions.
          </>
        }
        lede="In today's fast-paced business landscape, disruption is inevitable. We specialize in strategies that empower leaders to navigate it effectively, driving change, elevating the team's experience, and enhancing leadership capability."
        bgImage="/HomePageBackground.jpg"
        ctas={
          <PrimaryBtn onClick={() => onNav("contact")} onNavy>
            Start a Consulting Engagement
          </PrimaryBtn>
        }
        m={m}
        minHeight={540}
      />

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader m={m} eyebrow={spacedCaps("OUR CONSULTING OFFERINGS")} title="Embrace change with confidence." />
          <LongList
            m={m}
            items={[
              { title: "Outcome-Driven Solutions", body: "We focus on outcomes, not just outputs, to redefine the possibilities of work. Our approach reimagines tasks that can be automated, optimizes allocation, and reshapes where and how work is performed." },
              { title: "Flexible Operations", body: "We help design, build, implement, and maintain flexible operations that align with your strategic objectives. The goal is agile ways of working that drive business results." },
              { title: "Digital Transformation", body: "Accelerate your digital journey with expertise in new technologies, platforms, and work methodologies. Practical, deployable, measured by results." },
              { title: "Team Experience Assessment", body: "Quickly gauge the sentiment of your team and identify opportunities for improvement. Comprehensive strategies that drive positive employee experiences in the new norms." },
              { title: "Leadership Capability Development", body: "Equip your leadership team with the skills and capabilities to deliver sustainable value. We focus on strong leadership foundations that drive success in dynamic environments." },
              { title: "Operational Consulting", body: "Senior-led, hands-on engagements that embed alongside your team, leaving the people, frameworks, and decisions you need to keep running the new model." },
            ]}
          />
        </div>
      </section>

      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("WHO WE WORK WITH")}
            title="Leaders navigating real change."
            lede="We partner with CEOs, CHROs, COOs, and senior operating leaders inside organizations that are scaling, restructuring, integrating an acquisition, or rebuilding a function after sustained growth."
          />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "1.5rem" : "3rem", marginTop: "1.5rem" }}>
            <div>
              <Eyebrow>{spacedCaps("INDUSTRIES")}</Eyebrow>
              <p style={{ fontFamily: T.sans, marginTop: 14, fontSize: "0.95rem", lineHeight: 1.6, color: T.fgMuted }}>
                Technology · Financial Services · Medical Devices · Professional Services · Consumer Products · Commercial Development
              </p>
            </div>
            <div>
              <Eyebrow>{spacedCaps("ENGAGEMENT TYPE")}</Eyebrow>
              <p style={{ fontFamily: T.sans, marginTop: 14, fontSize: "0.95rem", lineHeight: 1.6, color: T.fgMuted }}>
                Retained advisory · Project-based · Embedded modules · 30 days to 12 months · Renewable quarter by quarter
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: T.navy800, color: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            onNavy
            eyebrow={spacedCaps("HOW WE ENGAGE")}
            title="A consulting engagement that actually transfers."
            lede="We embed alongside your team rather than handing over a deck. Every engagement is built to leave behind the people, frameworks, and decisions your team needs to keep running the new model after we've gone."
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <EngagementStep m={m} onNavy n={1} title="Listen" body="Stakeholder conversations, current-state mapping, and a candid read on what is actually getting in the way." />
            <EngagementStep m={m} onNavy n={2} title="Design" body="A working model your team helps shape, not a 100-page deck. Specific deliverables, specific owners, specific timing." />
            <EngagementStep m={m} onNavy n={3} title="Embed" body="We work inside the team, not over them. Senior-led, hands-on, accountable to the same outcomes your leaders are." />
            <EngagementStep m={m} onNavy n={4} title="Transfer" body="When we leave, the team owns it. Decisions, cadences, and capability stay behind. No retainer dependency." />
            <div style={{ borderBottom: `1px solid ${T.borderNavy}` }} />
          </div>
        </div>
      </section>

      <LetsStart
        m={m}
        title="What business processes could benefit from a fresh perspective?"
        body="We tailor every engagement to your goals and timeline."
        primary="Schedule a Discovery Call"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

function TalentPage({ onNav, m }: { onNav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <Hero
        eyebrow={spacedCaps("TALENT MANAGEMENT · CCS STAFFING")}
        title={
          <>
            The right person, at the right time,
            {!m && <br />}
            {m ? " " : ""}for the right role.
          </>
        }
        lede="CCS Staffing is your strategic partner in talent management excellence. Full-desk recruiters who are deeply engaged in every step of the recruitment process, not just resume forwarding."
        bgImage="/TalentManagementImage.jpg"
        ctas={
          <PrimaryBtn onClick={() => onNav("contact")} onNavy>
            Discuss Your Talent Needs
          </PrimaryBtn>
        }
        m={m}
        minHeight={540}
      />

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader m={m} eyebrow={spacedCaps("WHAT WE DELIVER")} title="The CCS Staffing difference." />
          <LongList
            m={m}
            items={[
              { title: "Outsourced Talent Acquisition", body: "We function as your embedded recruitment arm. Full-desk recruiters involved in every step from sourcing through onboarding, not just resume forwarding." },
              { title: "Executive Search", body: "Retained search for senior leadership roles. We sit down with candidates before they reach you and surface fit signals that a screen call won't surface." },
              { title: "Coaching-Informed Validation", body: "Our CCS coaches assess each candidate's long-term viability and potential for success at your company before submission. The gaps a resume hides in week one, surfaced before week one." },
              { title: "Workforce Development", body: "Beyond the hire: pipeline planning, candidate care, and the cadences that turn one good hire into a repeatable engine." },
            ]}
          />
        </div>
      </section>

      <section style={{ background: T.navy800, color: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            onNavy
            eyebrow={spacedCaps("OUR PROCESS")}
            title="How a CCS Staffing engagement actually runs."
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <EngagementStep m={m} onNavy n={1} title="Discovery" body="We sit down with hiring managers to understand the role, the team, and the culture beyond the JD." />
            <EngagementStep m={m} onNavy n={2} title="Sourcing" body="Our recruiters work the full desk: passive candidates, network, and active pipeline simultaneously." />
            <EngagementStep m={m} onNavy n={3} title="Coaching Assessment" body="Our CCS coaches assess each shortlisted candidate for long-term viability, not just role fit." />
            <EngagementStep m={m} onNavy n={4} title="Submission" body="You receive a curated slate of qualified candidates who meet or exceed the JD and possess the qualities of a successful hire at your company." />
            <EngagementStep m={m} onNavy n={5} title="Close & Onboard" body="We support offer construction, candidate close conversations, and first-100-day onboarding alignment." />
            <div style={{ borderBottom: `1px solid ${T.borderNavy}` }} />
          </div>
        </div>
      </section>

      <LetsStart
        m={m}
        title="What would an ideal recruitment partner look like for your team?"
        body="At CCS Staffing, we look forward to partnering with you to help you achieve your business goals through effective talent management strategies."
        primary="Schedule a Discovery Call"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

function AiPage({ onNav, m }: { onNav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <Hero
        eyebrow={spacedCaps("AI SOLUTIONS")}
        title={
          <>
            Building confident leaders
            {!m && <br />}
            {m ? " " : ""}in the age of AI.
          </>
        }
        lede="CCS helps teams use AI confidently, securely, and strategically: to save time, communicate clearly, and make smarter business decisions."
        bgImage="/HomePageBackground.jpg"
        ctas={
          <PrimaryBtn onClick={() => onNav("contact")} onNavy>
            Explore AI Enablement
          </PrimaryBtn>
        }
        m={m}
        minHeight={540}
      />

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("OUR FRAMEWORK")}
            title="Assess → Implement → Optimize"
            lede="Three phases that take a team from AI-curious to AI-confident, without a six-month assessment that ends in a binder no one reads."
          />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: "1rem" }}>
            {[
              { num: "01", title: "Assess", body: "Evaluate readiness, workflows, and leadership comfort with AI tools.", items: ["AI Readiness Report", "Risk & Governance Checklist", "Opportunity Map (top 10 use cases)", "Leadership Comfort Survey"] },
              { num: "02", title: "Implement", body: "Deploy secure AI workspaces and core productivity tools.", items: ["Secure AI workspace setup", "Role-based access plan", "Prompt library tailored to your context", "Privacy configuration & governance"] },
              { num: "03", title: "Optimize", body: "Training and long-term enablement for sustainable adoption.", items: ["AI Leadership Essentials Workshop", "AI Prompts for Leaders guide", "Quarterly review with usage analytics", "Ongoing learning pathways"] },
            ].map((phase) => (
              <div
                key={phase.num}
                style={{
                  background: T.bone0,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: m ? "1.5rem" : "1.75rem 1.625rem",
                }}
              >
                <span style={{ fontFamily: T.sans, fontSize: "0.7rem", fontWeight: 500, color: T.teal700, letterSpacing: "0.06em", display: "block", marginBottom: 14 }}>
                  {phase.num}
                </span>
                <h3 style={{ fontFamily: T.sans, fontSize: "1.375rem", fontWeight: 600, color: T.fg, margin: "0 0 0.625rem", letterSpacing: "-0.012em" }}>
                  {phase.title}
                </h3>
                <p style={{ fontFamily: T.sans, fontSize: "0.875rem", lineHeight: 1.55, color: T.fgMuted, margin: "0 0 1.125rem" }}>
                  {phase.body}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: "0.875rem", borderTop: `1px solid ${T.border}` }}>
                  {phase.items.map((it) => (
                    <div
                      key={it}
                      style={{
                        fontFamily: T.sans,
                        fontSize: "0.78rem",
                        color: T.fgMuted,
                        paddingLeft: 14,
                        position: "relative",
                        lineHeight: 1.5,
                      }}
                    >
                      <span aria-hidden style={{ position: "absolute", left: 0, color: T.teal500 }}>
                        —
                      </span>
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("WHO IT'S FOR")}
            title={<>Senior leaders who want their team focused on the work AI can&apos;t replace.</>}
            lede="The leaders pulling ahead with AI aren't the ones with the best technology. They're the ones who decided what they want their teams doing instead. We coach through that question first, then deploy the tools."
          />
          <LongList
            m={m}
            items={[
              { title: "CHROs and HR leaders", body: "Give the team back the hours they spend on summaries, drafts, and follow-ups, without compromising governance or candidate trust." },
              { title: "COOs and operating leaders", body: "Map where AI can compress cycle time on internal processes (performance management, planning, reporting) before scaling broadly." },
              { title: "Sales and revenue leaders", body: "AI that supports the rep without replacing the relationship: call analysis, deal review, prep without the busywork." },
              { title: "CEOs and founders", body: "Build a working tool inside 30 days. Prove it. Expand only where it works. The model is singles and doubles, not home runs." },
            ]}
          />
        </div>
      </section>

      <LetsStart
        m={m}
        title="What role does AI currently play in your organization?"
        body="Whether you're just starting or scaling existing AI initiatives, we'll meet you where you are."
        primary="Schedule a Discovery Call"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

function AboutPage({ onNav, setModal, m }: { onNav: (p: Page) => void; setModal: (k: "tom" | "brent") => void; m: boolean }) {
  return (
    <>
      <Hero
        eyebrow={spacedCaps("ABOUT CCS · EST. 2010")}
        title={<>A dynamic blend of seasoned experts and innovative thinkers.</>}
        lede="Our team is dedicated to delivering tailored solutions that drive success. We bring a wealth of knowledge and a fresh perspective to every project, navigating complex challenges with care."
        bgImage="/HomePageBackground.jpg"
        ctas={
          <PrimaryBtn onClick={() => onNav("contact")} onNavy>
            Reach Out
          </PrimaryBtn>
        }
        m={m}
        minHeight={500}
      />

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1.4fr", gap: m ? "1.5rem" : "4rem", alignItems: "start" }}>
            <div>
              <Eyebrow>{spacedCaps("OUR STORY")}</Eyebrow>
              <h2 style={{ fontFamily: T.sans, fontSize: m ? "1.75rem" : "2.25rem", fontWeight: 600, letterSpacing: "-0.018em", lineHeight: 1.1, color: T.fg, margin: "0.875rem 0 0" }}>
                Built on one principle: enabling the success of others.
              </h2>
              <span aria-hidden style={{ display: "block", width: 36, height: 2, background: T.navy800, marginTop: "1.375rem" }} />
            </div>
            <div>
              <p style={{ fontFamily: T.sans, fontSize: "1rem", lineHeight: 1.65, color: T.fgMuted, margin: 0, marginBottom: "1rem" }}>
                CCS was founded in 2010 in Austin, Texas. Nearly 25 years of senior-level leadership across technology, professional services, financial services, commercial development, medical devices, and consumer products went into the way we work today, and into the team we&apos;ve built around it.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: "1rem", lineHeight: 1.65, color: T.fgMuted, margin: 0, marginBottom: "1rem" }}>
                We&apos;re a consulting house. Our point of entry can be coaching, consulting, talent management, or AI enablement. The engagement looks the same once we&apos;re in.
              </p>
              <p style={{ fontFamily: T.sans, fontSize: "1rem", lineHeight: 1.65, color: T.fgMuted, margin: 0 }}>
                Our growth is 100% referral-driven. We self-select the clients we work with, and we&apos;ve built lasting partnerships with leaders across six industries who keep coming back because the work transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader
            m={m}
            eyebrow={spacedCaps("OUR VALUES")}
            title="More than words. The foundation of everything we do."
            lede="At CCS, our values shape our decisions, guide our actions, and inspire our strategies. We believe in living our values through every interaction and partnership."
          />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(5, 1fr)", gap: m ? "0.75rem" : "1rem" }}>
            {[
              { name: "Courage", desc: "Drives us to embrace trust, stay present-minded, and act with faith and vulnerability." },
              { name: "Intention & Quality", desc: "Ensure that everything we do has purpose, striving to maximize impact." },
              { name: "Integrity", desc: "At the heart of our business. Honesty, transparency, and accountability." },
              { name: "Partnership", desc: "Meaningful, long-term relationships with clients, candidates, and collaborators." },
              { name: "Tenacity", desc: "Fuels our competitive spirit, resilience, and unwavering passion for success." },
            ].map((v) => (
              <div
                key={v.name}
                style={{
                  padding: m ? "1.25rem" : "1.5rem 1.25rem",
                  borderRadius: 8,
                  background: T.bone0,
                  border: `1px solid ${T.border}`,
                  borderTop: `2px solid ${T.teal500}`,
                }}
              >
                <h4 style={{ fontFamily: T.sans, fontSize: "0.95rem", fontWeight: 600, color: T.fg, margin: "0 0 0.5rem" }}>
                  {v.name}
                </h4>
                <p style={{ fontFamily: T.sans, fontSize: "0.82rem", lineHeight: 1.6, color: T.fgMuted, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: T.bone50, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader m={m} eyebrow={spacedCaps("LEADERSHIP")} title="The people behind the work." />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "1rem" : "1.5rem" }}>
            {(["tom", "brent"] as const).map((key) => {
              const p = teamData[key];
              return (
                <button
                  key={key}
                  onClick={() => setModal(key)}
                  style={{
                    textAlign: "left",
                    background: T.bone0,
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: m ? "1.5rem" : "2rem",
                    cursor: "pointer",
                    fontFamily: T.sans,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    {p.photo ? (
                      <Image src={p.photo} alt={p.name} width={64} height={64} style={{ borderRadius: "50%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.navy800, color: T.teal300, display: "grid", placeItems: "center", fontWeight: 700, fontSize: "1.1rem" }}>
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                    <div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 600, color: T.fg }}>{p.name}</div>
                      <div style={{ fontSize: "0.72rem", color: T.teal700, fontWeight: 600, letterSpacing: "0.04em", marginTop: 4 }}>
                        {p.role}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontFamily: T.sans, fontSize: "0.9rem", lineHeight: 1.65, color: T.fgMuted, margin: 0 }}>
                    {p.shortBio}
                  </p>
                  <div style={{ fontFamily: T.sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", color: T.teal700, textTransform: "uppercase" as const }}>
                    {spacedCaps("READ FULL BIO")} →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: T.bone100, padding: m ? "3rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
          <SectionHeader m={m} eyebrow={spacedCaps("POWERFUL PARTNERS")} title="Trusted collaborators who extend what we deliver." lede="CCS works alongside a small network of independent specialists and partner firms that round out every engagement." />
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "1rem" }}>
            {[
              { name: "Apex AI", role: "Custom Business Systems", desc: "Partners with CCS to accelerate engagement outcomes through custom business system development. Builds the AI tools, internal workflows, and client-facing infrastructure that turn each strategy into measurable results.", logoSrc: "/apex-logo-full.png", logoMaxHeight: 32 },
              { name: "Brainard Strategy", role: "Strategic Consulting Partner", desc: "Extends CCS's executive coaching and organizational design capacity on larger and more complex engagements.", logoSrc: "/brainard-logo.png", logoMaxHeight: 44 },
            ].map((p) => (
              <div key={p.name} style={{ borderRadius: 8, background: T.bone0, border: `1px solid ${T.border}`, overflow: "hidden" }}>
                <div style={{ height: m ? 80 : 100, display: "flex", alignItems: "center", justifyContent: "center", padding: m ? "0.75rem 1.25rem" : "1rem 1.5rem", borderBottom: `1px solid ${T.border}` }}>
                  <Image src={p.logoSrc} alt={p.name} width={500} height={200} style={{ height: "auto", width: "auto", maxHeight: m ? p.logoMaxHeight * 0.85 : p.logoMaxHeight, maxWidth: "100%", display: "block" }} />
                </div>
                <div style={{ padding: m ? "1.25rem" : "1.5rem" }}>
                  <div style={{ fontFamily: T.sans, fontSize: "1.05rem", fontWeight: 600, color: T.fg }}>{p.name}</div>
                  <div style={{ fontFamily: T.sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.04em", color: T.teal700, marginTop: 4 }}>{p.role}</div>
                  <p style={{ fontFamily: T.sans, fontSize: "0.85rem", lineHeight: 1.7, color: T.fgMuted, margin: 0, marginTop: "0.875rem" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsStart
        m={m}
        title="Ready to transform your business?"
        body="Take the first step toward unlocking your business's true potential. Partner with Complete Career Solutions today."
        primary="Schedule a Discovery Call"
        onClick={() => onNav("contact")}
      />
    </>
  );
}

function ContactPage({ m }: { m: boolean }) {
  return (
    <section style={{ background: T.bone50, padding: m ? "5rem 0 3rem" : "7.5rem 0 5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: m ? "0 1.25rem" : "0 1.5rem" }}>
        <SectionHeader
          m={m}
          eyebrow={spacedCaps("CONTACT US")}
          title="Partner with us."
          lede="We strategically partner with companies and individuals whose values align with ours. We invite you to reach out and explore how we can achieve success together."
        />

        <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "2rem" : "4rem", marginTop: m ? "1.5rem" : "3rem" }}>
          <div>
            <Eyebrow>{spacedCaps("REACH OUT")}</Eyebrow>
            <p style={{ fontFamily: T.sans, fontSize: m ? "1.25rem" : "1.5rem", fontWeight: 600, marginTop: 14, marginBottom: "1.5rem", letterSpacing: "-0.012em", color: T.fg }}>
              We&apos;d love to hear from you.
            </p>

            {[
              { role: "FOUNDER · CEO", name: "Tom Triolo", email: "ttriolo@completecareersolutions.com", svc: "Executive Coaching · Consulting · AI Solutions" },
              { role: "CO-FOUNDER · CCS STAFFING", name: "Brent Triolo", email: "brent.triolo@completecareersolutions.com", svc: "Talent Management · Executive Search" },
            ].map((c) => (
              <div
                key={c.email}
                style={{
                  background: T.bone0,
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: "1.625rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: "0.875rem",
                }}
              >
                <span style={{ fontFamily: T.sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: T.navy400 }}>
                  {spacedCaps(c.role)}
                </span>
                <span style={{ fontFamily: T.sans, fontSize: "1.125rem", fontWeight: 600, color: T.fg }}>{c.name}</span>
                <a href={`mailto:${c.email}`} style={{ fontFamily: T.sans, fontSize: "0.875rem", color: T.teal700, wordBreak: "break-all" }}>
                  {c.email}
                </a>
                <span style={{ fontFamily: T.sans, fontSize: "0.75rem", color: T.fgSoft, marginTop: 4 }}>{c.svc}</span>
              </div>
            ))}

            <div
              style={{
                background: T.bone100,
                border: `1px solid ${T.border}`,
                borderRadius: 8,
                padding: "1.625rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span style={{ fontFamily: T.sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: T.navy400 }}>
                {spacedCaps("MAIN OFFICE")}
              </span>
              <span style={{ fontFamily: T.sans, fontSize: "0.875rem", color: T.fg, lineHeight: 1.55 }}>
                555 E 5th St
                <br />
                Austin, TX 78701-4157
                <br />
                +1 (512) 579-1819
              </span>
            </div>
          </div>

          <div>
            <Eyebrow>{spacedCaps("DISCOVERY QUESTIONS")}</Eyebrow>
            <p style={{ fontFamily: T.sans, fontSize: m ? "1.25rem" : "1.5rem", fontWeight: 600, marginTop: 14, marginBottom: "1.5rem", letterSpacing: "-0.012em", color: T.fg }}>
              Here&apos;s what a first conversation typically covers.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              {[
                { label: "FOR EXECUTIVE COACHING", text: "What leadership challenges are your executives currently facing?", sub: "How do you currently support the growth of your senior leaders? What impact would stronger leadership have on your outcomes?" },
                { label: "FOR TALENT MANAGEMENT", text: "What are your biggest challenges in hiring and retaining talent?", sub: "How do you currently assess candidate fit and performance? What would an ideal recruitment partner look like for your team?" },
                { label: "FOR AI SOLUTIONS", text: "What role does AI currently play in your organization?", sub: "Are there specific business processes you believe could benefit from AI? How prepared is your team to adopt and scale?" },
                { label: "FOR CONSULTING", text: "What business processes could benefit from a fresh perspective?", sub: "Where is the team currently spending time that the business hasn't yet caught up with?" },
              ].map((q) => (
                <div key={q.label} style={{ paddingTop: "0.875rem", borderTop: `1px solid ${T.border}` }}>
                  <div style={{ fontFamily: T.sans, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: T.teal700, marginBottom: 8 }}>
                    {spacedCaps(q.label)}
                  </div>
                  <div style={{ fontFamily: T.sans, fontSize: "0.92rem", color: T.fg, lineHeight: 1.55, fontWeight: 500 }}>{q.text}</div>
                  <div style={{ fontFamily: T.sans, fontSize: "0.85rem", color: T.fgMuted, lineHeight: 1.55, marginTop: 4 }}>{q.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main component --------------------------------------------------------

export default function OptionH() {
  const [page, setPage] = useState<Page>("home");
  const [modal, setModal] = useState<"tom" | "brent" | null>(null);
  const m = useIsMobile();

  const nav = (p: Page) => {
    setPage(p);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: T.bone50, color: T.fg, fontFamily: T.sans, minHeight: "100vh" }}>
      <Header page={page} onNav={nav} m={m} />
      <main>
        {page === "home" && <HomePage onNav={nav} m={m} />}
        {page === "coaching" && <CoachingPage onNav={nav} setModal={setModal} m={m} />}
        {page === "consulting" && <ConsultingPage onNav={nav} m={m} />}
        {page === "talent" && <TalentPage onNav={nav} m={m} />}
        {page === "ai" && <AiPage onNav={nav} m={m} />}
        {page === "about" && <AboutPage onNav={nav} setModal={setModal} m={m} />}
        {page === "contact" && <ContactPage m={m} />}
      </main>
      <Footer onNav={nav} m={m} />
      <TeamModal member={modal} onClose={() => setModal(null)} />
    </div>
  );
}
