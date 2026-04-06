"use client";

import { useState } from "react";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option A — Editorial Authority
   Dark theme, Playfair Display serif, gold/warm accents, luxury editorial feel */

export default function OptionA() {
  const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null);
  const m = useIsMobile();

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#0a0a0a",
        color: "#f5f0eb",
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
          padding: m ? "1rem 1.5rem" : "1.5rem 4rem",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(200,168,130,0.2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src="/logo.png"
            alt="CCS"
            style={{ width: 36, height: 36, borderRadius: 8 }}
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#c8a882",
            }}
          >
            Complete Career{" "}
            <span style={{ color: "#f5f0eb", fontWeight: 400 }}>Solutions</span>
          </span>
        </div>
        <div style={{ display: m ? "none" : "flex", gap: "2.5rem", alignItems: "center" }}>
          {["Services", "Approach", "Results", "Team"].map((item) => (
            <a
              key={item}
              href={`#a-${item.toLowerCase()}`}
              style={{
                color: "#f5f0eb",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                fontWeight: 400,
                opacity: 0.7,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:ttriolo@completecareersolutions.com"
            style={{
              padding: "0.65rem 1.8rem",
              border: "1px solid #c8a882",
              color: "#c8a882",
              textDecoration: "none",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              fontWeight: 500,
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c8a882";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#c8a882";
            }}
          >
            Book a Call
          </a>
        </div>
      </nav>

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
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(200,168,130,0.04) 0%, rgba(200,168,130,0.01) 100%)",
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            className="animate-fade-up animate-fade-up-1"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase" as const,
              color: "#c8a882",
              marginBottom: "2rem",
              fontWeight: 500,
            }}
          >
            Executive Coaching · Consulting · Talent · AI Solutions
          </div>
          <h1
            className="animate-fade-up animate-fade-up-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            We build leaders who
            <br />
            build{" "}
            <em style={{ fontStyle: "italic", color: "#c8a882" }}>
              extraordinary
            </em>
            <br />
            organizations.
          </h1>
          <p
            className="animate-fade-up animate-fade-up-3"
            style={{
              marginTop: "2rem",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              maxWidth: 560,
              color: "#8a8a8a",
              fontWeight: 300,
            }}
          >
            CCS partners with CEOs, CHROs, and executive teams to unlock
            performance through coaching, strategic consulting, and AI-powered
            talent solutions. Austin-based. Enterprise-proven. Since 2010.
          </p>
          <div
            className="animate-fade-up animate-fade-up-4"
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: m ? "column" : "row",
              gap: "1.5rem",
              alignItems: m ? "flex-start" : "center",
            }}
          >
            <a
              href="mailto:ttriolo@completecareersolutions.com"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                background: "#c8a882",
                color: "#0a0a0a",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                fontWeight: 600,
                transition: "all 0.3s",
              }}
            >
              Schedule a Discovery Call
            </a>
            <a
              href="#a-services"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                border: "1px solid rgba(245,240,235,0.25)",
                color: "#f5f0eb",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                fontWeight: 500,
              }}
            >
              Explore Our Work
            </a>
          </div>

          {/* Metrics */}
          <div
            className="animate-fade-up animate-fade-up-5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: m ? "2rem" : "4rem",
              marginTop: m ? "3rem" : "5rem",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(200,168,130,0.2)",
            }}
          >
            {[
              { num: "15+", label: "Years in Practice" },
              { num: "25+", label: "Years Leadership Experience" },
              { num: "6", label: "Industries Served" },
              { num: "100%", label: "Referral-Based Growth" },
            ].map((metric) => (
              <div key={metric.label} style={{ width: m ? "45%" : "auto" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: m ? "2.2rem" : "2.8rem",
                    fontWeight: 400,
                    color: "#c8a882",
                  }}
                >
                  {metric.num}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase" as const,
                    color: "#8a8a8a",
                    marginTop: "0.3rem",
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section id="a-services" style={{ padding: m ? "3rem 1.5rem" : "6rem 4rem", background: "#2a2a2a" }}>
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#c8a882",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          What We Do
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: 700,
          }}
        >
          Four pillars. One integrated{" "}
          <em style={{ fontStyle: "italic", color: "#c8a882" }}>strategy.</em>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)",
            gap: 0,
            marginTop: m ? "2rem" : "4rem",
            border: "1px solid rgba(200,168,130,0.2)",
          }}
        >
          {[
            {
              num: "01",
              title: "Executive Coaching",
              desc: "Inside-out and outside-in coaching methodology for C-suite leaders, new executives, and high-potentials. Personalized assessments, 100-day onboarding programs, and sustained leadership transformation.",
            },
            {
              num: "02",
              title: "Business Consulting",
              desc: "Human capital strategy, organizational design, workforce experience assessment, and operational optimization. We help leadership teams navigate disruption and drive measurable transformation.",
            },
            {
              num: "03",
              title: "Talent Management",
              desc: "Full-lifecycle talent acquisition, leadership pipeline development, succession planning, and recruitment strategy. Built for organizations that compete on the strength of their people.",
            },
            {
              num: "04",
              title: "AI Solutions",
              desc: "AI readiness assessments, workflow automation strategy, and custom AI-powered tools for HR and leadership teams. Practical enterprise AI that amplifies human performance.",
            },
          ].map((pillar, i) => (
            <div
              key={pillar.num}
              style={{
                padding: m ? "2rem 1.5rem" : "3rem 2.5rem",
                borderRight: m
                  ? "none"
                  : i < 3
                    ? "1px solid rgba(200,168,130,0.2)"
                    : "none",
                borderBottom: m && i < 3 ? "1px solid rgba(200,168,130,0.2)" : "none",
                position: "relative",
                transition: "all 0.4s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(200,168,130,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3rem",
                  color: "rgba(200,168,130,0.15)",
                  fontWeight: 400,
                  marginBottom: "1.5rem",
                }}
              >
                {pillar.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "#8a8a8a",
                  fontWeight: 300,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="a-approach" style={{ padding: m ? "3rem 1.5rem" : "6rem 4rem" }}>
        <div style={{ maxWidth: 700 }}>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              color: "#c8a882",
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            Our Method
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: "2rem",
            }}
          >
            Dual-lens coaching that{" "}
            <em style={{ fontStyle: "italic", color: "#c8a882" }}>transforms</em>{" "}
            from the inside out.
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#8a8a8a",
              fontWeight: 300,
              marginBottom: "1.5rem",
            }}
          >
            Most coaching firms work from one direction. We work from two. Our
            &ldquo;inside-out&rdquo; methodology explores personal traits,
            motivations, and values — aligning leaders with their authentic
            selves. Our &ldquo;outside-in&rdquo; perspective maps organizational
            objectives, success criteria, and stakeholder perception.
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#8a8a8a",
              fontWeight: 300,
            }}
          >
            The intersection is where real leadership transformation happens.
            Leaders who understand both their inner compass and their
            organizational reality don&apos;t just perform — they elevate
            everyone around them.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="a-results"
        style={{ padding: m ? "3rem 1.5rem" : "6rem 4rem", background: "#2a2a2a" }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#c8a882",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Trusted By
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: 700,
          }}
        >
          Leaders who chose to{" "}
          <em style={{ fontStyle: "italic", color: "#c8a882" }}>invest</em> in
          their people.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "1fr 1fr",
            gap: m ? "2rem" : "3rem",
            marginTop: "3rem",
          }}
        >
          {[
            "Placeholder for a client testimonial about the transformative impact of working with Tom and the CCS team. Specific, measurable, credible results.",
            "Placeholder for a second testimonial focused on the coaching methodology. Personal transformation and the business impact that followed.",
          ].map((q, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem",
                border: "1px solid rgba(200,168,130,0.2)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "5rem",
                  color: "rgba(200,168,130,0.15)",
                  position: "absolute",
                  top: "0.5rem",
                  left: "1.5rem",
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>
              <blockquote
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  fontStyle: "italic",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;{q}&rdquo;
              </blockquote>
              <div
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "#c8a882",
                }}
              >
                Client Name
              </div>
              <div style={{ fontSize: "0.75rem", color: "#8a8a8a", marginTop: "0.2rem" }}>
                {i === 0 ? "CEO / CHRO, Company Name" : "VP of People, Company Name"}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="a-team" style={{ padding: m ? "3rem 1.5rem" : "6rem 4rem" }}>
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#c8a882",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Leadership
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          25 years of experience.
          <br />
          <em style={{ fontStyle: "italic", color: "#c8a882" }}>One mission:</em>{" "}
          enabling your success.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "1fr 1fr",
            gap: m ? "2.5rem" : "4rem",
            marginTop: m ? "2.5rem" : "4rem",
          }}
        >
          {(["tom", "brent"] as const).map((key) => {
            const person = teamData[key];
            return (
              <div key={key}>
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid rgba(200,168,130,0.3)",
                      marginBottom: "1.5rem",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      background: "#2a2a2a",
                      border: "1px solid rgba(200,168,130,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                      color: "#c8a882",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {person.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                  }}
                >
                  {person.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#c8a882",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.12em",
                    marginTop: "0.3rem",
                  }}
                >
                  {person.role}
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "#8a8a8a",
                    fontWeight: 300,
                    marginTop: "1rem",
                  }}
                >
                  {person.shortBio}
                </p>
                <button
                  onClick={() => setModalMember(key)}
                  style={{
                    marginTop: "0.75rem",
                    background: "none",
                    border: "none",
                    color: "#c8a882",
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "inherit",
                    fontWeight: 500,
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
      <section style={{ padding: m ? "3rem 1.5rem" : "6rem 4rem", background: "#2a2a2a" }}>
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#c8a882",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Our Values
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: "3.5rem",
            maxWidth: 600,
          }}
        >
          The foundation of{" "}
          <em style={{ fontStyle: "italic", color: "#c8a882" }}>everything</em>{" "}
          we do.
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr 1fr" : "repeat(5, 1fr)",
            gap: 0,
            border: "1px solid rgba(200,168,130,0.2)",
          }}
        >
          {[
            { name: "Courage", desc: "Acting with trust, presence, faith, and vulnerability." },
            { name: "Intention & Quality", desc: "Purposeful work that maximizes impact." },
            { name: "Integrity", desc: "Honesty, transparency, and accountability at our core." },
            { name: "Partnership", desc: "Meaningful, long-term relationships over transactions." },
            { name: "Tenacity", desc: "Resilience, grit, and unwavering passion for success." },
          ].map((v, i) => (
            <div
              key={v.name}
              style={{
                padding: m ? "1.5rem 1rem" : "2.5rem 1.5rem",
                borderRight: m
                  ? i % 2 === 0 ? "1px solid rgba(200,168,130,0.2)" : "none"
                  : i < 4 ? "1px solid rgba(200,168,130,0.2)" : "none",
                borderBottom: m && i < 4 ? "1px solid rgba(200,168,130,0.2)" : "none",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                  color: "#f5f0eb",
                }}
              >
                {v.name}
              </h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  color: "#8a8a8a",
                  fontWeight: 300,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OCEAN IMAGE DIVIDER */}
      <div
        style={{
          height: m ? "200px" : "320px",
          backgroundImage: "url(/TalentManagementImage.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.7))",
          }}
        />
      </div>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: m ? "4rem 1.5rem" : "8rem 4rem",
          background: "linear-gradient(180deg, #0a0a0a 0%, #2a2a2a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1,
            height: 80,
            background: "rgba(200,168,130,0.2)",
          }}
        />
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            color: "#c8a882",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Let&apos;s Start
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Ready to build leaders who build{" "}
          <em style={{ fontStyle: "italic", color: "#c8a882" }}>
            what&apos;s next?
          </em>
        </div>
        <p
          style={{
            fontSize: "1rem",
            color: "#8a8a8a",
            marginTop: "1.5rem",
            fontWeight: 300,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          Every engagement starts with a conversation. Tell us where you are,
          where you need to be, and we&apos;ll show you the path.
        </p>
        <a
          href="mailto:ttriolo@completecareersolutions.com"
          style={{
            display: "inline-block",
            marginTop: "2.5rem",
            padding: "1rem 2.5rem",
            background: "#c8a882",
            color: "#0a0a0a",
            textDecoration: "none",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            fontWeight: 600,
          }}
        >
          Schedule a Discovery Call
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: m ? "2rem 1.5rem" : "3rem 4rem",
          borderTop: "1px solid rgba(200,168,130,0.2)",
          display: "flex",
          flexDirection: m ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: m ? "1rem" : undefined,
          textAlign: m ? "center" : undefined,
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            color: "#8a8a8a",
            letterSpacing: "0.08em",
          }}
        >
          &copy; 2026 Complete Career Solutions &middot; Austin, Texas &middot;
          (512) 579-1819
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["LinkedIn", "Privacy", "Contact"].map((link) => (
            <a
              key={link}
              href={
                link === "Contact"
                  ? "mailto:ttriolo@completecareersolutions.com"
                  : "#"
              }
              style={{
                color: "#8a8a8a",
                textDecoration: "none",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
              }}
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
