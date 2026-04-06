"use client";

import { useState } from "react";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

export default function OptionD() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const m = useIsMobile();

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        color: "#1a1f36",
        background: "#faf9f6",
        minHeight: "100vh",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: m ? "1rem 1.5rem" : "1.5rem 4rem",
          background: "rgba(250,249,246,0.95)",
          backdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "1px solid rgba(26,31,54,0.06)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src="/logo.png"
            alt="CCS"
            style={{ height: "42px", width: "42px", borderRadius: "50%" }}
          />
          <div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#1a1f36",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              COMPLETE CAREER SOLUTIONS
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                fontFamily: "'DM Sans', sans-serif",
                color: "#8a8e9e",
                letterSpacing: "0.12em",
                fontWeight: 400,
              }}
            >
              EXECUTIVE ADVISORY
            </div>
          </div>
        </div>
        <div
          style={{
            display: m ? "none" : "flex",
            gap: "2.5rem",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.04em",
            color: "#5a5e6e",
          }}
        >
          <a href="#approach" style={{ textDecoration: "none", color: "inherit" }}>
            Approach
          </a>
          <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>
            Services
          </a>
          <a href="#results" style={{ textDecoration: "none", color: "inherit" }}>
            Results
          </a>
          <a href="#leadership" style={{ textDecoration: "none", color: "inherit" }}>
            Leadership
          </a>
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#faf9f6",
              background: "#1a1f36",
              padding: "0.55rem 1.4rem",
              borderRadius: "4px",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              fontWeight: 500,
            }}
          >
            Begin a Conversation
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: m ? "5rem 1.5rem 3rem" : "8rem 4rem 6rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            color: "#b8a88a",
            fontWeight: 500,
            marginBottom: "2rem",
          }}
        >
          TRUSTED BY ENTERPRISE LEADERS SINCE 2010
        </div>
        <h1
          style={{
            fontSize: m ? "2.4rem" : "4.2rem",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#1a1f36",
            maxWidth: "850px",
            marginBottom: "2rem",
          }}
        >
          The quiet partner behind{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            exceptional
          </span>{" "}
          leadership teams.
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5a5e6e",
            maxWidth: "620px",
            marginBottom: "3.5rem",
          }}
        >
          We partner with CEOs and CHROs to accelerate leadership performance
          through executive coaching, talent strategy, and AI-powered
          organizational transformation.
        </p>
        <div style={{ display: "flex", flexDirection: m ? "column" : "row", gap: "1rem", alignItems: m ? "stretch" : "center" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "1rem 2.2rem",
              background: "#1a1f36",
              color: "#faf9f6",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "all 0.3s",
            }}
          >
            Schedule a Consultation
          </a>
          <a
            href="#approach"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "1rem 2.2rem",
              color: "#1a1f36",
              textDecoration: "none",
              borderBottom: "1px solid #1a1f36",
            }}
          >
            Our Approach
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        style={{
          borderTop: "1px solid rgba(26,31,54,0.06)",
          borderBottom: "1px solid rgba(26,31,54,0.06)",
          padding: m ? "2rem 1.5rem" : "2.5rem 4rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: m ? "grid" : "flex",
            gridTemplateColumns: m ? "1fr 1fr" : undefined,
            gap: m ? "1.5rem" : undefined,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {[
            { num: "25+", label: "Years Advisory Experience" },
            { num: "500+", label: "Leaders Coached" },
            { num: "73%", label: "Faster Performance Cycles" },
            { num: "Fortune 500", label: "Client Portfolio" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#1a1f36",
                  marginBottom: "0.3rem",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.1em",
                  color: "#8a8e9e",
                  fontWeight: 400,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        style={{
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "1fr 1.4fr",
            gap: m ? "2.5rem" : "5rem",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#b8a88a",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              OUR APPROACH
            </div>
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Acceleration through{" "}
              <span style={{ fontStyle: "italic" }}>precision</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#5a5e6e",
              }}
            >
              We operate in the space between the Big Four consultancies and
              point-solution vendors — senior-led, deeply embedded, accountable
              to outcomes. No junior associates. No recycled playbooks. Every
              engagement is shaped by the specific context of your organization.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Diagnose",
                text: "Deep organizational assessment through stakeholder interviews, data analysis, and cultural mapping.",
              },
              {
                title: "Design",
                text: "Custom strategy development aligned to your specific business objectives and leadership context.",
              },
              {
                title: "Deploy",
                text: "Embedded execution with your team — we parachute in, deliver, and transfer capability.",
              },
              {
                title: "Sustain",
                text: "Ongoing coaching and accountability structures that ensure lasting behavioral change.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  border: "1px solid rgba(26,31,54,0.08)",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.15em",
                    color: "#b8a88a",
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "#5a5e6e",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          background: "#1a1f36",
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "#b8a88a",
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            SERVICES
          </div>
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#faf9f6",
              lineHeight: 1.15,
              marginBottom: "4rem",
              maxWidth: "500px",
            }}
          >
            Four disciplines,{" "}
            <span style={{ fontStyle: "italic" }}>one outcome</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)",
              gap: "1px",
              background: "rgba(250,249,246,0.08)",
            }}
          >
            {[
              {
                title: "Executive Coaching",
                text: "One-on-one development partnerships with C-suite and VP-level leaders focused on measurable behavioral change and strategic impact.",
                details: "ICF-certified methodology · 360 assessments · Board-ready development",
              },
              {
                title: "Consulting",
                text: "Organizational design, change management, and performance acceleration for companies navigating transformation.",
                details: "Culture diagnostics · Change architecture · Operating model design",
              },
              {
                title: "Talent Strategy",
                text: "Executive search, succession planning, and talent architecture that builds leadership pipelines aligned to business strategy.",
                details: "Executive search · Succession planning · Competency frameworks",
              },
              {
                title: "AI Solutions",
                text: "Custom AI tools and integrations that give leadership teams a strategic advantage in decision-making and organizational intelligence.",
                details: "Process automation · AI coaching tools · Decision intelligence",
              },
            ].map((svc, i) => (
              <div
                key={i}
                style={{
                  padding: "2.5rem 2rem",
                  background: "#1a1f36",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.15em",
                    color: "#b8a88a",
                    marginBottom: "1.25rem",
                    fontWeight: 500,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#faf9f6",
                    marginBottom: "1rem",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "rgba(250,249,246,0.55)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {svc.text}
                </p>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    color: "rgba(250,249,246,0.3)",
                    lineHeight: 1.6,
                    borderTop: "1px solid rgba(250,249,246,0.08)",
                    paddingTop: "1rem",
                  }}
                >
                  {svc.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results — Case Study */}
      <section
        id="results"
        style={{
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "#b8a88a",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          CASE STUDY
        </div>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: "3.5rem",
            maxWidth: "600px",
          }}
        >
          Proof through{" "}
          <span style={{ fontStyle: "italic" }}>performance</span>
        </h2>

        <div
          style={{
            border: "1px solid rgba(26,31,54,0.08)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "3rem",
              borderBottom: "1px solid rgba(26,31,54,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "#8a8e9e",
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              LENOVO — GLOBAL PERFORMANCE TRANSFORMATION
            </div>
            <p
              style={{
                fontSize: "1.6rem",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "#1a1f36",
                maxWidth: "750px",
              }}
            >
              &ldquo;CCS helped us redesign our entire performance review
              architecture — cutting cycle time by 73% while improving manager
              and employee satisfaction scores across all business units.&rdquo;
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
              borderTop: "none",
            }}
          >
            {[
              {
                metric: "9 weeks → 2.5 weeks",
                label: "Review Cycle Reduction",
              },
              { metric: "73%", label: "Faster Performance Cycles" },
              { metric: "Global Scale", label: "Deployed Across All BUs" },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  padding: m ? "1.5rem" : "2rem 3rem",
                  borderRight: m
                    ? "none"
                    : i < 2
                      ? "1px solid rgba(26,31,54,0.06)"
                      : "none",
                  borderBottom: m && i < 2 ? "1px solid rgba(26,31,54,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 300,
                    color: "#1a1f36",
                    marginBottom: "0.3rem",
                  }}
                >
                  {r.metric}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.1em",
                    color: "#8a8e9e",
                    fontWeight: 400,
                  }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        style={{
          borderTop: "1px solid rgba(26,31,54,0.06)",
          padding: m ? "3rem 1.5rem" : "5rem 4rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: m ? "column" : "row",
            justifyContent: "space-between",
            alignItems: m ? "flex-start" : "center",
            gap: m ? "1.5rem" : undefined,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#b8a88a",
                fontWeight: 500,
                marginBottom: "0.75rem",
              }}
            >
              INDUSTRIES WE SERVE
            </div>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 300,
              }}
            >
              Deep expertise across sectors
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: m ? "column" : "row",
              gap: m ? "0.75rem" : "2.5rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "#5a5e6e",
              fontWeight: 300,
            }}
          >
            {[
              "Technology",
              "Financial Services",
              "Medical Devices",
              "Professional Services",
              "Consumer Products",
            ].map((ind, i) => (
              <span key={i}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        style={{
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
          background: "#f5f3ef",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "#b8a88a",
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            LEADERSHIP
          </div>
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: "4rem",
            }}
          >
            Senior partners,{" "}
            <span style={{ fontStyle: "italic" }}>personally invested</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1fr",
              gap: m ? "2rem" : "3rem",
            }}
          >
            {(["tom", "brent"] as const).map((key) => {
              const person = teamData[key];
              return (
                <div
                  key={key}
                  style={{
                    background: "#faf9f6",
                    padding: "3rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(26,31,54,0.06)",
                  }}
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "1.5rem",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "#1a1f36",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          color: "#b8a88a",
                          fontSize: "1.3rem",
                          fontWeight: 300,
                        }}
                      >
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {person.name}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#b8a88a",
                      letterSpacing: "0.06em",
                      fontWeight: 500,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {person.role}
                  </div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#5a5e6e",
                      marginBottom: "1rem",
                    }}
                  >
                    {person.shortBio}
                  </p>
                  <button
                    onClick={() => setModalMember(key)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#b8a88a",
                      fontSize: "0.78rem",
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "0.06em",
                      fontWeight: 500,
                      cursor: "pointer",
                      padding: 0,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Read Full Bio &rarr;
                  </button>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#8a8e9e",
                      letterSpacing: "0.04em",
                      borderTop: "1px solid rgba(26,31,54,0.06)",
                      paddingTop: "1rem",
                    }}
                  >
                    {person.credentials}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        style={{
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "#b8a88a",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          OUR VALUES
        </div>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: "3.5rem",
          }}
        >
          The principles that{" "}
          <span style={{ fontStyle: "italic" }}>guide us</span>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr 1fr" : "repeat(5, 1fr)",
            gap: "1px",
            background: "rgba(26,31,54,0.06)",
            border: "1px solid rgba(26,31,54,0.06)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {[
            { name: "Courage", desc: "Acting with trust, presence, faith, and vulnerability." },
            { name: "Intention & Quality", desc: "Purposeful work that maximizes impact." },
            { name: "Integrity", desc: "Honesty, transparency, and accountability at our core." },
            { name: "Partnership", desc: "Meaningful, long-term relationships over transactions." },
            { name: "Tenacity", desc: "Resilience, grit, and unwavering passion for success." },
          ].map((v) => (
            <div
              key={v.name}
              style={{
                padding: "2rem 1.5rem",
                background: "#faf9f6",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  color: "#1a1f36",
                }}
              >
                {v.name}
              </h4>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.6,
                  color: "#5a5e6e",
                  fontWeight: 300,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AUSTIN IMAGE DIVIDER */}
      <div
        style={{
          height: m ? "180px" : "300px",
          backgroundImage: "url(/HomePageBackground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(250,249,246,0.3), rgba(250,249,246,0.1))",
          }}
        />
      </div>

      {/* CTA */}
      <section
        id="contact"
        style={{
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "#b8a88a",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          BEGIN
        </div>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
        >
          Every transformation starts with{" "}
          <span style={{ fontStyle: "italic" }}>a conversation</span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5a5e6e",
            marginBottom: "2.5rem",
            maxWidth: "550px",
            margin: "0 auto 2.5rem",
          }}
        >
          We work with a select number of organizations each quarter. If you're
          ready to accelerate your leadership team's impact, we'd welcome the
          opportunity to explore how we can help.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: m ? "column" : "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: m ? "stretch" : undefined,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "1rem 2.5rem",
              background: "#1a1f36",
              color: "#faf9f6",
              textDecoration: "none",
              borderRadius: "4px",
              textAlign: m ? "center" : undefined,
            }}
          >
            ttriolo@completecareersolutions.com
          </a>
          <a
            href="tel:5125791819"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "1rem 2.5rem",
              border: "1px solid rgba(26,31,54,0.15)",
              color: "#1a1f36",
              textDecoration: "none",
              borderRadius: "4px",
              textAlign: m ? "center" : undefined,
            }}
          >
            (512) 579-1819
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(26,31,54,0.06)",
          padding: m ? "2rem 1.5rem" : "3rem 4rem",
          display: "flex",
          flexDirection: m ? "column" : "row",
          justifyContent: "space-between",
          alignItems: m ? "center" : "center",
          gap: m ? "1rem" : undefined,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            color: "#8a8e9e",
            fontWeight: 300,
          }}
        >
          &copy; {new Date().getFullYear()} Complete Career Solutions. All
          rights reserved.
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            color: "#8a8e9e",
            fontWeight: 300,
          }}
        >
          555 E 5th St, Austin, TX 78701
        </div>
      </footer>

      <TeamModal member={modalMember} onClose={() => setModalMember(null)} />
    </div>
  );
}
