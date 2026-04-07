"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option B — Modern Warmth
   Light warm theme, Fraunces + Plus Jakarta Sans, terracotta accents */

const css = {
  bg: "#faf8f5",
  surface: "#ffffff",
  ink: "#1a1a1a",
  inkSoft: "#4a4a4a",
  muted: "#8a8580",
  terracotta: "#c45d3e",
  terracottaLight: "rgba(196,93,62,0.08)",
  terracottaMid: "rgba(196,93,62,0.15)",
  sage: "#5a7a6a",
  sageLight: "rgba(90,122,106,0.08)",
  warmBorder: "rgba(26,26,26,0.08)",
};

export default function OptionB() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const m = useIsMobile();

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: css.bg,
        color: css.ink,
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
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
          padding: m ? "1rem 1.5rem" : "1.2rem 4rem",
          background: "rgba(250,248,245,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${css.warmBorder}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image src="/logo.png" alt="CCS" width={36} height={36} style={{ borderRadius: 8 }} />
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.15rem",
              fontWeight: 600,
              color: css.ink,
            }}
          >
            Complete Career<span style={{ color: css.terracotta }}>.</span>
          </span>
        </div>
        {m && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
                key={i}
                style={{
                  width: "22px",
                  height: "2px",
                  background: css.terracotta,
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 1 ? "none" : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
        <div style={{ display: m ? "none" : "flex", gap: "2.2rem", alignItems: "center" }}>
          {["Services", "Our Approach", "Results", "Team"].map((item) => (
            <a
              key={item}
              href={`#b-${item.toLowerCase().replace(/\s/g, "")}`}
              style={{
                color: css.inkSoft,
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 500,
                transition: "color 0.3s",
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            style={{
              padding: "0.6rem 1.6rem",
              background: css.terracotta,
              color: "white",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: "0.82rem",
              textDecoration: "none",
            }}
          >
            Book a Call
          </a>
        </div>
      </nav>

      {m && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(250,248,245,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${css.warmBorder}`,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {["Services", "Our Approach", "Results", "Team"].map((item) => (
            <a
              key={item}
              href={`#b-${item.toLowerCase().replace(/\s/g, "")}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: css.ink,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                padding: "0.75rem 0",
                borderBottom: `1px solid ${css.warmBorder}`,
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "0.5rem",
              padding: "0.75rem 1.5rem",
              background: css.terracotta,
              color: "white",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 600,
              borderRadius: 6,
              textAlign: "center",
            }}
          >
            Book a Call
          </a>
        </div>
      )}

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: m ? "6rem 1.5rem 2rem" : "8rem 4rem 4rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 0,
            width: "45%",
            height: "85%",
            background: `radial-gradient(ellipse at 70% 30%, ${css.terracottaLight} 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, ${css.sageLight} 0%, transparent 60%)`,
            borderRadius: "0 0 0 40%",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="animate-fade-up animate-fade-up-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.5rem 1rem",
              background: css.terracottaLight,
              borderRadius: 100,
              fontSize: "0.78rem",
              fontWeight: 600,
              color: css.terracotta,
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: css.terracotta,
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Austin-Based · Serving Enterprise Leaders Since 2010
          </div>
          <h1
            className="animate-fade-up animate-fade-up-2"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              maxWidth: 820,
            }}
          >
            Your people are the strategy.
            <br />
            We help you{" "}
            <strong
              style={{
                fontWeight: 600,
                color: css.terracotta,
                textDecoration: "underline",
                textDecorationColor: css.terracottaMid,
                textUnderlineOffset: "6px",
                textDecorationThickness: "3px",
              }}
            >
              prove it.
            </strong>
          </h1>
          <p
            className="animate-fade-up animate-fade-up-3"
            style={{
              marginTop: "1.8rem",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: 520,
              color: css.inkSoft,
              fontWeight: 400,
            }}
          >
            CCS partners with CEOs, CHROs, and executive teams to transform
            leadership performance through coaching, consulting, talent strategy,
            and AI-powered tools.
          </p>
          <div
            className="animate-fade-up animate-fade-up-4"
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexDirection: m ? "column" : "row",
              gap: "1rem",
              alignItems: m ? "stretch" : "center",
            }}
          >
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                display: "inline-block",
                padding: "0.9rem 2rem",
                background: css.terracotta,
                color: "white",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                borderRadius: 8,
                boxShadow: "0 4px 12px rgba(196,93,62,0.25)",
              }}
            >
              Schedule a Discovery Call
            </a>
            <a
              href="#b-services"
              style={{
                display: "inline-block",
                padding: "0.9rem 2rem",
                background: css.surface,
                color: css.ink,
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
                borderRadius: 8,
                border: `1px solid ${css.warmBorder}`,
              }}
            >
              See How We Work
            </a>
          </div>

          {/* Trust bar */}
          <div
            className="animate-fade-up animate-fade-up-5"
            style={{
              marginTop: "5rem",
              paddingTop: "2.5rem",
              borderTop: `1px solid ${css.warmBorder}`,
              display: "flex",
              flexWrap: m ? "wrap" : "nowrap",
              gap: m ? "1.5rem" : "3.5rem",
              alignItems: "center",
            }}
          >
            {[
              { num: "25+", label: "Years Leadership Experience", color: css.terracottaLight, accent: css.terracotta },
              { num: "6", label: "Industries Served", color: css.sageLight, accent: css.sage },
              { num: "100%", label: "Referral-Driven", color: css.terracottaLight, accent: css.terracotta },
            ].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: t.color,
                    color: t.accent,
                    fontSize: "1.1rem",
                  }}
                >
                  ◆
                </div>
                <div style={{ fontSize: "0.82rem", color: css.inkSoft, fontWeight: 500 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: css.ink,
                      fontFamily: "'Fraunces', serif",
                    }}
                  >
                    {t.num}
                  </span>
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="b-services"
        style={{
          background: css.surface,
          borderRadius: 24,
          margin: m ? "0 0.75rem" : "0 2rem",
          padding: m ? "2.5rem 1.5rem" : "5rem",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: css.terracotta,
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          What We Do
        </div>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            maxWidth: 600,
          }}
        >
          Four integrated pillars that meet leaders{" "}
          <strong style={{ fontWeight: 600 }}>where they are.</strong>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {[
            {
              icon: "🎯",
              bg: css.terracottaLight,
              accent: css.terracotta,
              title: "Executive Coaching",
              desc: "Inside-out and outside-in coaching for C-suite leaders, new executives, and high-potentials. Personalized assessments, 100-day onboarding acceleration, and sustained leadership transformation.",
            },
            {
              icon: "📐",
              bg: css.sageLight,
              accent: css.sage,
              title: "Business Consulting",
              desc: "Human capital strategy, organizational design, workforce experience, and operational optimization. We help leadership teams navigate disruption with confidence and clarity.",
            },
            {
              icon: "🤝",
              bg: "rgba(196,154,62,0.1)",
              accent: "#c49a3e",
              title: "Talent Management",
              desc: "Full-lifecycle talent acquisition, leadership pipeline development, succession planning, and recruitment strategy for organizations competing on the strength of their people.",
            },
            {
              icon: "⚡",
              bg: "rgba(74,111,165,0.1)",
              accent: "#4a6fa5",
              title: "AI Solutions",
              desc: "AI readiness assessments, workflow automation, and custom AI-powered tools for HR and leadership teams. Practical enterprise AI that amplifies — never replaces — human judgment.",
            },
          ].map((s) => (
            <div
              key={s.title}
              style={{
                padding: "2.5rem",
                borderRadius: 16,
                border: `1px solid ${css.warmBorder}`,
                transition: "all 0.35s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  background: s.bg,
                  marginBottom: "1.5rem",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "0.8rem",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: css.inkSoft }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="b-ourapproach" style={{ padding: m ? "3rem 1.5rem" : "5rem 4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "1fr 1fr",
            gap: m ? "2.5rem" : "5rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: css.terracotta,
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              Our Approach
            </div>
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                maxWidth: 600,
              }}
            >
              Dual-lens coaching that transforms from the{" "}
              <strong style={{ fontWeight: 600 }}>inside out.</strong>
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: css.inkSoft,
                marginTop: "1.5rem",
              }}
            >
              Most firms coach from one direction. We work from two. Our
              &ldquo;inside-out&rdquo; methodology aligns leaders with their values,
              motivations, and authentic identity. Our &ldquo;outside-in&rdquo; lens
              maps organizational objectives, stakeholder perception, and success
              criteria.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: css.inkSoft,
                marginTop: "1rem",
              }}
            >
              Where those two perspectives meet is where real leadership
              transformation happens — leaders who understand both their inner
              compass and organizational reality don&apos;t just perform. They
              elevate everyone around them.
            </p>
          </div>
          <div
            style={{
              background: css.surface,
              borderRadius: 20,
              padding: "3rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  padding: "1.2rem 1.5rem",
                  borderRadius: 12,
                  background: css.terracottaLight,
                  border: `1px solid ${css.terracottaMid}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: css.terracotta,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ↑
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600 }}>Inside → Out</h4>
                  <p style={{ fontSize: "0.78rem", color: css.inkSoft, marginTop: "0.2rem" }}>
                    Values, motivations, self-awareness, authentic identity
                  </p>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.7rem",
                  color: css.muted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                ↕ Integration Zone
              </div>
              <div
                style={{
                  padding: "1.2rem 1.5rem",
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${css.terracottaLight}, ${css.sageLight})`,
                  border: `2px solid ${css.ink}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: css.ink,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ★
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    Leadership Transformation
                  </h4>
                  <p style={{ fontSize: "0.78rem", color: css.inkSoft, marginTop: "0.2rem" }}>
                    Where personal growth meets organizational impact
                  </p>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.7rem",
                  color: css.muted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                ↕ Integration Zone
              </div>
              <div
                style={{
                  padding: "1.2rem 1.5rem",
                  borderRadius: 12,
                  background: css.sageLight,
                  border: "1px solid rgba(90,122,106,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: css.sage,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ↓
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600 }}>Outside → In</h4>
                  <p style={{ fontSize: "0.78rem", color: css.inkSoft, marginTop: "0.2rem" }}>
                    Organizational goals, stakeholder perception, success criteria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="b-results"
        style={{
          background: css.ink,
          color: css.bg,
          borderRadius: 24,
          margin: m ? "0 0.75rem" : "0 2rem",
          padding: m ? "2.5rem 1.5rem" : "5rem",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: css.terracotta,
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          Impact
        </div>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: css.bg,
          }}
        >
          Leaders who chose to invest in their{" "}
          <strong style={{ fontWeight: 600 }}>people.</strong>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: "2rem",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { num: "15+", label: "Years in Practice" },
            { num: "6", label: "Industries Deep Expertise" },
            { num: "25+", label: "Yrs Sr. Leadership Experience" },
            { num: "100%", label: "Referral-Driven Growth" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: css.terracotta,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(250,248,245,0.6)",
                  marginTop: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: "2.5rem",
            borderRadius: 16,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <blockquote
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "rgba(250,248,245,0.85)",
            }}
          >
            &ldquo;Placeholder for a powerful client testimonial about working with
            Tom and the CCS team. Real results, specific outcomes, and the human
            impact of the coaching relationship.&rdquo;
          </blockquote>
          <div
            style={{
              marginTop: "1.2rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: css.terracotta,
            }}
          >
            Client Name
          </div>
          <div style={{ fontSize: "0.78rem", color: "rgba(250,248,245,0.5)", marginTop: "0.2rem" }}>
            CEO / CHRO, Company Name
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="b-team" style={{ padding: m ? "3rem 1.5rem" : "5rem 4rem" }}>
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: css.terracotta,
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          Our Team
        </div>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          25 years of experience. One mission:{" "}
          <strong style={{ fontWeight: 600 }}>enabling your success.</strong>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "1fr 1fr",
            gap: "2.5rem",
            marginTop: "3rem",
          }}
        >
          {(["tom", "brent"] as const).map((key) => {
            const person = teamData[key];
            const colors = key === "tom"
              ? { bg: css.terracottaLight, accent: css.terracotta }
              : { bg: css.sageLight, accent: css.sage };
            return (
              <div
                key={key}
                style={{
                  background: css.surface,
                  borderRadius: 16,
                  padding: "2.5rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  border: `1px solid ${css.warmBorder}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.2rem" }}>
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={64}
                      height={64}
                      style={{
                        borderRadius: 14,
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 14,
                        background: colors.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Fraunces', serif",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: colors.accent,
                      }}
                    >
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 600 }}>
                      {person.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: css.terracotta, fontWeight: 600, marginTop: "0.15rem" }}>
                      {person.role}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{person.shortBio}</p>
                <button
                  onClick={() => setModalMember(key)}
                  style={{
                    marginTop: "0.75rem",
                    background: "none",
                    border: "none",
                    color: css.terracotta,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "inherit",
                  }}
                >
                  Read Full Bio &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* VALUES */}
      <section
        style={{
          padding: m ? "2.5rem 1.5rem" : "5rem",
          background: css.surface,
          borderRadius: 24,
          margin: m ? "0 0.75rem 0.75rem" : "0 2rem 2rem",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: css.terracotta,
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          Our Values
        </div>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: "3rem",
            maxWidth: 500,
          }}
        >
          More than words — the{" "}
          <strong style={{ fontWeight: 600 }}>foundation</strong> of everything we do.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr 1fr" : "repeat(5, 1fr)",
            gap: "1.5rem",
          }}
        >
          {[
            { name: "Courage", desc: "Acting with trust, presence, faith, and vulnerability.", icon: "🦁", bg: css.terracottaLight },
            { name: "Intention & Quality", desc: "Purposeful work that maximizes impact.", icon: "🎯", bg: css.sageLight },
            { name: "Integrity", desc: "Honesty, transparency, and accountability.", icon: "⚖️", bg: "rgba(196,154,62,0.1)" },
            { name: "Partnership", desc: "Meaningful, long-term relationships.", icon: "🤝", bg: css.terracottaLight },
            { name: "Tenacity", desc: "Resilience, grit, and passion for success.", icon: "🔥", bg: css.sageLight },
          ].map((v) => (
            <div
              key={v.name}
              style={{
                padding: "1.5rem",
                borderRadius: 16,
                border: `1px solid ${css.warmBorder}`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: v.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  margin: "0 auto 1rem",
                }}
              >
                {v.icon}
              </div>
              <h4
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {v.name}
              </h4>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: css.inkSoft }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AUSTIN IMAGE */}
      <div
        style={{
          height: m ? "180px" : "280px",
          margin: m ? "0 0.75rem" : "0 2rem",
          borderRadius: 24,
          overflow: "hidden",
          backgroundImage: "url(/HomePageBackground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(250,248,245,0.3), rgba(250,248,245,0.1))",
          }}
        />
      </div>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: m ? "3rem 1.5rem" : "6rem 4rem",
          background: css.surface,
          borderRadius: 24,
          margin: m ? "0.75rem" : "2rem",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: css.terracotta,
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          Let&apos;s Talk
        </div>
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            maxWidth: 550,
            margin: "0 auto",
          }}
        >
          Ready to build leaders who build{" "}
          <strong style={{ fontWeight: 600 }}>what&apos;s next?</strong>
        </div>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1rem",
            color: css.inkSoft,
            maxWidth: 440,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          Every engagement starts with a conversation. Tell us where you are,
          where you need to be, and we&apos;ll map the path together.
        </p>
        <a
          href="mailto:ttriolo@completecareersolutions.com"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.9rem 2rem",
            background: css.terracotta,
            color: "white",
            textDecoration: "none",
            fontSize: "0.88rem",
            fontWeight: 600,
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(196,93,62,0.25)",
          }}
        >
          Schedule a Discovery Call
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: m ? "2rem 1.5rem" : "2.5rem 4rem",
          display: "flex",
          flexDirection: m ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: m ? "center" : undefined,
          gap: m ? "1rem" : undefined,
        }}
      >
        <div style={{ fontSize: "0.75rem", color: css.muted }}>
          &copy; 2026 Complete Career Solutions &middot; Austin, Texas &middot;
          (512) 579-1819
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["LinkedIn", "Privacy", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Contact" ? "mailto:ttriolo@completecareersolutions.com" : "#"}
              style={{ color: css.muted, textDecoration: "none", fontSize: "0.75rem", fontWeight: 500 }}
            >
              {link}
            </a>
          ))}
        </div>
      </footer>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
}
