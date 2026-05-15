"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

export default function OptionD() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const m = useIsMobile();

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        color: "#1B2838",
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
          <Image
            src="/logo.png"
            alt="CCS"
            width={42}
            height={42}
            style={{ borderRadius: "50%" }}
          />
          <div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#1B2838",
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
                  background: "#B07C42",
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none"
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
              background: "#1B2838",
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

      {m && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "62px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(250,249,246,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(26,31,54,0.06)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Approach", href: "#approach" },
            { label: "Services", href: "#services" },
            { label: "Results", href: "#results" },
            { label: "Leadership", href: "#leadership" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#1B2838",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(26,31,54,0.06)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "0.5rem",
              padding: "0.75rem 1.5rem",
              background: "#1B2838",
              color: "#faf9f6",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.06em",
              fontWeight: 500,
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            Begin a Conversation
          </a>
        </div>
      )}

      {/* Hero — Austin skyline as a subtle right-side backdrop */}
      <section
        style={{
          padding: m ? "5rem 1.5rem 3rem" : "8rem 4rem 6rem",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Austin skyline backdrop, masked into the right edge */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            right: m ? "-30%" : "-10%",
            width: m ? "120%" : "55%",
            height: "100%",
            backgroundImage: "url(/HomePageBackground.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: m ? 0.15 : 0.28,
            maskImage:
              "linear-gradient(270deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(270deg, rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 100%)",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(250,249,246,0.96) 0%, rgba(250,249,246,0.7) 50%, rgba(250,249,246,0.4) 100%)",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            color: "#B07C42",
            fontWeight: 500,
            marginBottom: "2rem",
          }}
        >
          DRIVING IMPACTFUL CHANGE SINCE 2010 · AUSTIN, TEXAS
        </div>
        <h1
          style={{
            fontSize: m ? "2.4rem" : "4.2rem",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#1B2838",
            maxWidth: "880px",
            marginBottom: "2rem",
          }}
        >
          Empowering organizations through{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            strategic
          </span>{" "}
          consulting.
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5a5e6e",
            maxWidth: "680px",
            marginBottom: "1.5rem",
          }}
        >
          At Complete Career Solutions, we specialize in driving impactful change
          that resonates throughout entire organizations — always rooted in the
          power of the individual. Our mission is to guide you in surpassing your
          business objectives.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5a5e6e",
            maxWidth: "680px",
            marginBottom: "3.5rem",
          }}
        >
          Positioned uniquely as an organizational consulting firm, we prioritize
          four key pillars of success: <span style={{ color: "#1B2838", fontWeight: 400 }}>Executive Coaching, Leadership Development, Operational Consulting,</span> and <span style={{ color: "#1B2838", fontWeight: 400 }}>Talent Management</span> — with AI Enablement woven through every engagement. We empower superior performance through your most valuable asset: your people.
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
              background: "#1B2838",
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
              color: "#1B2838",
              textDecoration: "none",
              borderBottom: "1px solid #1B2838",
            }}
          >
            Our Approach
          </a>
        </div>
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
            { num: "15+", label: "Years in Practice" },
            { num: "25+", label: "Yrs Sr. Leadership" },
            { num: "6", label: "Industries Served" },
            { num: "100%", label: "Referral-Driven Growth" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#1B2838",
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
                color: "#B07C42",
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
              Partnering for{" "}
              <span style={{ fontStyle: "italic" }}>success</span>
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
              With a focus on intention, integrity, and excellence, we build lasting
              partnerships that foster growth and resilience. By partnering with us,
              you gain access to a wealth of knowledge and trusted advisors committed
              to driving your business forward. Our unique approach ensures your
              organization stays well-positioned for success in an ever-changing
              market.
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
                title: "Inside-Out",
                text: "Coaching that delves into personal traits and motivations, enabling leaders to align their goals with their core beliefs and values.",
              },
              {
                title: "Outside-In",
                text: "Coaching focused on organizational objectives, providing leaders with a holistic understanding of success criteria and how they are perceived by others.",
              },
              {
                title: "Assess → Implement → Optimize",
                text: "Our three-phase framework for AI Enablement — readiness mapping, secure workspace deployment, and long-term adoption coaching.",
              },
              {
                title: "Coaching-Informed Recruitment",
                text: "CCS Staffing leverages our coaches to assess a candidate's long-term viability and potential for success before submission.",
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
                    color: "#B07C42",
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
          background: "#1B2838",
          padding: m ? "3rem 1.5rem" : "7rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              color: "#B07C42",
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
                text: "Enhance leadership skills and maximize potential through personalized coaching programs tailored to your organization's needs. Inside-out and outside-in coaching across the executive lifecycle.",
                details: "Leadership Acceleration · Successor & 100-Day Coaching · Executive Team Coaching",
              },
              {
                title: "Consulting",
                text: "Optimize your business operations and processes for efficiency and profitability under expert guidance. Human capital strategy and solutions that empower leaders to navigate disruption effectively.",
                details: "Outcome-Driven Solutions · Workforce Experience · Leadership Capability",
              },
              {
                title: "Talent Management",
                text: "Foster a culture of strong leadership and professional growth with our tailored development solutions. CCS Staffing finds the right person, at the right time, for the right role.",
                details: "Outsourced Talent Acquisition · Executive Search · Coaching-Informed Validation",
              },
              {
                title: "AI Enablement",
                text: "Build confident leaders in the age of AI through readiness assessments, secure workspace setup, and ongoing enablement — Assess → Implement → Optimize.",
                details: "AI Readiness Report · Secure Workspaces · Leadership Workshops",
              },
            ].map((svc, i) => (
              <div
                key={i}
                style={{
                  padding: "2.5rem 2rem",
                  background: "#1B2838",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.15em",
                    color: "#B07C42",
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
            color: "#B07C42",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          THE WORK
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
          <span style={{ fontStyle: "italic" }}>partnership</span>
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
              A FORTUNE 500 TECHNOLOGY CLIENT
            </div>
            <p
              style={{
                fontSize: "1.6rem",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "#1B2838",
                maxWidth: "750px",
              }}
            >
              CCS partnered with a senior HR team to redesign their global
              performance review architecture — cutting cycle time substantially
              while improving manager and employee satisfaction across all
              business units. Every engagement starts where the client is.
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
                metric: "Cycle time cut",
                label: "9 weeks → 2.5 weeks",
              },
              { metric: "Global scale", label: "Deployed across all BUs" },
              { metric: "Manager NPS", label: "Improved across the board" },
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
                    color: "#1B2838",
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
                color: "#B07C42",
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
              color: "#B07C42",
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
                    <Image
                      src={person.photo}
                      alt={person.name}
                      width={72}
                      height={72}
                      style={{
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
                        background: "#1B2838",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          color: "#B07C42",
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
                      color: "#B07C42",
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
                      color: "#B07C42",
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
            color: "#B07C42",
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
            { name: "Courage", desc: "Drives us to embrace trust, stay present-minded, and act with faith and vulnerability." },
            { name: "Intention & Quality", desc: "Ensure that everything we do has purpose, striving to maximize impact." },
            { name: "Integrity", desc: "At the heart of our business — honesty, transparency, and accountability." },
            { name: "Partnership", desc: "Meaningful, long-term relationships with clients, candidates, and collaborators." },
            { name: "Tenacity", desc: "Fuels our competitive spirit, resilience, and unwavering passion for success." },
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
                  color: "#1B2838",
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
            color: "#B07C42",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          CONTACT US
        </div>
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
        >
          Partner{" "}
          <span style={{ fontStyle: "italic" }}>with us</span>
        </h2>
        <p
          style={{
            fontSize: "1rem",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5a5e6e",
            marginBottom: "2.5rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          We strategically partner with companies and individuals whose values
          align with ours. We invite you to reach out and explore how we can
          achieve success together.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: m ? "column" : "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: m ? "stretch" : undefined,
            flexWrap: "wrap",
            marginBottom: "3rem",
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
              background: "#1B2838",
              color: "#faf9f6",
              textDecoration: "none",
              borderRadius: "4px",
              textAlign: m ? "center" : undefined,
            }}
          >
            Email Tom Triolo
          </a>
          <a
            href="mailto:brent.triolo@completecareersolutions.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "1rem 2.5rem",
              border: "1px solid rgba(26,31,54,0.15)",
              color: "#1B2838",
              textDecoration: "none",
              borderRadius: "4px",
              textAlign: m ? "center" : undefined,
            }}
          >
            Email Brent Triolo
          </a>
        </div>

        {/* Office details */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
            gap: m ? "1.25rem" : "2rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(26,31,54,0.06)",
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: m ? "center" : ("left" as const),
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#B07C42",
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: "0.5rem",
              }}
            >
              CCS MAIN OFFICE
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#1B2838",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              555 E 5th St
              <br />
              Austin, TX 78701-4157
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#B07C42",
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: "0.5rem",
              }}
            >
              TELEPHONE
            </div>
            <a
              href="tel:5125791819"
              style={{
                fontSize: "0.9rem",
                color: "#1B2838",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                textDecoration: "none",
              }}
            >
              +1 (512) 579-1819
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#B07C42",
                fontWeight: 500,
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: "0.5rem",
              }}
            >
              EMAIL
            </div>
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                fontSize: "0.85rem",
                color: "#1B2838",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                textDecoration: "none",
                wordBreak: "break-all" as const,
              }}
            >
              ttriolo@completecareersolutions.com
            </a>
          </div>
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
