"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option G — Brand Aligned
   Uses CCS logo colors (Navy #1B2838, Teal #3AAFB5, Orange #E8943A) and
   Tom's voice from the locked Brand Voice Guide v2.1.
   Editorial-modern: Fraunces display + Plus Jakarta Sans body.
   Sunrise/horizon motif echoes the logo throughout. */

const brand = {
  navy: "#1B2838",
  navyDeep: "#0F1820",
  navySoft: "#243447",
  teal: "#3AAFB5",
  tealDeep: "#2C8C91",
  tealSoft: "rgba(58,175,181,0.12)",
  orange: "#E8943A",
  orangeSoft: "rgba(232,148,58,0.14)",
  cream: "#F7F3EC",
  paper: "#FAFAF7",
  ink: "#1B2838",
  inkSoft: "#4A5563",
  muted: "#8A93A0",
  rule: "rgba(27,40,56,0.10)",
  ruleStrong: "rgba(27,40,56,0.18)",
  white: "#FFFFFF",
};

const display = "'Fraunces', Georgia, serif";
const body = "'Plus Jakarta Sans', system-ui, sans-serif";

const services = [
  {
    num: "01",
    title: "Executive Coaching",
    sub: "& Leadership Development",
    desc:
      "Inside-Out and Outside-In coaching for C-suite leaders, senior teams, and high-potentials. We build catalytic leaders — clearer decisions, sharper presence, teams that move with them.",
    deliverables: [
      "Leadership Acceleration",
      "Successor & First-100-Day Coaching",
      "Team Cohesion Workshops",
      "Executive Onboarding",
    ],
  },
  {
    num: "02",
    title: "Business Consulting",
    sub: "Strategy & Operating Design",
    desc:
      "Operations and process redesign focused on real outcomes. We rebuild the workflows around what the business actually needs — not what the org chart says it does.",
    deliverables: [
      "Outcome-Driven Operating Models",
      "Role & Workflow Redesign",
      "Leadership Capability Build",
      "Performance Management Rebuild",
    ],
  },
  {
    num: "03",
    title: "Talent Management",
    sub: "CCS Staffing",
    desc:
      "Outsourced recruiting rooted in coaching methodology. We sit down with candidates before they reach you — surfacing the gaps a resume hides in week one, not month three.",
    deliverables: [
      "Embedded Recruitment Pods",
      "Executive Search",
      "Candidate Validation Frameworks",
      "Pipeline & Pre-Hire Coaching",
    ],
  },
  {
    num: "04",
    title: "AI Enablement",
    sub: "Building Confident Leaders in the Age of AI",
    desc:
      "Three phases: Assess → Implement → Optimize. We give leaders back the hours they're spending on work below their job — and a clear answer to what their team does instead.",
    deliverables: [
      "AI Readiness & Opportunity Map",
      "Secure Workspace Deployment",
      "AI Leadership Essentials Workshop",
      "Ongoing Optimization Pathways",
    ],
  },
];

const values = [
  {
    name: "Courage",
    desc: "Acting with trust, presence, and vulnerability.",
  },
  {
    name: "Intention & Quality",
    desc: "Purposeful work that maximizes impact.",
  },
  {
    name: "Integrity",
    desc: "Honesty, transparency, and accountability.",
  },
  {
    name: "Partnership",
    desc: "Long-term relationships over transactions.",
  },
  {
    name: "Tenacity",
    desc: "Resilience, grit, and unwavering commitment.",
  },
];

const phases = [
  {
    label: "Assess",
    desc: "Evaluate readiness, workflows, and leadership comfort with AI. Map the opportunities that actually move the business.",
  },
  {
    label: "Implement",
    desc: "Deploy secure AI workspaces and the core tools the team will use every day. Governance and access built in, not bolted on.",
  },
  {
    label: "Optimize",
    desc: "Training, communication integration, and long-term enablement so adoption sticks — not a launch event that fades by Q3.",
  },
];

/* Sunrise / horizon visual — the logo motif as an SVG accent */
function HorizonMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 100 55"
      style={{ display: "block" }}
      aria-hidden
    >
      <path
        d="M0 25 Q 25 5, 50 25 T 100 25"
        fill="none"
        stroke={brand.orange}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M0 38 Q 25 28, 50 38 T 100 38"
        fill="none"
        stroke={brand.teal}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M0 50 Q 25 42, 50 50 T 100 50"
        fill="none"
        stroke={brand.teal}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function OptionG() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const m = useIsMobile();

  const navItems = [
    { label: "Approach", href: "#g-approach" },
    { label: "Services", href: "#g-services" },
    { label: "AI Enablement", href: "#g-ai" },
    { label: "Values", href: "#g-values" },
    { label: "Team", href: "#g-team" },
  ];

  return (
    <div
      style={{
        fontFamily: body,
        background: brand.paper,
        color: brand.ink,
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes gFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .g-fade { animation: gFadeUp 0.7s ease both; }
        .g-fade-1 { animation-delay: 0.05s; }
        .g-fade-2 { animation-delay: 0.15s; }
        .g-fade-3 { animation-delay: 0.25s; }
        .g-fade-4 { animation-delay: 0.35s; }
        .g-link-underline { position: relative; }
        .g-link-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -3px;
          width: 0; height: 1.5px;
          background: ${brand.teal};
          transition: width 0.3s ease;
        }
        .g-link-underline:hover::after { width: 100%; }
        .g-service-card {
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .g-service-card:hover {
          transform: translateY(-4px);
          border-color: ${brand.teal};
          box-shadow: 0 14px 40px -20px rgba(27,40,56,0.25);
        }
      `}</style>

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
          padding: m ? "0.85rem 1.25rem" : "1rem 4rem",
          background: "rgba(250,250,247,0.92)",
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${brand.rule}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <Image
            src="/logo.png"
            alt="CCS"
            width={m ? 34 : 40}
            height={m ? 34 : 40}
            style={{ display: "block" }}
          />
          <div style={{ lineHeight: 1.05 }}>
            <div
              style={{
                fontFamily: display,
                fontSize: m ? "0.95rem" : "1.05rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: brand.navy,
              }}
            >
              Complete Career Solutions
            </div>
            <div
              style={{
                fontSize: "0.62rem",
                fontFamily: body,
                color: brand.muted,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                fontWeight: 600,
                marginTop: 2,
              }}
            >
              A Consulting House · Est. 2010
            </div>
          </div>
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
                key={`g-ham-${i}`}
                style={{
                  width: "22px",
                  height: "2px",
                  background: brand.navy,
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
            gap: "2.2rem",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <a
              key={`g-nav-${item.label}`}
              href={item.href}
              className="g-link-underline"
              style={{
                color: brand.inkSoft,
                textDecoration: "none",
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = brand.navy)}
              onMouseLeave={(e) => (e.currentTarget.style.color = brand.inkSoft)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#g-contact"
            style={{
              color: brand.white,
              textDecoration: "none",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
              fontWeight: 600,
              background: brand.navy,
              padding: "0.65rem 1.4rem",
              borderRadius: "4px",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = brand.navyDeep)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = brand.navy)
            }
          >
            Start a Conversation
          </a>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {m && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "62px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(250,250,247,0.98)",
            backdropFilter: "blur(18px)",
            borderBottom: `1px solid ${brand.rule}`,
            padding: "1rem 1.25rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navItems.map((item) => (
            <a
              key={`g-mob-${item.label}`}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: brand.navy,
                textDecoration: "none",
                fontSize: "0.92rem",
                fontWeight: 500,
                padding: "0.85rem 0",
                borderBottom: `1px solid ${brand.rule}`,
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#g-contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "0.85rem",
              padding: "0.85rem 1.25rem",
              background: brand.navy,
              color: brand.white,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "4px",
              textAlign: "center" as const,
              letterSpacing: "0.04em",
            }}
          >
            Start a Conversation
          </a>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: m ? "auto" : "92vh",
          padding: m ? "7rem 1.25rem 4rem" : "9rem 4rem 5rem",
          background: `linear-gradient(180deg, ${brand.paper} 0%, ${brand.cream} 100%)`,
          overflow: "hidden",
          borderBottom: `1px solid ${brand.rule}`,
        }}
      >
        {/* Background horizon motif */}
        <div
          style={{
            position: "absolute",
            right: m ? "-20%" : "-5%",
            bottom: m ? "-15%" : "-25%",
            width: m ? "120%" : "55%",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 600 400" style={{ width: "100%", height: "auto" }}>
            <circle cx="300" cy="200" r="140" fill={brand.orange} />
            <path
              d="M0 270 Q 150 230, 300 270 T 600 270"
              fill="none"
              stroke={brand.teal}
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M0 310 Q 150 280, 300 310 T 600 310"
              fill="none"
              stroke={brand.teal}
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M0 350 Q 150 325, 300 350 T 600 350"
              fill="none"
              stroke={brand.teal}
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        <div
          style={{ position: "relative", zIndex: 2, maxWidth: m ? "100%" : "900px" }}
        >
          <div
            className="g-fade g-fade-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: brand.tealDeep,
              fontWeight: 600,
              marginBottom: "1.5rem",
              padding: "0.45rem 0.9rem",
              border: `1px solid ${brand.teal}`,
              borderRadius: "999px",
              background: brand.tealSoft,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: brand.orange,
              }}
            />
            Driving Impactful Change Since 2010
          </div>

          <h1
            className="g-fade g-fade-2"
            style={{
              fontFamily: display,
              fontSize: m ? "2.6rem" : "clamp(3.2rem, 6.5vw, 5.4rem)",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: brand.navy,
              margin: 0,
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
          >
            Empowering organizations through{" "}
            <span
              style={{
                fontStyle: "italic",
                color: brand.tealDeep,
                fontWeight: 400,
              }}
            >
              strategic consulting.
            </span>
          </h1>

          <div
            className="g-fade g-fade-3"
            style={{
              fontFamily: display,
              fontSize: m ? "1.05rem" : "1.3rem",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.4,
              color: brand.orange,
              maxWidth: "640px",
              marginTop: m ? "1.25rem" : "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Accelerating outcomes for the leaders building what&apos;s next.
          </div>

          <p
            className="g-fade g-fade-3"
            style={{
              fontFamily: body,
              fontSize: m ? "1.05rem" : "1.25rem",
              lineHeight: 1.6,
              color: brand.inkSoft,
              maxWidth: "640px",
              marginTop: m ? "1.5rem" : "2rem",
              marginBottom: m ? "2rem" : "2.75rem",
              fontWeight: 400,
            }}
          >
            CCS is a consulting house — not a job shop, not a coaching house, not an
            AI product team. We self-select the clients we work with and solve the
            problem in the way best suited for that moment. Singles and doubles,
            every quarter.
          </p>

          <div
            className="g-fade g-fade-4"
            style={{
              display: "flex",
              gap: "0.9rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#g-contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.95rem 1.75rem",
                background: brand.navy,
                color: brand.white,
                textDecoration: "none",
                fontFamily: body,
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                borderRadius: "4px",
                transition: "transform 0.2s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = brand.navyDeep;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = brand.navy;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start a Conversation
              <span style={{ fontSize: "1rem", lineHeight: 1 }}>→</span>
            </a>
            <a
              href="#g-services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.95rem 1.75rem",
                background: "transparent",
                color: brand.navy,
                textDecoration: "none",
                fontFamily: body,
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                borderRadius: "4px",
                border: `1.5px solid ${brand.navy}`,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = brand.navy;
                e.currentTarget.style.color = brand.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = brand.navy;
              }}
            >
              Explore What We Do
            </a>
          </div>

          {/* Tiny meta row */}
          <div
            className="g-fade g-fade-4"
            style={{
              marginTop: m ? "2.5rem" : "4rem",
              display: "flex",
              flexWrap: "wrap",
              gap: m ? "1.25rem" : "3rem",
              fontSize: "0.78rem",
              color: brand.muted,
              letterSpacing: "0.04em",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: brand.tealDeep,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                Founded
              </div>
              <div style={{ color: brand.navy, fontWeight: 500 }}>
                Austin, Texas · 2010
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: brand.tealDeep,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                Service Lines
              </div>
              <div style={{ color: brand.navy, fontWeight: 500 }}>
                Coaching · Consulting · Talent · AI
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: brand.tealDeep,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                Engagement Model
              </div>
              <div style={{ color: brand.navy, fontWeight: 500 }}>
                Retained · Modular · Self-Selecting
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPROACH / POSITIONING ─── */}
      <section
        id="g-approach"
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.navy,
          color: brand.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 100%, rgba(58,175,181,0.18) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "auto 1fr",
              gap: m ? "2rem" : "5rem",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.orange,
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Our Approach
              </div>
              <HorizonMark size={64} />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: display,
                  fontSize: m ? "1.85rem" : "clamp(2.2rem, 3.8vw, 3.4rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: brand.white,
                  margin: 0,
                  marginBottom: m ? "1.75rem" : "2.5rem",
                }}
              >
                We don&apos;t change people.
                <br />
                We <span style={{ color: brand.teal, fontStyle: "italic" }}>enable</span>{" "}
                them to change.
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: m ? "1fr" : "1fr 1fr",
                  gap: m ? "1.5rem" : "3rem",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(247,243,236,0.85)",
                }}
              >
                <p style={{ margin: 0 }}>
                  Coaching is enabling change, not creating it. Most senior leaders we
                  work with already know where they&apos;re going. They need a partner
                  who can accelerate the outcome the team is already chasing — and
                  remove the friction sitting between intention and execution.
                </p>
                <p style={{ margin: 0 }}>
                  Our point of entry can be any of the four service lines. The
                  engagement looks the same once we&apos;re in. We assess, we solve, we
                  embed the team that runs it once we leave. Knowledge transfer over
                  technology delivery. Long-term partnership over deal-by-deal.
                </p>
              </div>

              {/* Principle pill row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                  marginTop: m ? "2rem" : "2.5rem",
                }}
              >
                {[
                  "Consulting House",
                  "Self-Selecting",
                  "People-First",
                  "Outcome-Oriented",
                  "Embedded",
                  "Modular",
                ].map((p) => (
                  <span
                    key={`g-pill-${p}`}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "0.45rem 0.95rem",
                      border: `1px solid rgba(247,243,236,0.25)`,
                      borderRadius: "999px",
                      color: "rgba(247,243,236,0.85)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="g-services"
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.paper,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1.5fr",
              gap: m ? "1.5rem" : "5rem",
              marginBottom: m ? "2.5rem" : "4rem",
              alignItems: "end",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.tealDeep,
                  fontWeight: 700,
                  marginBottom: "0.85rem",
                }}
              >
                Four Service Lines
              </div>
              <h2
                style={{
                  fontFamily: display,
                  fontSize: m ? "1.85rem" : "clamp(2.2rem, 3.6vw, 3.2rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: brand.navy,
                  margin: 0,
                }}
              >
                One firm.
                <br />
                <span style={{ fontStyle: "italic", color: brand.tealDeep }}>
                  Four points of entry.
                </span>
              </h2>
            </div>
            <p
              style={{
                fontSize: m ? "0.95rem" : "1.05rem",
                lineHeight: 1.7,
                color: brand.inkSoft,
                margin: 0,
              }}
            >
              Each service line is a doorway into the same firm. Most engagements
              start in one and grow into another — a coaching engagement that
              surfaces a workflow problem, a recruitment retainer that uncovers a
              leadership gap, an AI assessment that reveals a culture question. We
              solve the problem in front of us with the right tool from the right
              line.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "1rem" : "1.5rem",
            }}
          >
            {services.map((s) => (
              <div
                key={`g-svc-${s.num}`}
                className="g-service-card"
                style={{
                  background: brand.white,
                  border: `1px solid ${brand.rule}`,
                  borderRadius: "10px",
                  padding: m ? "1.75rem 1.5rem" : "2.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "100%",
                    background: `linear-gradient(180deg, ${brand.orange} 0%, ${brand.teal} 100%)`,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.85rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: display,
                      fontSize: "1.15rem",
                      color: brand.orange,
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      color: brand.muted,
                      fontWeight: 600,
                    }}
                  >
                    Service Line
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: display,
                    fontSize: m ? "1.5rem" : "1.85rem",
                    fontWeight: 500,
                    lineHeight: 1.15,
                    letterSpacing: "-0.015em",
                    color: brand.navy,
                    margin: 0,
                  }}
                >
                  {s.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: brand.tealDeep,
                    fontStyle: "italic",
                    fontWeight: 500,
                    marginTop: "0.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {s.sub}
                </div>

                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    color: brand.inkSoft,
                    margin: 0,
                    marginBottom: "1.5rem",
                  }}
                >
                  {s.desc}
                </p>

                <div
                  style={{
                    borderTop: `1px solid ${brand.rule}`,
                    paddingTop: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase" as const,
                      color: brand.muted,
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                    }}
                  >
                    What we deliver
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "grid",
                      gap: "0.45rem",
                    }}
                  >
                    {s.deliverables.map((d) => (
                      <li
                        key={`g-svc-d-${d}`}
                        style={{
                          fontSize: "0.85rem",
                          color: brand.ink,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            background: brand.teal,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI ENABLEMENT FRAMEWORK ─── */}
      <section
        id="g-ai"
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.cream,
          borderTop: `1px solid ${brand.rule}`,
          borderBottom: `1px solid ${brand.rule}`,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center" as const,
              maxWidth: "780px",
              margin: "0 auto",
              marginBottom: m ? "3rem" : "4.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: brand.orange,
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              AI Enablement Framework
            </div>
            <h2
              style={{
                fontFamily: display,
                fontSize: m ? "1.85rem" : "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: brand.navy,
                margin: 0,
                marginBottom: "1.25rem",
              }}
            >
              Building confident leaders{" "}
              <span style={{ fontStyle: "italic", color: brand.tealDeep }}>
                in the age of AI.
              </span>
            </h2>
            <p
              style={{
                fontSize: m ? "1rem" : "1.1rem",
                lineHeight: 1.65,
                color: brand.inkSoft,
                margin: 0,
              }}
            >
              AI enablement is the new change management. The hardest part isn&apos;t
              the technology — it&apos;s knowing what your team should be doing with
              the hours it frees up. We coach leaders through that question first.
            </p>
          </div>

          {/* Phase row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
              gap: m ? "1rem" : "0",
              position: "relative",
            }}
          >
            {/* Connector line (desktop only) */}
            {!m && (
              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  left: "16%",
                  right: "16%",
                  height: 2,
                  background: `linear-gradient(90deg, ${brand.orange} 0%, ${brand.teal} 100%)`,
                  zIndex: 1,
                }}
              />
            )}

            {phases.map((p, i) => (
              <div
                key={`g-phase-${p.label}`}
                style={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center" as const,
                  padding: m ? "1.5rem" : "0 1.5rem",
                  background: m ? brand.white : "transparent",
                  borderRadius: m ? "10px" : 0,
                  border: m ? `1px solid ${brand.rule}` : "none",
                }}
              >
                <div
                  style={{
                    width: m ? "56px" : "64px",
                    height: m ? "56px" : "64px",
                    borderRadius: "50%",
                    background: brand.navy,
                    color: brand.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: display,
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    margin: m ? "0 auto 1rem" : "0 auto 1.5rem",
                    border: `3px solid ${brand.cream}`,
                    boxShadow: `0 0 0 2px ${i === 0 ? brand.orange : brand.teal}`,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: display,
                    fontSize: m ? "1.4rem" : "1.6rem",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    color: brand.navy,
                    margin: 0,
                    marginBottom: "0.6rem",
                  }}
                >
                  {p.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: brand.inkSoft,
                    margin: 0,
                    maxWidth: m ? "100%" : "260px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pull-quote from Tom's voice */}
          <div
            style={{
              maxWidth: "780px",
              margin: m ? "3rem auto 0" : "4.5rem auto 0",
              padding: m ? "1.75rem" : "2.5rem 3rem",
              background: brand.white,
              border: `1px solid ${brand.rule}`,
              borderLeft: `3px solid ${brand.orange}`,
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: display,
                fontSize: m ? "1.15rem" : "1.4rem",
                lineHeight: 1.5,
                color: brand.navy,
                fontWeight: 400,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &ldquo;The leaders pulling ahead aren&apos;t the ones with the best
              tech. They&apos;re the ones who decided what they want their teams
              doing instead.&rdquo;
            </div>
            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: brand.muted,
                fontWeight: 600,
              }}
            >
              — Tom Triolo, Founder & CEO
            </div>
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY: Inside-Out / Outside-In ─── */}
      <section
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.paper,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "1.5rem" : "3rem",
              alignItems: "stretch",
            }}
          >
            {/* Heading column */}
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.tealDeep,
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                Coaching Methodology
              </div>
              <h2
                style={{
                  fontFamily: display,
                  fontSize: m ? "1.85rem" : "clamp(2.2rem, 3.6vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: brand.navy,
                  margin: 0,
                  marginBottom: "1.25rem",
                }}
              >
                Inside-Out.
                <br />
                <span style={{ color: brand.orange, fontStyle: "italic" }}>
                  Outside-In.
                </span>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: brand.inkSoft,
                  margin: 0,
                }}
              >
                Every coaching engagement runs on two tracks. We anchor the
                individual leader in their own values, motivations, and presence —
                then anchor the work in the organizational outcomes they&apos;re
                accountable for. One without the other produces drift. Together they
                produce catalytic leaders.
              </p>
            </div>

            {/* Two-column method blocks */}
            <div style={{ display: "grid", gap: "1rem" }}>
              <div
                style={{
                  padding: m ? "1.5rem" : "2rem",
                  background: brand.white,
                  border: `1px solid ${brand.rule}`,
                  borderRadius: "10px",
                  borderTop: `3px solid ${brand.teal}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase" as const,
                    color: brand.tealDeep,
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Inside-Out
                </div>
                <h4
                  style={{
                    fontFamily: display,
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: brand.navy,
                    margin: 0,
                    marginBottom: "0.6rem",
                  }}
                >
                  Personal alignment
                </h4>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: brand.inkSoft,
                    margin: 0,
                  }}
                >
                  Traits, motivations, values, presence. The work a leader has to do
                  on themselves before the team can move with them.
                </p>
              </div>

              <div
                style={{
                  padding: m ? "1.5rem" : "2rem",
                  background: brand.white,
                  border: `1px solid ${brand.rule}`,
                  borderRadius: "10px",
                  borderTop: `3px solid ${brand.orange}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase" as const,
                    color: brand.orange,
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  Outside-In
                </div>
                <h4
                  style={{
                    fontFamily: display,
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: brand.navy,
                    margin: 0,
                    marginBottom: "0.6rem",
                  }}
                >
                  Organizational alignment
                </h4>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: brand.inkSoft,
                    margin: 0,
                  }}
                >
                  Business objectives, team dynamics, external perceptions. The
                  context the leader is operating in — and what success looks like
                  to the people around them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section
        id="g-values"
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.navyDeep,
          color: brand.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: m ? "100%" : "60%",
            height: "100%",
            background:
              "radial-gradient(circle at 100% 0%, rgba(232,148,58,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "auto 1fr",
              gap: m ? "2rem" : "4rem",
              alignItems: "start",
              marginBottom: m ? "2.5rem" : "4rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.orange,
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                What we stand on
              </div>
              <h2
                style={{
                  fontFamily: display,
                  fontSize: m ? "1.85rem" : "clamp(2.2rem, 3.8vw, 3.4rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: brand.white,
                  margin: 0,
                  marginBottom: 0,
                }}
              >
                Five values.
                <br />
                <span style={{ fontStyle: "italic", color: brand.teal }}>
                  Not display words.
                </span>
              </h2>
            </div>
            <p
              style={{
                fontSize: m ? "0.95rem" : "1.05rem",
                lineHeight: 1.7,
                color: "rgba(247,243,236,0.78)",
                margin: 0,
                maxWidth: "560px",
              }}
            >
              These show up in how we engage with clients, how we hire, how we make
              commitments. The work either reflects them or it doesn&apos;t — and we
              walk away from engagements that wouldn&apos;t.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "repeat(5, 1fr)",
              gap: m ? "0.75rem" : "1rem",
            }}
          >
            {values.map((v, i) => (
              <div
                key={`g-value-${v.name}`}
                style={{
                  padding: m ? "1.5rem" : "1.75rem 1.25rem",
                  background: "rgba(247,243,236,0.04)",
                  border: `1px solid rgba(247,243,236,0.12)`,
                  borderRadius: "8px",
                  borderTop: `2px solid ${i % 2 === 0 ? brand.teal : brand.orange}`,
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(247,243,236,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(247,243,236,0.04)")
                }
              >
                <div
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase" as const,
                    color: brand.muted,
                    fontWeight: 700,
                    marginBottom: "0.7rem",
                  }}
                >
                  0{i + 1}
                </div>
                <h4
                  style={{
                    fontFamily: display,
                    fontSize: m ? "1.3rem" : "1.4rem",
                    fontWeight: 500,
                    color: brand.white,
                    margin: 0,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.name}
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "rgba(247,243,236,0.72)",
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section
        id="g-team"
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.paper,
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center" as const,
              marginBottom: m ? "2.5rem" : "4rem",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase" as const,
                color: brand.tealDeep,
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Leadership
            </div>
            <h2
              style={{
                fontFamily: display,
                fontSize: m ? "1.85rem" : "clamp(2.2rem, 3.8vw, 3.4rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: brand.navy,
                margin: 0,
              }}
            >
              The people behind the work.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "1.25rem" : "2rem",
            }}
          >
            {(["tom", "brent"] as const).map((key) => {
              const p = teamData[key];
              return (
                <button
                  key={`g-team-${key}`}
                  onClick={() => setModalMember(key)}
                  style={{
                    background: brand.white,
                    border: `1px solid ${brand.rule}`,
                    borderRadius: "12px",
                    padding: m ? "1.75rem 1.5rem" : "2.5rem",
                    textAlign: "left" as const,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    fontFamily: body,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = brand.teal;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 40px -20px rgba(27,40,56,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = brand.rule;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                    }}
                  >
                    {p.photo ? (
                      <Image
                        src={p.photo}
                        alt={p.name}
                        width={88}
                        height={88}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: `3px solid ${brand.cream}`,
                          boxShadow: `0 0 0 2px ${brand.teal}`,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 88,
                          height: 88,
                          borderRadius: "50%",
                          background: brand.navy,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: brand.orange,
                          fontFamily: display,
                          fontSize: "1.6rem",
                          fontWeight: 500,
                          border: `3px solid ${brand.cream}`,
                          boxShadow: `0 0 0 2px ${brand.orange}`,
                        }}
                      >
                        {p.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                    <div>
                      <h3
                        style={{
                          fontFamily: display,
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          letterSpacing: "-0.015em",
                          color: brand.navy,
                          margin: 0,
                        }}
                      >
                        {p.name}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: brand.tealDeep,
                          letterSpacing: "0.04em",
                          marginTop: "0.25rem",
                          fontWeight: 500,
                        }}
                      >
                        {p.role}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: brand.inkSoft,
                      margin: 0,
                    }}
                  >
                    {p.shortBio}
                  </p>

                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase" as const,
                      color: brand.orange,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    Read full bio
                    <span style={{ fontSize: "1rem", lineHeight: 1 }}>→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ─── */}
      <section
        id="g-contact"
        style={{
          padding: m ? "4.5rem 1.25rem" : "7rem 4rem",
          background: brand.navy,
          color: brand.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 100%, rgba(58,175,181,0.16) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(232,148,58,0.12) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center" as const,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}>
            <HorizonMark size={80} />
          </div>

          <h2
            style={{
              fontFamily: display,
              fontSize: m ? "2rem" : "clamp(2.4rem, 4.5vw, 3.8rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: brand.white,
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            What is your team{" "}
            <span style={{ color: brand.teal, fontStyle: "italic" }}>
              focused on
            </span>{" "}
            right now?
          </h2>
          <p
            style={{
              fontSize: m ? "1rem" : "1.15rem",
              lineHeight: 1.65,
              color: "rgba(247,243,236,0.82)",
              maxWidth: "640px",
              margin: "0 auto 2.5rem",
            }}
          >
            We work with a small number of senior leaders each year. If
            you&apos;re in a moment where the next move matters, let&apos;s talk
            about what accelerating that outcome would look like.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: m ? "2.5rem" : "3rem",
            }}
          >
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 2rem",
                background: brand.orange,
                color: brand.navyDeep,
                textDecoration: "none",
                fontFamily: body,
                fontSize: "0.88rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                borderRadius: "4px",
                transition: "transform 0.2s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F4A658";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = brand.orange;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Email Tom Directly
              <span style={{ fontSize: "1.05rem", lineHeight: 1 }}>→</span>
            </a>
            <a
              href="tel:+15125791819"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 2rem",
                background: "transparent",
                color: brand.white,
                textDecoration: "none",
                fontFamily: body,
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                borderRadius: "4px",
                border: `1.5px solid rgba(247,243,236,0.35)`,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brand.teal;
                e.currentTarget.style.color = brand.teal;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(247,243,236,0.35)";
                e.currentTarget.style.color = brand.white;
              }}
            >
              +1 (512) 579-1819
            </a>
          </div>

          <div
            style={{
              borderTop: `1px solid rgba(247,243,236,0.18)`,
              paddingTop: "2rem",
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
              gap: m ? "1.25rem" : "2rem",
              textAlign: m ? "center" : ("left" as const),
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.orange,
                  fontWeight: 700,
                  marginBottom: "0.45rem",
                }}
              >
                Headquarters
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: brand.white,
                  lineHeight: 1.5,
                }}
              >
                555 E 5th Street
                <br />
                Austin, Texas 78701
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.orange,
                  fontWeight: 700,
                  marginBottom: "0.45rem",
                }}
              >
                Leadership
              </div>
              <a
                href="mailto:ttriolo@completecareersolutions.com"
                style={{
                  fontSize: "0.9rem",
                  color: brand.white,
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "0.35rem",
                  borderBottom: `1px solid rgba(247,243,236,0.3)`,
                }}
              >
                ttriolo@completecareersolutions.com
              </a>
              <a
                href="mailto:brent.triolo@completecareersolutions.com"
                style={{
                  fontSize: "0.9rem",
                  color: brand.white,
                  textDecoration: "none",
                  display: "block",
                  borderBottom: `1px solid rgba(247,243,236,0.3)`,
                }}
              >
                brent.triolo@completecareersolutions.com
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: brand.orange,
                  fontWeight: 700,
                  marginBottom: "0.45rem",
                }}
              >
                Web
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: brand.white,
                  lineHeight: 1.5,
                }}
              >
                completecareersolutions.com
                <br />
                <span style={{ color: brand.teal }}>+1 (512) 579-1819</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{
          padding: m ? "2rem 1.25rem" : "2.5rem 4rem",
          background: brand.navyDeep,
          color: "rgba(247,243,236,0.55)",
          fontSize: "0.78rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          borderTop: `1px solid rgba(247,243,236,0.1)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Image src="/logo.png" alt="CCS" width={26} height={26} />
          <span>
            © {new Date().getFullYear()} Complete Career Solutions. Driving
            impactful change since 2010.
          </span>
        </div>
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: brand.teal,
            fontWeight: 600,
          }}
        >
          Singles & Doubles, Every Quarter
        </div>
      </footer>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
}
