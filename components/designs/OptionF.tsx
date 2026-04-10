"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option F — Warm Brutalist
   Raw block structure, thick 3px borders, Bebas Neue + Karla,
   earthy greens & amber, paper/parchment tones, no border-radius */

const css = {
  bg: "#f5f0e8",
  ink: "#1d1d1d",
  inkSoft: "#4a4540",
  muted: "#8a8480",
  green: "#3d6b4f",
  greenLight: "rgba(61,107,79,0.08)",
  amber: "#d4913c",
  border: "#1d1d1d",
  borderLight: "rgba(29,29,29,0.15)",
  surface: "#ebe6dc",
};

const heading = "'Bebas Neue', sans-serif";
const body = "'Karla', sans-serif";

export default function OptionF() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const m = useIsMobile();

  /* Reusable stamp label — the [ LABEL ] motif */
  const stampLabel = (text: string) => (
    <div
      style={{
        display: "inline-block",
        fontFamily: heading,
        fontSize: "0.85rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase" as const,
        color: css.green,
        borderTop: `2px solid ${css.green}`,
        borderBottom: `2px solid ${css.green}`,
        padding: "0.45rem 0.8rem",
        marginBottom: m ? "1.5rem" : "2rem",
      }}
    >
      [ {text} ]
    </div>
  );

  const navLinks = ["Services", "Method", "Team", "Values"];

  return (
    <div
      style={{
        fontFamily: body,
        background: css.bg,
        color: css.ink,
        minHeight: "100vh",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: m ? "0.9rem 1.5rem" : "1rem 4rem",
          background: "rgba(245,240,232,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: `3px solid ${css.border}`,
        }}
      >
        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image src="/logo.png" alt="CCS" width={32} height={32} />
          <span
            style={{
              fontFamily: heading,
              fontSize: m ? "0.85rem" : "1rem",
              letterSpacing: "0.15em",
              color: css.green,
            }}
          >
            COMPLETE CAREER SOLUTIONS
          </span>
        </div>

        {/* Desktop links */}
        {!m && (
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#f-${item.toLowerCase()}`}
                style={{
                  fontFamily: heading,
                  fontSize: "0.95rem",
                  letterSpacing: "0.1em",
                  color: css.ink,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = css.green)}
                onMouseLeave={(e) => (e.currentTarget.style.color = css.ink)}
              >
                {item.toUpperCase()}
              </a>
            ))}
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                fontFamily: heading,
                fontSize: "0.95rem",
                letterSpacing: "0.1em",
                padding: "0.55rem 1.6rem",
                border: `3px solid ${css.green}`,
                color: css.green,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = css.green;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = css.green;
              }}
            >
              CONTACT
            </a>
          </div>
        )}

        {/* Mobile hamburger */}
        {m && (
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
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={`hamburger-${i}`}
                style={{
                  width: "24px",
                  height: "3px",
                  background: css.ink,
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 6px)"
                      : i === 1
                        ? "scaleX(0)"
                        : "rotate(-45deg) translate(5px, -6px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile dropdown */}
      {m && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "57px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: css.bg,
            borderBottom: `3px solid ${css.border}`,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((item) => (
            <a
              key={`mob-${item}`}
              href={`#f-${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: heading,
                fontSize: "1.3rem",
                letterSpacing: "0.12em",
                color: css.ink,
                textDecoration: "none",
                padding: "0.6rem 0",
                borderBottom: `1px solid ${css.borderLight}`,
              }}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: heading,
              fontSize: "1.3rem",
              letterSpacing: "0.12em",
              color: css.green,
              textDecoration: "none",
              padding: "0.6rem 0",
            }}
          >
            CONTACT
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <main>
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: m ? "7rem 1.5rem 3rem" : "8rem 4rem 5rem",
            background: css.bg,
          }}
        >
          {/* Stamp tag */}
          <div
            style={{
              display: "inline-block",
              fontFamily: heading,
              fontSize: m ? "0.75rem" : "0.85rem",
              letterSpacing: "0.25em",
              color: css.green,
              borderTop: `3px solid ${css.green}`,
              borderBottom: `3px solid ${css.green}`,
              padding: "0.55rem 1rem",
              marginBottom: m ? "2rem" : "2.5rem",
              alignSelf: "flex-start",
            }}
          >
            [ EXECUTIVE COACHING &amp; CONSULTING ]
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: heading,
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: css.ink,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            WE BUILD LEADERS WHO BUILD EXTRAORDINARY ORGANIZATIONS.
          </h1>

          {/* Sub copy */}
          <p
            style={{
              fontFamily: body,
              fontSize: m ? "1rem" : "1.05rem",
              lineHeight: 1.75,
              color: css.inkSoft,
              maxWidth: "600px",
              marginTop: m ? "1.5rem" : "2rem",
              fontWeight: 400,
            }}
          >
            CCS partners with CEOs, CHROs, and executive teams to unlock
            performance through coaching, strategic consulting, and AI-powered
            talent solutions. Austin-based. Enterprise-proven.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: m ? "2rem" : "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                fontFamily: heading,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                padding: "0.8rem 2rem",
                background: css.green,
                color: "#fff",
                border: `3px solid ${css.green}`,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = css.amber;
                e.currentTarget.style.borderColor = css.amber;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = css.green;
                e.currentTarget.style.borderColor = css.green;
              }}
            >
              SCHEDULE A CALL
            </a>
            <a
              href="#f-services"
              style={{
                fontFamily: heading,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                padding: "0.8rem 2rem",
                background: "transparent",
                color: css.green,
                border: `3px solid ${css.green}`,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = css.greenLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              EXPLORE SERVICES
            </a>
          </div>

          {/* Metrics row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: m ? "1rem" : "0",
              marginTop: m ? "3rem" : "5rem",
              maxWidth: "820px",
            }}
          >
            {[
              { num: "15+", label: "Years Practice" },
              { num: "25+", label: "Years Leadership" },
              { num: "6", label: "Industries" },
              { num: "100%", label: "Referral Growth" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  border: `3px solid ${css.border}`,
                  padding: m ? "1.2rem 1rem" : "1.5rem 1.8rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: heading,
                    fontSize: m ? "2.2rem" : "2.8rem",
                    color: css.green,
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: body,
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    color: css.muted,
                    marginTop: "0.5rem",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="f-services"
          style={{
            background: css.surface,
            borderTop: `3px solid ${css.border}`,
            padding: m ? "3rem 1.5rem" : "5rem 4rem",
          }}
        >
          {stampLabel("WHAT WE DO")}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "1.2rem" : "1.5rem",
              marginTop: m ? "0.5rem" : "1rem",
            }}
          >
            {[
              {
                num: "01",
                title: "EXECUTIVE COACHING",
                desc: "Inside-out and outside-in coaching for C-suite leaders and high-potentials. Personalized assessments, 100-day programs, and sustained leadership transformation.",
              },
              {
                num: "02",
                title: "STRATEGIC CONSULTING",
                desc: "Human capital strategy, organizational design, and operational optimization. Navigating disruption with measurable transformation.",
              },
              {
                num: "03",
                title: "TALENT MANAGEMENT",
                desc: "Full-lifecycle talent acquisition, pipeline development, succession planning, and recruitment strategy.",
              },
              {
                num: "04",
                title: "AI SOLUTIONS",
                desc: "AI readiness assessments, workflow automation, and custom tools for HR and leadership teams.",
              },
            ].map((svc) => (
              <div
                key={svc.num}
                style={{
                  border: `3px solid ${css.border}`,
                  padding: m ? "1.5rem" : "2rem 2.2rem",
                  background: css.bg,
                  transition: "background 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = css.greenLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = css.bg;
                }}
              >
                <div
                  style={{
                    fontFamily: heading,
                    fontSize: m ? "2.2rem" : "2.8rem",
                    color: css.amber,
                    lineHeight: 1,
                    marginBottom: "0.6rem",
                  }}
                >
                  {svc.num}
                </div>
                <div
                  style={{
                    fontFamily: heading,
                    fontSize: m ? "1.5rem" : "1.8rem",
                    color: css.ink,
                    letterSpacing: "0.04em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {svc.title}
                </div>
                <p
                  style={{
                    fontFamily: body,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: css.inkSoft,
                    margin: 0,
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHOD ── */}
        <section
          id="f-method"
          style={{
            background: css.bg,
            borderTop: `3px solid ${css.border}`,
            padding: m ? "3rem 1.5rem" : "5rem 4rem",
          }}
        >
          {stampLabel("OUR APPROACH")}

          <h2
            style={{
              fontFamily: heading,
              fontSize: m ? "2.2rem" : "3.2rem",
              letterSpacing: "0.03em",
              color: css.ink,
              margin: "0 0 2rem 0",
            }}
          >
            THE DUAL-LENS APPROACH
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "1.2rem" : "1.5rem",
            }}
          >
            {/* Inside-Out */}
            <div
              style={{
                border: `3px solid ${css.border}`,
                borderLeft: `6px solid ${css.green}`,
                padding: m ? "1.5rem" : "2.2rem 2.5rem",
                background: css.bg,
              }}
            >
              <h3
                style={{
                  fontFamily: heading,
                  fontSize: m ? "1.6rem" : "2rem",
                  color: css.green,
                  margin: "0 0 1rem 0",
                  letterSpacing: "0.04em",
                }}
              >
                INSIDE-OUT
              </h3>
              <p
                style={{
                  fontFamily: body,
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: css.inkSoft,
                  margin: 0,
                }}
              >
                We start with who you are. Through deep personal assessment, we
                uncover the traits, values, motivations, and blind spots that
                shape your leadership. This inner clarity becomes the foundation
                for authentic, high-impact performance.
              </p>
            </div>

            {/* Outside-In */}
            <div
              style={{
                border: `3px solid ${css.border}`,
                borderLeft: `6px solid ${css.amber}`,
                padding: m ? "1.5rem" : "2.2rem 2.5rem",
                background: css.bg,
              }}
            >
              <h3
                style={{
                  fontFamily: heading,
                  fontSize: m ? "1.6rem" : "2rem",
                  color: css.amber,
                  margin: "0 0 1rem 0",
                  letterSpacing: "0.04em",
                }}
              >
                OUTSIDE-IN
              </h3>
              <p
                style={{
                  fontFamily: body,
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: css.inkSoft,
                  margin: 0,
                }}
              >
                We then map the external landscape — organizational objectives,
                stakeholder perception, team dynamics, and market forces.
                Understanding how the world sees you is just as critical as
                understanding yourself.
              </p>
            </div>
          </div>

          {/* Connecting paragraph */}
          <p
            style={{
              fontFamily: body,
              fontSize: m ? "1rem" : "1.1rem",
              lineHeight: 1.8,
              color: css.inkSoft,
              maxWidth: "720px",
              marginTop: m ? "1.5rem" : "2.5rem",
              borderLeft: `3px solid ${css.borderLight}`,
              paddingLeft: "1.5rem",
            }}
          >
            The intersection of these two lenses is where transformation
            happens. When a leader&apos;s inner compass aligns with their
            organization&apos;s needs, the result is performance that sustains —
            not just spikes.
          </p>
        </section>

        {/* ── TEAM ── */}
        <section
          id="f-team"
          style={{
            background: css.surface,
            borderTop: `3px solid ${css.border}`,
            padding: m ? "3rem 1.5rem" : "5rem 4rem",
          }}
        >
          {stampLabel("LEADERSHIP")}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "1.5rem" : "2rem",
              marginTop: m ? "0.5rem" : "1rem",
            }}
          >
            {(["tom", "brent"] as const).map((key) => {
              const person = teamData[key];
              return (
                <div
                  key={key}
                  style={{
                    border: `3px solid ${css.border}`,
                    padding: m ? "1.5rem" : "2rem 2.2rem",
                    background: css.bg,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Photo / Initials */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {person.photo ? (
                      <Image
                        src={person.photo}
                        alt={person.name}
                        width={90}
                        height={90}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 90,
                          height: 90,
                          background: css.surface,
                          border: `3px solid ${css.border}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: heading,
                          fontSize: "1.8rem",
                          color: css.green,
                        }}
                      >
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}

                    <div>
                      <div
                        style={{
                          fontFamily: heading,
                          fontSize: m ? "1.4rem" : "1.6rem",
                          color: css.ink,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {person.name.toUpperCase()}
                      </div>
                      <div
                        style={{
                          fontFamily: body,
                          fontSize: "0.72rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                          color: css.green,
                          marginTop: "0.2rem",
                          fontWeight: 500,
                        }}
                      >
                        {person.role}
                      </div>
                    </div>
                  </div>

                  {/* Short bio */}
                  <p
                    style={{
                      fontFamily: body,
                      fontSize: "0.92rem",
                      lineHeight: 1.75,
                      color: css.inkSoft,
                      margin: "0 0 1rem 0",
                      flex: 1,
                    }}
                  >
                    {person.shortBio}
                  </p>

                  {/* Bio button */}
                  <button
                    onClick={() => setModalMember(key)}
                    style={{
                      alignSelf: "flex-start",
                      background: "none",
                      border: "none",
                      fontFamily: heading,
                      fontSize: "0.9rem",
                      letterSpacing: "0.1em",
                      color: css.green,
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = css.amber)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = css.green)
                    }
                  >
                    READ FULL BIO &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── VALUES ── */}
        <section
          id="f-values"
          style={{
            background: css.bg,
            borderTop: `3px solid ${css.border}`,
            padding: m ? "3rem 1.5rem" : "5rem 4rem",
          }}
        >
          {stampLabel("OUR VALUES")}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: m ? "1rem" : "1.2rem",
              marginTop: m ? "0.5rem" : "1rem",
            }}
          >
            {[
              {
                name: "COURAGE",
                desc: "Acting with trust, presence, faith, and vulnerability.",
              },
              {
                name: "INTENTION & QUALITY",
                desc: "Purposeful work that maximizes impact.",
              },
              {
                name: "INTEGRITY",
                desc: "Honesty, transparency, and accountability at our core.",
              },
              {
                name: "PARTNERSHIP",
                desc: "Meaningful, long-term relationships over transactions.",
              },
              {
                name: "TENACITY",
                desc: "Resilience, grit, and unwavering passion for success.",
              },
            ].map((val) => (
              <div
                key={val.name}
                style={{
                  borderLeft: `3px solid ${css.green}`,
                  padding: m ? "0.9rem 1.2rem" : "1rem 1.5rem",
                  display: m ? "block" : "flex",
                  alignItems: "baseline",
                  gap: "1.5rem",
                  background: css.bg,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = css.greenLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = css.bg;
                }}
              >
                <div
                  style={{
                    fontFamily: heading,
                    fontSize: m ? "1.2rem" : "1.3rem",
                    color: css.ink,
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                    minWidth: m ? undefined : "220px",
                  }}
                >
                  {val.name}
                </div>
                <p
                  style={{
                    fontFamily: body,
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: css.inkSoft,
                    margin: m ? "0.3rem 0 0 0" : 0,
                  }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── AUSTIN IMAGE DIVIDER ── */}
        <div
          style={{
            width: "100%",
            height: m ? 200 : 320,
            backgroundImage:
              "linear-gradient(rgba(29,29,29,0.45),rgba(29,29,29,0.55)), url(/HomePageBackground.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTop: `3px solid ${css.border}`,
            borderBottom: `3px solid ${css.border}`,
          }}
        />

        {/* ── CTA ── */}
        <section
          style={{
            background: css.green,
            borderTop: `3px solid ${css.border}`,
            padding: m ? "3rem 1.5rem" : "5rem 4rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: heading,
              fontSize: m ? "2.2rem" : "3.5rem",
              color: "#fff",
              margin: "0 0 1rem 0",
              letterSpacing: "0.03em",
            }}
          >
            READY TO BUILD WHAT&apos;S NEXT?
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: m ? "1rem" : "1.1rem",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Every engagement starts with a conversation.
          </p>
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            style={{
              display: "inline-block",
              fontFamily: heading,
              fontSize: "1rem",
              letterSpacing: "0.12em",
              padding: "0.85rem 2.5rem",
              border: "3px solid #fff",
              color: "#fff",
              background: "transparent",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = css.green;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            SCHEDULE A DISCOVERY CALL
          </a>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `3px solid ${css.border}`,
          background: css.bg,
          padding: m ? "1.5rem 1.5rem" : "1.5rem 4rem",
          display: "flex",
          flexDirection: m ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: m ? "0.8rem" : undefined,
          textAlign: m ? "center" : undefined,
        }}
      >
        <div
          style={{
            fontFamily: heading,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: css.muted,
          }}
        >
          &copy; 2026 COMPLETE CAREER SOLUTIONS &middot; AUSTIN, TEXAS &middot;
          (512) 579-1819
        </div>
        <a
          href="mailto:ttriolo@completecareersolutions.com"
          style={{
            fontFamily: heading,
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: css.muted,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = css.green)}
          onMouseLeave={(e) => (e.currentTarget.style.color = css.muted)}
        >
          CONTACT
        </a>
      </footer>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
}
