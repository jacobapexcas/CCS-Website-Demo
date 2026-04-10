"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option E — Swiss Precision
   International Typographic Style: near-white bg, near-black ink, vivid red accent,
   oversized section numbers, sharp edges, maximum whitespace, Syne + Source Sans 3 */

const css = {
  bg: "#fefefe",
  ink: "#0f0f0f",
  inkSoft: "#555555",
  muted: "#999999",
  accent: "#e63946",
  rule: "rgba(15,15,15,0.1)",
  surface: "#f5f5f5",
};

const fontHead = "'Syne', sans-serif";
const fontBody = "'Source Sans 3', sans-serif";

const services = [
  {
    num: "01",
    title: "Executive Coaching",
    desc: "Inside-out and outside-in coaching for C-suite leaders and high-potentials. Personalized assessments, 100-day programs, and sustained leadership transformation.",
  },
  {
    num: "02",
    title: "Strategic Consulting",
    desc: "Human capital strategy, organizational design, and operational optimization. Navigating disruption with measurable transformation.",
  },
  {
    num: "03",
    title: "Talent Management",
    desc: "Full-lifecycle talent acquisition, pipeline development, succession planning, and recruitment strategy.",
  },
  {
    num: "04",
    title: "AI Solutions",
    desc: "AI readiness assessments, workflow automation, and custom tools for HR and leadership teams.",
  },
];

const values = [
  {
    name: "Courage",
    desc: "Acting with trust, presence, faith, and vulnerability.",
  },
  {
    name: "Intention & Quality",
    desc: "Purposeful work that maximizes impact.",
  },
  {
    name: "Integrity",
    desc: "Honesty, transparency, and accountability at our core.",
  },
  {
    name: "Partnership",
    desc: "Meaningful, long-term relationships over transactions.",
  },
  {
    name: "Tenacity",
    desc: "Resilience, grit, and unwavering passion for success.",
  },
];

const metrics = [
  { value: "15+", label: "Years Practice" },
  { value: "25+", label: "Years Leadership" },
  { value: "6", label: "Industries" },
  { value: "100%", label: "Referral Growth" },
];

export default function OptionE() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const m = useIsMobile();

  return (
    <div
      style={{
        fontFamily: fontBody,
        color: css.ink,
        background: css.bg,
        minHeight: "100vh",
      }}
    >
      <main>
        {/* ─── NAV ─── */}
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
            padding: m ? "1rem 1.5rem" : "1rem 6rem",
            background: "rgba(254,254,254,0.92)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${css.rule}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Image
              src="/logo.png"
              alt="CCS"
              width={28}
              height={28}
              style={{ display: "block" }}
            />
            <span
              style={{
                fontFamily: fontHead,
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: css.ink,
              }}
            >
              CCS
            </span>
          </div>

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
                  key={`ham-${i}`}
                  style={{
                    width: "20px",
                    height: "2px",
                    background: css.ink,
                    transition: "all 0.3s",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : i === 2
                          ? "rotate(-45deg) translate(5px, -5px)"
                          : "none"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}

          <div
            style={{
              display: m ? "none" : "flex",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {["Services", "Method", "Team", "Values"].map((item) => (
              <a
                key={`nav-${item}`}
                href={`#e-${item.toLowerCase()}`}
                style={{
                  color: css.inkSoft,
                  textDecoration: "none",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = css.ink)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = css.inkSoft)
                }
              >
                {item}
              </a>
            ))}
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                color: css.accent,
                textDecoration: "none",
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                fontWeight: 600,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.opacity = "0.7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = "1")
              }
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {m && menuOpen && (
          <div
            style={{
              position: "fixed",
              top: "56px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(254,254,254,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: `1px solid ${css.rule}`,
              padding: "1rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {["Services", "Method", "Team", "Values"].map((item) => (
              <a
                key={`mob-${item}`}
                href={`#e-${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: css.ink,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  fontWeight: 500,
                  padding: "0.85rem 0",
                  borderBottom: `1px solid ${css.rule}`,
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              onClick={() => setMenuOpen(false)}
              style={{
                color: css.accent,
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                fontWeight: 600,
                padding: "0.85rem 0",
              }}
            >
              Contact
            </a>
          </div>
        )}

        {/* ─── HERO ─── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: m ? "7rem 1.5rem 3rem" : "8rem 6rem 4rem",
            borderBottom: `1px solid ${css.rule}`,
          }}
        >
          <div
            style={{
              maxWidth: m ? "100%" : "60%",
            }}
          >
            <h1
              style={{
                fontFamily: fontHead,
                fontSize: m ? "2.6rem" : "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: css.ink,
                margin: 0,
              }}
            >
              Leaders who build{" "}
              <br />
              <span style={{ color: css.accent }}>what&apos;s next.</span>
            </h1>
            <p
              style={{
                fontFamily: fontBody,
                fontSize: m ? "0.95rem" : "1.05rem",
                lineHeight: 1.7,
                color: css.muted,
                maxWidth: "500px",
                marginTop: "1.5rem",
                marginBottom: "2.5rem",
                fontWeight: 400,
              }}
            >
              CCS partners with CEOs, CHROs, and executive teams to transform
              leadership through coaching, consulting, and AI-powered talent
              solutions.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:ttriolo@completecareersolutions.com"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.2rem",
                  background: css.accent,
                  color: "#ffffff",
                  textDecoration: "none",
                  fontFamily: fontBody,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  borderRadius: 0,
                  border: "none",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = "0.85")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = "1")
                }
              >
                Schedule a Call
              </a>
              <a
                href="#e-services"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.2rem",
                  background: "transparent",
                  color: css.ink,
                  textDecoration: "none",
                  fontFamily: fontBody,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  borderRadius: 0,
                  border: `1px solid ${css.ink}`,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = css.ink;
                  e.currentTarget.style.color = css.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = css.ink;
                }}
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Metrics bar */}
          <div
            style={{
              marginTop: "auto",
              paddingTop: "3rem",
              borderTop: `1px solid ${css.rule}`,
              display: "grid",
              gridTemplateColumns: m
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: m ? "1.5rem" : "2rem",
            }}
          >
            {metrics.map((stat) => (
              <div key={`stat-${stat.label}`}>
                <div
                  style={{
                    fontFamily: fontHead,
                    fontSize: m ? "2rem" : "2.5rem",
                    fontWeight: 700,
                    color: css.accent,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: css.muted,
                    marginTop: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section
          id="e-services"
          style={{
            position: "relative",
            padding: m ? "3rem 1.5rem" : "6rem 6rem",
            borderBottom: `1px solid ${css.rule}`,
          }}
        >
          {/* Section number */}
          <div
            style={{
              position: "absolute",
              top: m ? "1rem" : "2rem",
              right: m ? "1rem" : "4rem",
              fontFamily: fontHead,
              fontSize: m ? "5rem" : "8rem",
              fontWeight: 700,
              color: css.accent,
              opacity: 0.08,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            01
          </div>

          <h2
            style={{
              fontFamily: fontHead,
              fontSize: m ? "1.8rem" : "2.8rem",
              fontWeight: 700,
              color: css.ink,
              margin: 0,
              marginBottom: m ? "2rem" : "3.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Four integrated practices.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)",
              gap: m ? "2rem" : "2.5rem",
            }}
          >
            {services.map((svc) => (
              <div
                key={`svc-${svc.num}`}
                style={{
                  borderTop: `2px solid ${css.accent}`,
                  paddingTop: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: css.muted,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    marginBottom: "0.6rem",
                  }}
                >
                  {svc.num}
                </div>
                <h3
                  style={{
                    fontFamily: fontHead,
                    fontSize: m ? "1.1rem" : "1.2rem",
                    fontWeight: 700,
                    color: css.ink,
                    margin: 0,
                    marginBottom: "0.8rem",
                    lineHeight: 1.2,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: css.inkSoft,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── METHOD ─── */}
        <section
          id="e-method"
          style={{
            position: "relative",
            padding: m ? "3rem 1.5rem" : "6rem 6rem",
            borderBottom: `1px solid ${css.rule}`,
          }}
        >
          {/* Section number */}
          <div
            style={{
              position: "absolute",
              top: m ? "1rem" : "2rem",
              right: m ? "1rem" : "4rem",
              fontFamily: fontHead,
              fontSize: m ? "5rem" : "8rem",
              fontWeight: 700,
              color: css.accent,
              opacity: 0.08,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            02
          </div>

          <h2
            style={{
              fontFamily: fontHead,
              fontSize: m ? "1.8rem" : "2.8rem",
              fontWeight: 700,
              color: css.ink,
              margin: 0,
              marginBottom: m ? "2rem" : "3.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            The dual-lens approach.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "2rem" : "4rem",
              marginBottom: m ? "2rem" : "3rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: fontHead,
                  fontSize: m ? "1.3rem" : "1.5rem",
                  fontWeight: 700,
                  color: css.ink,
                  margin: 0,
                  marginBottom: "1rem",
                }}
              >
                Inside-Out
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: css.inkSoft,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Explores personal traits, motivations, and values — aligning
                leaders with their authentic selves.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: fontHead,
                  fontSize: m ? "1.3rem" : "1.5rem",
                  fontWeight: 700,
                  color: css.ink,
                  margin: 0,
                  marginBottom: "1rem",
                }}
              >
                Outside-In
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: css.inkSoft,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Maps organizational objectives, success criteria, and
                stakeholder perception.
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: `1px solid ${css.rule}`,
              paddingTop: m ? "1.5rem" : "2rem",
            }}
          >
            <p
              style={{
                fontSize: m ? "1rem" : "1.1rem",
                lineHeight: 1.7,
                color: css.inkSoft,
                maxWidth: "700px",
                margin: 0,
                fontWeight: 400,
              }}
            >
              The intersection is where real leadership transformation happens.
              Leaders who understand both their inner compass and organizational
              reality don&apos;t just perform — they elevate everyone around
              them.
            </p>
          </div>
        </section>

        {/* ─── TEAM ─── */}
        <section
          id="e-team"
          style={{
            position: "relative",
            padding: m ? "3rem 1.5rem" : "6rem 6rem",
            borderBottom: `1px solid ${css.rule}`,
          }}
        >
          {/* Section number */}
          <div
            style={{
              position: "absolute",
              top: m ? "1rem" : "2rem",
              right: m ? "1rem" : "4rem",
              fontFamily: fontHead,
              fontSize: m ? "5rem" : "8rem",
              fontWeight: 700,
              color: css.accent,
              opacity: 0.08,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            03
          </div>

          <h2
            style={{
              fontFamily: fontHead,
              fontSize: m ? "1.8rem" : "2.8rem",
              fontWeight: 700,
              color: css.ink,
              margin: 0,
              marginBottom: m ? "2rem" : "3.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            The people behind the work.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "2.5rem" : "4rem",
            }}
          >
            {(["tom", "brent"] as const).map((key) => {
              const person = teamData[key];
              return (
                <div
                  key={`team-${key}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2rem",
                    }}
                  >
                    {person.photo ? (
                      <Image
                        src={person.photo}
                        alt={person.name}
                        width={80}
                        height={80}
                        style={{ objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 80,
                          height: 80,
                          background: css.surface,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: css.accent,
                          fontFamily: fontHead,
                          fontSize: "1.4rem",
                          fontWeight: 700,
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
                          fontFamily: fontHead,
                          fontSize: "1.4rem",
                          fontWeight: 700,
                          color: css.ink,
                          lineHeight: 1.2,
                        }}
                      >
                        {person.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                          color: css.muted,
                          marginTop: "0.3rem",
                          fontWeight: 500,
                        }}
                      >
                        {person.role}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: css.inkSoft,
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {person.shortBio}
                  </p>
                  <button
                    onClick={() => setModalMember(key)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: css.accent,
                      fontFamily: fontBody,
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      textAlign: "left",
                      letterSpacing: "0.04em",
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.opacity = "1")
                    }
                  >
                    Read more &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── VALUES ─── */}
        <section
          id="e-values"
          style={{
            position: "relative",
            padding: m ? "3rem 1.5rem" : "6rem 6rem",
            borderBottom: `1px solid ${css.rule}`,
          }}
        >
          {/* Section number */}
          <div
            style={{
              position: "absolute",
              top: m ? "1rem" : "2rem",
              right: m ? "1rem" : "4rem",
              fontFamily: fontHead,
              fontSize: m ? "5rem" : "8rem",
              fontWeight: 700,
              color: css.accent,
              opacity: 0.08,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            04
          </div>

          <h2
            style={{
              fontFamily: fontHead,
              fontSize: m ? "1.8rem" : "2.8rem",
              fontWeight: 700,
              color: css.ink,
              margin: 0,
              marginBottom: m ? "2rem" : "3.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            What we stand for.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr 1fr" : "repeat(5, 1fr)",
              gap: m ? "1.5rem" : "2rem",
            }}
          >
            {values.map((v) => (
              <div
                key={`val-${v.name}`}
                style={{
                  borderLeft: `3px solid ${css.accent}`,
                  paddingLeft: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: fontHead,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: css.ink,
                    marginBottom: "0.4rem",
                    lineHeight: 1.3,
                  }}
                >
                  {v.name}
                </div>
                <p
                  style={{
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    color: css.muted,
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          style={{
            background: css.accent,
            padding: m ? "3rem 1.5rem" : "5rem 6rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: fontHead,
              fontSize: m ? "1.8rem" : "2.8rem",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Ready to transform your leadership?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto",
              marginBottom: "2rem",
              fontWeight: 400,
            }}
          >
            Start with a confidential discovery call to explore how CCS can
            partner with your team.
          </p>
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.5rem",
              background: "transparent",
              color: "#ffffff",
              textDecoration: "none",
              fontFamily: fontBody,
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              borderRadius: 0,
              border: "1px solid rgba(255,255,255,0.5)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = css.accent;
              e.currentTarget.style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            }}
          >
            Schedule a Discovery Call
          </a>
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: m ? "1.5rem 1.5rem" : "1.5rem 6rem",
            borderTop: `1px solid ${css.rule}`,
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              color: css.muted,
              fontWeight: 400,
            }}
          >
            &copy; 2026 Complete Career Solutions &middot; Austin, Texas
          </span>
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            style={{
              fontSize: "0.72rem",
              color: css.muted,
              textDecoration: "none",
              fontWeight: 400,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = css.ink)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = css.muted)
            }
          >
            Contact
          </a>
        </footer>
      </main>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
}
