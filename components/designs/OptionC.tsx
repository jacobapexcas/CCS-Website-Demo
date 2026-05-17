"use client";

import { useState } from "react";
import Image from "next/image";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";
import useIsMobile from "@/hooks/useIsMobile";

/* Option C — Full Website
   Multi-page version with tab navigation (Home, Coaching, Consulting, Talent, AI, About, Contact) */

/* Brand-aligned boutique palette
   Primary: CCS Navy #1B2838 (logo color)
   Background: Warm cream #F8F4ED
   Accent: Refined bronze #B07C42 (sophisticated, gold-adjacent — replaces the
     bright #E8943A logo orange for editorial use)
   Subtle: Muted teal #4A7378 reserved for rare highlights
   Goal: Bain/McKinsey-style boutique advisory feel — restrained, executive,
   warm without being playful. */
const css = {
  bg: "#F8F4ED",
  surface: "#FFFFFF",
  surfaceWarm: "#FCF9F3",
  ink: "#0F1820",
  inkSoft: "#3A4554",
  muted: "#8A93A0",
  // Primary navy (legacy "terracotta" key stays for diff-minimal refactor — but the color is now navy)
  terracotta: "#1B2838",
  terracottaLight: "rgba(27,40,56,0.06)",
  terracottaMid: "rgba(27,40,56,0.18)",
  // Bronze accent — replaces sage and gold
  sage: "#B07C42",
  sageLight: "rgba(176,124,66,0.08)",
  gold: "#B07C42",
  goldLight: "rgba(176,124,66,0.10)",
  // Navy emphasis variants
  navy: "#1B2838",
  navyLight: "rgba(27,40,56,0.06)",
  // Refined hairline border
  warmBorder: "rgba(27,40,56,0.10)",
  warmBorderStrong: "rgba(27,40,56,0.16)",
};

type Page = "home" | "coaching" | "consulting" | "talent" | "ai" | "about" | "contact";

function PageHero({ overline, title, desc, cta, bgImage, m }: { overline: string; title: React.ReactNode; desc: string; cta?: { label: string; onClick: () => void }; bgImage?: string; m: boolean }) {
  return (
    <section style={{ padding: m ? "5rem 0 2rem" : "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
      {bgImage ? (
        <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, opacity: 0.2, maskImage: "linear-gradient(to left, rgba(0,0,0,1), transparent)" }} />
      ) : (
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: `radial-gradient(ellipse at 60% 40%, ${css.terracottaLight} 0%, transparent 70%)`, zIndex: 0 }} />
      )}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>{overline}</div>
        <h1 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 400, lineHeight: 1.15, maxWidth: 650 }}>{title}</h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 640, marginTop: "1.5rem" }}>{desc}</p>
        {cta && (
          <button onClick={cta.onClick} style={{ marginTop: "2rem", display: "inline-block", padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.terracotta, color: "white", border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 20px -8px rgba(27,40,56,0.4)" }}>
            {cta.label}
          </button>
        )}
      </div>
    </section>
  );
}

function FeatureGrid({ items, m }: { items: { title: string; desc: string }[]; m: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
      {items.map((item) => (
        <div key={item.title} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}` }}>
          <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</h4>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function CtaBanner({ overline, title, desc, onClick, m }: { overline: string; title: React.ReactNode; desc: string; onClick: () => void; m: boolean }) {
  return (
    <section style={{ textAlign: "center", padding: m ? "2.5rem 1rem" : "5rem 2rem", background: css.surface, borderRadius: 20, margin: m ? "1rem" : "2rem" }}>
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>{overline}</div>
      <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, maxWidth: 550, margin: "0 auto" }}>{title}</div>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 640, margin: "1rem auto 0", textAlign: "center" }}>{desc}</p>
      <button onClick={onClick} style={{ marginTop: "2rem", padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.terracotta, color: "white", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Schedule a Discovery Call</button>
    </section>
  );
}

/* ---- PAGES ---- */

function HomePage({ nav, m }: { nav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: m ? "3rem" : "5rem", position: "relative", overflow: "hidden" }}>
        {/* Austin skyline backdrop — masked into the top-right quadrant */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: m ? "100%" : "55%",
            height: "100%",
            zIndex: 0,
            opacity: m ? 0.18 : 0.32,
            backgroundImage: "url(/HomePageBackground.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            maskImage: m
              ? "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 100%)"
              : "linear-gradient(270deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: m
              ? "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 100%)"
              : "linear-gradient(270deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Warm cream wash so the navy text remains crisp over the image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(248,244,237,0.95) 0%, rgba(248,244,237,0.7) 45%, rgba(248,244,237,0.4) 100%)",
            zIndex: 0,
          }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-up animate-fade-up-1" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.45rem 1rem", background: css.terracottaLight, borderRadius: 100, fontSize: "0.76rem", fontWeight: 600, color: css.sage, marginBottom: "2rem" }}>
            <span style={{ width: 6, height: 6, background: css.terracotta, borderRadius: "50%", display: "inline-block" }} />
            Driving Impactful Change Since 2010 · Austin, Texas
          </div>
          <h1 className="animate-fade-up animate-fade-up-2" style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", fontWeight: 400, lineHeight: 1.12, maxWidth: 820 }}>
            Empowering Organizations through <strong style={{ fontWeight: 600, color: css.sage, textDecoration: "underline", textDecorationColor: css.terracottaMid, textUnderlineOffset: "5px", textDecorationThickness: "3px" }}>Strategic Consulting.</strong>
          </h1>
          <p className="animate-fade-up animate-fade-up-3" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 720, marginTop: "1.5rem" }}>
            At Complete Career Solutions, we specialize in driving impactful change that resonates throughout entire organizations, always rooted in the power of the individual. Our mission is to guide you in surpassing your business objectives.
          </p>
          <p className="animate-fade-up animate-fade-up-3" style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 720, marginTop: "1rem" }}>
            Positioned uniquely as an organizational consulting firm, we prioritize four key pillars of success: <strong style={{ fontWeight: 600, color: css.ink }}>Executive Coaching, Leadership Development, Operational Consulting,</strong> and <strong style={{ fontWeight: 600, color: css.ink }}>Talent Management</strong>, with AI Enablement now woven through every engagement. We empower superior performance through your most valuable asset: your people.
          </p>
          <div className="animate-fade-up animate-fade-up-4" style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button onClick={() => nav("contact")} style={{ padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.terracotta, color: "white", border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 20px -8px rgba(27,40,56,0.4)" }}>Schedule a Discovery Call</button>
            <button onClick={() => nav("coaching")} style={{ padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.surface, color: css.ink, border: `1px solid ${css.warmBorder}`, cursor: "pointer", fontFamily: "inherit" }}>See How We Work</button>
          </div>
          <div className="animate-fade-up animate-fade-up-5" style={{ display: "flex", gap: "3rem", marginTop: "4rem", paddingTop: "2.5rem", borderTop: `1px solid ${css.warmBorder}` }}>
            {[{ num: "25+", label: "Years Leadership Experience" }, { num: "6", label: "Industries Served" }, { num: "100%", label: "Referral-Driven Growth" }].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.4rem", fontWeight: 700 }}>{t.num}</div>
                <div style={{ fontSize: "0.75rem", color: css.muted }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>What We Do</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>
            Four integrated pillars that meet leaders <strong style={{ fontWeight: 600 }}>where they are.</strong>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: "1.5rem", marginTop: "3rem" }}>
            {[
              { num: "01", page: "coaching" as Page, title: "Executive Coaching", desc: "Enhance leadership skills and maximize potential through personalized coaching programs tailored to your organization's needs." },
              { num: "02", page: "consulting" as Page, title: "Consulting", desc: "Optimize your business operations and processes for efficiency and profitability under expert guidance." },
              { num: "03", page: "talent" as Page, title: "Talent Management", desc: "Foster a culture of strong leadership and professional growth with our tailored development solutions." },
              { num: "04", page: "ai" as Page, title: "AI Solutions", desc: "Build confident leaders in the age of AI through readiness assessments, secure workspace setup, and ongoing enablement." },
            ].map((p) => (
              <div key={p.title} onClick={() => nav(p.page)} style={{ background: css.surface, borderRadius: 4, padding: "2.5rem", border: `1px solid ${css.warmBorder}`, cursor: "pointer", transition: "all 0.4s ease", position: "relative", overflow: "hidden" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = css.navy; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 18px 50px -25px rgba(27,40,56,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = css.warmBorder; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.85rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1rem", color: css.sage, fontWeight: 500, fontStyle: "italic", letterSpacing: "0.02em" }}>{p.num}</span>
                  <span style={{ width: "32px", height: "1px", background: css.sage, opacity: 0.5 }} />
                  <span style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.muted, fontWeight: 600 }}>Service Line</span>
                </div>
                <h3 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.85rem", color: css.navy, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: css.inkSoft, margin: 0 }}>{p.desc}</p>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: `1px solid ${css.warmBorder}`, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: css.sage, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Learn More <span style={{ fontSize: "0.9rem", lineHeight: 1 }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnering for Success */}
      <section style={{ padding: m ? "3rem 0" : "6rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1.4fr", gap: m ? "2rem" : "5rem", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Partnering for Success</div>
            <h2 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, color: css.ink, margin: 0 }}>
              Driving Impactful Change <strong style={{ fontWeight: 600 }}>Since 2010.</strong>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, margin: 0 }}>
              With a focus on intention, integrity, and excellence, we build lasting partnerships that foster growth and resilience. By partnering with us, you gain access to a wealth of knowledge and trusted advisors committed to driving your business forward. Our unique approach will ensure your organization stays well-positioned for success in an ever-changing market.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ background: css.ink, color: css.bg, borderRadius: 20, padding: m ? "2rem" : "4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Impact</div>
            <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Leaders across six industries <strong style={{ fontWeight: 600 }}>trust CCS.</strong></div>
            <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
              {[{ num: "15+", label: "Years in Practice" }, { num: "6", label: "Industry Verticals" }, { num: "25+", label: "Yrs Sr. Leadership" }, { num: "100%", label: "Referral-Driven" }].map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "1.5rem", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "2.2rem", fontWeight: 600, color: css.sage }}>{s.num}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(250,248,245,0.55)", marginTop: "0.3rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: "rgba(250,248,245,0.35)", textAlign: "center" }}>
              Industries: Technology · Financial Services · Medical Devices · Professional Services · Consumer Products · Commercial Development
            </div>
          </div>
        </div>
      </section>

      <CtaBanner m={m} overline="Let's Start" title={<>Ready to build leaders who build <strong style={{ fontWeight: 600 }}>what&apos;s next?</strong></>} desc="Every engagement starts with a conversation. Tell us where you are and where you need to be, and we'll map the path together." onClick={() => nav("contact")} />
    </>
  );
}

function CoachingPage({ nav, m }: { nav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <PageHero m={m} overline="Executive Coaching" title={<>Unlock the Potential of <strong style={{ fontWeight: 600, color: css.sage }}>Executive Coaching.</strong></>} desc="Experience a transformative journey with our Executive coaching services, designed to empower leaders to excel in the face of today's challenges and capitalize on future opportunities within their organizations. Our expert coaches leverage a diverse range of assessment tools and blend established methodologies with a personalized approach to cater to the unique needs, expectations, and preferences of each leader." cta={{ label: "Start a Coaching Engagement", onClick: () => nav("contact") }} bgImage="/ExecutiveCoachingImage.jpg" />

      {/* Outcomes */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Coaching Outcomes</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>This powerful fusion equips us with unparalleled capabilities to <strong style={{ fontWeight: 600 }}>elevate leadership effectiveness.</strong></div>
          <FeatureGrid m={m} items={[
            { title: "Accelerated Leadership Impact", desc: "Propel your leadership journey forward by honing the mindsets and skillsets crucial for success." },
            { title: "Enhanced Communication Skills", desc: "Cultivate more impactful communication techniques to engage effectively with your team and stakeholders." },
            { title: "Elevated Executive Presence", desc: "Develop a commanding executive presence that garners respect and inspires confidence." },
            { title: "Heightened Self-Awareness", desc: "Gain deeper insights into your strengths, weaknesses, and blind spots, fostering personal growth and resilience." },
          ]} />
        </div>
      </section>

      {/* Our Approach — Inside-out / Outside-in */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Our Approach</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "2rem" }}>
            Integrating <strong style={{ fontWeight: 600 }}>&ldquo;inside-out&rdquo;</strong> and <strong style={{ fontWeight: 600 }}>&ldquo;outside-in&rdquo;</strong> coaching.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ padding: "2rem", background: css.bg, borderRadius: 12, borderTop: `3px solid ${css.terracotta}` }}>
              <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.6rem" }}>&ldquo;Inside-out&rdquo; Coaching</h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: css.inkSoft, margin: 0 }}>Delves into personal traits and motivations, enabling leaders to align their goals with their core beliefs and values.</p>
            </div>
            <div style={{ padding: "2rem", background: css.bg, borderRadius: 12, borderTop: `3px solid ${css.sage}` }}>
              <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.6rem" }}>&ldquo;Outside-in&rdquo; Coaching</h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: css.inkSoft, margin: 0 }}>Focuses on organizational objectives, providing leaders with a holistic understanding of success criteria and how they are perceived by others.</p>
            </div>
          </div>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "2rem", maxWidth: 820 }}>
            By harmonizing these dual perspectives, we empower leaders to excel on personal, interpersonal, and organizational levels, driving holistic transformation and performance enhancement.
          </p>
        </div>
      </section>

      {/* Successor and Onboarding Coaching */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Specialized Program</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Successor & <strong style={{ fontWeight: 600 }}>Onboarding Coaching.</strong></div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "1.5rem", maxWidth: 820 }}>
            Our tailored successor and onboarding coaching programs are meticulously crafted to accelerate performance and amplify the impact of new leaders during their critical initial 100 days. Whether navigating a new organizational landscape or stepping into a recent promotion, our coaching is custom-built for each leader, addressing key organizational challenges and paving the way for success.
          </p>
        </div>
      </section>

      {/* Executive Team Coaching — Leadership Team Development content */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Executive Team Coaching</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Unlocking <strong style={{ fontWeight: 600 }}>High Performance.</strong></div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "1.5rem", maxWidth: 820 }}>
            At CCS, we understand that executive leadership teams are the driving force behind achieving exceptional results. A high-performance leadership team doesn&apos;t just happen; it is a deliberate effort that requires the collective commitment of every team member. In an effective team, each leader is aligned with their role, possesses clear goals, and understands what is expected of them.
          </p>
          <div style={{ marginTop: "2rem", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: css.muted, fontWeight: 600 }}>Key Offerings</div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: "1rem", marginTop: "1rem" }}>
            {[
              { title: "Cohesive Alignment", desc: "Our coaching sessions create a space for executive teams to align on goals, strategies, and stakeholder perceptions, fostering a united front." },
              { title: "Reflective Dialogue", desc: "Through guided reflection and open dialogue, team members gain insights into what works well and what impedes effectiveness, driving continuous improvement." },
              { title: "Enhanced Relationships", desc: "We facilitate the development of stronger relationships, trust, and connectedness among team members, leading to greater team effectiveness." },
              { title: "Learning and Development", desc: "Team members learn and grow together, with a direct impact on organizational success and performance." },
              { title: "Constructive Communication", desc: "Our coaching encourages constructive communication, effective conflict resolution, and successful meetings that drive results and foster a positive team dynamic." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", borderRadius: 12, background: css.bg, border: `1px solid ${css.warmBorder}` }}>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</h4>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner m={m} overline="Get Started" title={<>What leadership challenge are your executives <strong style={{ fontWeight: 600 }}>facing today?</strong></>} desc="Let's explore how coaching can create measurable leadership impact." onClick={() => nav("contact")} />
    </>
  );
}

function ConsultingPage({ nav, m }: { nav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <PageHero m={m} overline="Consulting · Est. 2010" title={<>Human Capital Strategy <strong style={{ fontWeight: 600, color: css.sage }}>& Solutions.</strong></>} desc="In today's fast-paced business landscape, disruption is inevitable. From digitalization to remote work arrangements, organizations are facing numerous challenges that demand innovative solutions. At Complete Career Solutions Consulting (CCS), we specialize in Human Capital strategies and solutions that empower leaders to navigate disruption effectively. Our goal is to help you drive transformation, elevate the workforce experience, and enhance the capabilities of your leadership team." cta={{ label: "Start a Consulting Engagement", onClick: () => nav("contact") }} />
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Our Consulting Offerings</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Embrace disruption <strong style={{ fontWeight: 600 }}>with confidence.</strong></div>
          <FeatureGrid m={m} items={[
            { title: "Outcome-Driven Human Capital Solutions", desc: "We focus on outcomes, not just outputs, to redefine the possibilities of work. Our approach involves reimagining tasks that can be automated, optimizing workforce allocation, and reshaping where and how work is performed." },
            { title: "Flexible Human Capital Operations", desc: "We assist in designing, building, implementing, and maintaining flexible human capital operations that align with your strategic objectives. Our goal is to support agile ways of working that drive business results." },
            { title: "Digital Human Capital Transformation", desc: "Accelerate your digital transformation journey with our expertise in leveraging new technologies, platforms, and work methodologies. We help you harness the power of digital tools to enhance productivity and efficiency." },
            { title: "Workforce Experience Assessment", desc: "Quickly gauge the sentiment of your workforce and identify opportunities for improvement. We develop comprehensive strategies that drive positive employee experiences and align with the new norms of disruption." },
            { title: "Leadership Capability Development", desc: "Equip your leadership team with the right skills and capabilities to deliver sustainable value to your organization and workforce. We focus on building strong leadership foundations that drive success in dynamic environments." },
          ]} />
        </div>
      </section>
      {/* Who We Work With */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1.4fr", gap: m ? "2rem" : "5rem", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Who We Work With</div>
            <h2 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 400, lineHeight: 1.2, margin: 0 }}>
              Leaders navigating <strong style={{ fontWeight: 600 }}>real change.</strong>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, margin: 0 }}>
              We partner with CEOs, CHROs, COOs, and senior operating leaders inside organizations that are scaling, restructuring, integrating an acquisition, or rebuilding a function after sustained growth. Our engagements concentrate where business performance depends on what people are actually able to do, not just what the strategy slide says.
            </p>
            <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: m ? "1fr 1fr" : "repeat(3, 1fr)", gap: "1.25rem" }}>
              {[
                { label: "Industries", value: "Technology · Financial Services · Medical Devices · Professional Services · Consumer Products · Commercial Development" },
                { label: "Engagement Type", value: "Retained advisory · Project-based · Embedded modules" },
                { label: "Typical Length", value: "30 days to 12 months · Renewable quarter by quarter" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: css.muted, fontWeight: 700, marginBottom: "0.5rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.85rem", lineHeight: 1.6, color: css.ink }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>How We Engage</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>A consulting engagement that <strong style={{ fontWeight: 600 }}>actually transfers.</strong></div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "1.5rem", maxWidth: 820 }}>
            We embed alongside your team rather than handing over a deck. Every engagement is built to leave behind the people, frameworks, and decisions your team needs to keep running the new model after we&apos;ve gone. Knowledge transfer over deliverables. Long-term partnership over deal-by-deal.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { num: "01", title: "Listen", desc: "Stakeholder conversations, current-state mapping, and a candid read on what is actually getting in the way." },
              { num: "02", title: "Design", desc: "A working model your team helps shape, not a 100-page deck. Specific deliverables, specific owners, specific timing." },
              { num: "03", title: "Embed", desc: "We work inside the team, not over them. Senior-led, hands-on, accountable to the same outcomes your leaders are." },
              { num: "04", title: "Transfer", desc: "When we leave, the team owns it. Decisions, cadences, and capability stay behind. No retainer dependency." },
            ].map((step) => (
              <div key={step.num} style={{ padding: "1.75rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}` }}>
                <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: css.sage, marginBottom: "0.5rem" }}>{step.num}</div>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem", color: css.ink }}>{step.title}</h4>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: css.inkSoft, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner m={m} overline="Get Started" title={<>What business processes could benefit from a <strong style={{ fontWeight: 600 }}>fresh perspective?</strong></>} desc="We tailor every engagement to your goals and timeline." onClick={() => nav("contact")} />
    </>
  );
}

function TalentPage({ nav, m }: { nav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <PageHero m={m} overline="Talent Management · CCS Staffing" title={<>The right person, at the right time, for the <strong style={{ fontWeight: 600, color: css.sage }}>right role.</strong></>} desc="At CCS Staffing, we are your strategic partner in achieving talent management excellence. We pride ourselves on being a unique outsourced talent acquisition firm. Our full-desk recruiters focus on more than just filling positions. They aim to find the right person, at the right time, for the right role. Unlike traditional recruitment firms that simply send resumes over the wall, our team of talent acquisition professionals are deeply engaged in every step of the recruitment process. We act as an external talent acquisition arm that functions like an internal staffing team." cta={{ label: "Discuss Your Talent Needs", onClick: () => nav("contact") }} bgImage="/TalentManagementImage.jpg" />

      {/* Strategic Approach */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "2rem" : "4rem", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Strategic Workforce Development</div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, margin: 0 }}>
              Talent management is the strategic approach to recruiting and developing a workforce that maximizes productivity and retains top talent for the long term. When executed effectively, this process enhances overall business performance and ensures competitiveness in the market.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, marginTop: "1.25rem" }}>
              Our talent acquisition professionals also leverage the expertise of CCS coaches to assess a candidate&apos;s long-term viability and potential for success at your company before submission. This additional layer of validation ensures that we provide you with the best possible candidates for long-term success.
            </p>
          </div>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Client Engagement</div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, margin: 0 }}>
              Client engagement is our priority. We strive to understand every detail of your talent management goals and the objectives of your hiring managers. This client-first approach enables our recruiters to source, assess, and evaluate candidates thoroughly before presenting them to you.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, marginTop: "1.25rem" }}>
              As a result, you receive a selection of qualified candidates who meet or exceed the job description&apos;s requirements and possess the qualities of a successful employee within your organization.
            </p>
          </div>
        </div>
      </section>
      {/* What We Deliver */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>What We Deliver</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>The CCS Staffing <strong style={{ fontWeight: 600 }}>difference.</strong></div>
          <FeatureGrid m={m} items={[
            { title: "Outsourced Talent Acquisition", desc: "We function as your embedded recruitment arm. Full-desk recruiters involved in every step from sourcing through onboarding, not just resume forwarding." },
            { title: "Executive Search", desc: "Retained search for senior leadership roles. We sit down with candidates before they reach you and surface fit signals that a screen call won't surface." },
            { title: "Coaching-Informed Validation", desc: "Our CCS coaches assess each candidate's long-term viability and potential for success at your company before submission. The gaps a resume hides in week one, surfaced before week one." },
            { title: "Workforce Development", desc: "Beyond the hire: pipeline planning, candidate care, and the cadences that turn one good hire into a repeatable engine." },
          ]} />
        </div>
      </section>

      {/* Our Process */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Our Process</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>How a CCS Staffing engagement <strong style={{ fontWeight: 600 }}>actually runs.</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(5, 1fr)", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { num: "01", title: "Discovery", desc: "We sit down with hiring managers to understand the role, the team, and the culture beyond the JD." },
              { num: "02", title: "Sourcing", desc: "Our recruiters work the full desk: passive candidates, network, and active pipeline simultaneously." },
              { num: "03", title: "Coaching Assessment", desc: "Our CCS coaches assess each shortlisted candidate for long-term viability, not just role fit." },
              { num: "04", title: "Submission", desc: "You receive a curated slate of qualified candidates who meet or exceed the JD and possess the qualities of a successful hire at your company." },
              { num: "05", title: "Close & Onboard", desc: "We support offer construction, candidate close conversations, and first-100-day onboarding alignment." },
            ].map((step) => (
              <div key={step.num} style={{ padding: "1.5rem 1.25rem", borderRadius: 12, background: css.bg, border: `1px solid ${css.warmBorder}` }}>
                <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.25rem", fontWeight: 700, color: css.sage, marginBottom: "0.4rem" }}>{step.num}</div>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem", color: css.ink }}>{step.title}</h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: css.inkSoft, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner m={m} overline="Partner with CCS Staffing" title={<>What would an ideal recruitment partner look like <strong style={{ fontWeight: 600 }}>for your team?</strong></>} desc="At CCS Staffing, we look forward to partnering with you to help you achieve your business goals through effective talent management strategies." onClick={() => nav("contact")} />
    </>
  );
}

function AIPage({ nav, m }: { nav: (p: Page) => void; m: boolean }) {
  return (
    <>
      <PageHero m={m} overline="AI Solutions" title={<>Building confident leaders in the <strong style={{ fontWeight: 600, color: css.sage }}>age of AI.</strong></>} desc="CCS helps teams use AI confidently, securely, and strategically, to save time, communicate clearly, and make smarter business decisions." cta={{ label: "Explore AI Enablement", onClick: () => nav("contact") }} />
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Our Framework</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}><strong style={{ fontWeight: 600 }}>Assess → Implement → Optimize</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              { num: "01", title: "Assess", desc: "Evaluate readiness, workflows, and leadership comfort with AI tools. Deliverables include an AI Readiness Report and Opportunity Map." },
              { num: "02", title: "Implement", desc: "Deploy secure AI workspaces and core productivity tools. Includes tool setup, prompt libraries, and role-based access planning." },
              { num: "03", title: "Optimize", desc: "Deliver training and long-term enablement for sustainable adoption. AI Leadership Workshops and ongoing learning pathways." },
            ].map((phase) => (
              <div key={phase.num} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}`, textAlign: "center" }}>
                <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "2.5rem", fontWeight: 700, color: css.sage, opacity: 0.2, marginBottom: "0.5rem" }}>{phase.num}</div>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>{phase.title}</h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: css.inkSoft }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Phase Deliverables */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>What You Get</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Tangible deliverables, <strong style={{ fontWeight: 600 }}>not slideware.</strong></div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "1.5rem", maxWidth: 820 }}>
            Each phase produces working artifacts your team uses immediately, not deliverables that sit on a shared drive. The goal is leaders who feel confident with AI before the engagement ends.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)", gap: "1.25rem", marginTop: "2.5rem" }}>
            {[
              {
                phase: "Assess",
                items: [
                  "AI Readiness Report",
                  "Risk & Governance Checklist",
                  "Opportunity Map (top 10 use cases ranked by impact and effort)",
                  "Leadership Comfort Survey",
                ],
              },
              {
                phase: "Implement",
                items: [
                  "Secure AI workspace setup (ChatGPT Teams, Microsoft Copilot, or equivalent)",
                  "Role-based access plan",
                  "Prompt library tailored to your operating context",
                  "Privacy configuration and data governance",
                ],
              },
              {
                phase: "Optimize",
                items: [
                  "AI Leadership Essentials Workshop (90 minutes)",
                  "AI Prompts for Leaders guide",
                  "Quarterly business review with usage analytics",
                  "Ongoing learning pathways for the team",
                ],
              },
            ].map((p) => (
              <div key={p.phase} style={{ padding: "2rem", borderRadius: 12, background: css.bg, border: `1px solid ${css.warmBorder}` }}>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem", color: css.sage }}>{p.phase}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.6rem" }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.88rem", color: css.ink, lineHeight: 1.6, display: "flex", gap: "0.6rem" }}>
                      <span style={{ width: 4, height: 4, background: css.terracotta, borderRadius: "50%", marginTop: "0.55rem", flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1.2fr", gap: m ? "2rem" : "4rem", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Who It&apos;s For</div>
            <h3 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 400, lineHeight: 1.25, marginBottom: "1.25rem" }}>
              Senior leaders who want their team focused on the work AI <strong style={{ fontWeight: 600 }}>can&apos;t replace.</strong>
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: css.inkSoft, margin: 0 }}>
              The leaders pulling ahead with AI aren&apos;t the ones with the best technology. They&apos;re the ones who decided what they want their teams doing instead. We coach through that question first, then deploy the tools.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { title: "CHROs and HR leaders", desc: "Looking to give the team back the hours they spend on summaries, drafts, and follow-ups, without compromising governance or candidate trust." },
              { title: "COOs and operating leaders", desc: "Mapping where AI can compress cycle time on internal processes (performance management, planning, reporting) before scaling broadly." },
              { title: "Sales and revenue leaders", desc: "Looking for AI that supports the rep without replacing the relationship: call analysis, deal review, prep without the busywork." },
            ].map((p) => (
              <div key={p.title} style={{ padding: "1.5rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}` }}>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, color: css.ink, marginBottom: "0.4rem" }}>{p.title}</h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: css.inkSoft, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner m={m} overline="Get Started" title={<>What role does AI currently play in <strong style={{ fontWeight: 600 }}>your organization?</strong></>} desc="Whether you're just starting or scaling existing AI initiatives, we'll meet you where you are." onClick={() => nav("contact")} />
    </>
  );
}

function AboutPage({ nav, setModal, m }: { nav: (p: Page) => void; setModal: (member: "tom" | "brent") => void; m: boolean }) {
  return (
    <>
      <PageHero m={m} overline="About CCS · Est. 2010" title={<>A dynamic blend of seasoned experts and <strong style={{ fontWeight: 600, color: css.sage }}>innovative thinkers.</strong></>} desc="Our team is dedicated to delivering tailored solutions that drive success. With a diverse range of backgrounds and specialties, we bring a wealth of knowledge and a fresh perspective to every project. Our collaborative approach ensures that we leverage each team member's unique strengths, fostering an environment of continuous learning and growth. Client-centric and committed to excellence, we pride ourselves on our ability to navigate complex challenges and deliver impactful results that exceed expectations." />

      {/* Our Story */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1.4fr", gap: m ? "2rem" : "5rem", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Our Story</div>
            <h2 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, margin: 0 }}>
              Built on one principle: <strong style={{ fontWeight: 600 }}>enabling the success of others.</strong>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: css.inkSoft, margin: 0, marginBottom: "1.5rem" }}>
              CCS was founded in 2010 in Austin, Texas. Nearly 25 years of senior-level leadership across technology, professional services, financial services, commercial development, medical devices, and consumer products went into the way we work today, and into the team we&apos;ve built around it.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: css.inkSoft, margin: 0, marginBottom: "1.5rem" }}>
              We&apos;re a consulting house. Our point of entry can be coaching, consulting, talent management, or AI enablement. The engagement looks the same once we&apos;re in. We assess the problem, we solve it in a way that fits the moment, and we leave behind the people and capability your team needs to keep running it.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: css.inkSoft, margin: 0 }}>
              Our growth is 100% referral-driven. We self-select the clients we work with, and we&apos;ve built lasting partnerships with leaders across six industries who keep coming back because the work transfers.
            </p>
          </div>
        </div>
      </section>
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Our Values</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>More than words — the <strong style={{ fontWeight: 600 }}>foundation of everything we do.</strong></div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "1.25rem", maxWidth: 820 }}>
            At CCS, our values shape our decisions, guide our actions, and inspire our strategies. We believe in living our values through every interaction and partnership.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(5, 1fr)", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { title: "Courage", desc: "Drives us to embrace trust, stay present-minded, and act with faith and vulnerability." },
              { title: "Intention & Quality", desc: "Ensure that everything we do has purpose, striving to maximize impact." },
              { title: "Integrity", desc: "At the heart of our business. Upholding the highest ethical standards with honesty, transparency, and accountability." },
              { title: "Partnership", desc: "Our commitment to meaningful, long-term relationships with clients, candidates, and collaborators." },
              { title: "Tenacity", desc: "Fuels our competitive spirit, resilience, and unwavering passion for success." },
            ].map((v) => (
              <div key={v.title} style={{ padding: "1.75rem 1.25rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}` }}>
                <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem", color: css.sage }}>{v.title}</h4>
                <p style={{ fontSize: "0.85rem", color: css.inkSoft, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: m ? "0 0 2.5rem" : "0 0 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Leadership</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>25 years of experience. One mission: <strong style={{ fontWeight: 600 }}>enabling your success.</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: "2rem", marginTop: "3rem" }}>
            {(["tom", "brent"] as const).map((key) => {
              const person = teamData[key];
              const colors = key === "tom" ? { bg: css.terracottaLight, accent: css.terracotta } : { bg: css.sageLight, accent: css.sage };
              return (
                <div key={key} style={{ background: css.surface, borderRadius: 20, padding: "2.5rem", border: `1px solid ${css.warmBorder}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.2rem" }}>
                    {person.photo ? (
                      <Image src={person.photo} alt={person.name} width={64} height={64} style={{ borderRadius: 14, objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: 64, height: 64, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Petrona', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, background: colors.bg, color: colors.accent }}>{person.name.split(" ").map((n) => n[0]).join("")}</div>
                    )}
                    <div>
                      <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.2rem", fontWeight: 600 }}>{person.name}</div>
                      <div style={{ fontSize: "0.76rem", color: css.sage, fontWeight: 600, marginTop: "0.1rem" }}>{person.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{person.shortBio}</p>
                  <button onClick={() => setModal(key)} style={{ marginTop: "0.75rem", background: "none", border: "none", color: css.sage, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", padding: 0, fontFamily: "inherit" }}>Read Full Bio &rarr;</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Powerful Partners — trusted external collaborators
          Edit the partners array below to add/remove. Names and short
          descriptions only; full bios live with each partner separately. */}
      <section style={{ padding: m ? "2.5rem 0" : "5rem 0", background: css.surface }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Powerful Partners</div>
          <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Trusted collaborators who <strong style={{ fontWeight: 600 }}>extend what we deliver.</strong></div>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: css.inkSoft, marginTop: "1.25rem", maxWidth: 820, marginBottom: "2.5rem" }}>
            CCS works alongside a small network of independent specialists and partner firms that round out every engagement. Each partner is chosen for fit: culture, craft, and the same outcomes-first standard we hold ourselves to.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)", gap: "1.25rem" }}>
            {(
              [
                {
                  name: "Apex AI",
                  role: "Custom Business Systems",
                  desc: "Partners with CCS to accelerate engagement outcomes through custom business system development. Builds the AI tools, internal workflows, and client-facing infrastructure that turn each strategy into measurable results.",
                  accent: "#2BB4BD",
                  logoBg: "rgba(43,180,189,0.10)",
                  // Stylized "A" triangle, Apex AI brand mark recreated as SVG so the
                  // partner card stays self-contained. To use the real PNG instead,
                  // drop it into public/ and swap this block for an <Image /> tag.
                  logo: (
                    <svg viewBox="0 0 100 100" width="32" height="32" aria-hidden focusable="false">
                      <path
                        d="M 50 10 L 92 90 L 8 90 Z M 50 50 L 72 84 L 28 84 Z"
                        fill="#2BB4BD"
                        fillRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Brainard Strategy",
                  role: "Strategic Consulting Partner",
                  desc: "Extends CCS's executive coaching and organizational design capacity on larger and more complex engagements.",
                  accent: "#C8851A",
                  logoBg: "rgba(245,166,35,0.10)",
                  // Brainard Strategy mark recreated as SVG: bold "BS" letterform
                  // with the firm's double amber-bar signature beneath. Same swap
                  // pattern as Apex AI if a PNG ever needs to take its place.
                  logo: (
                    <svg viewBox="0 0 100 100" width="36" height="36" aria-hidden focusable="false">
                      <text
                        x="50"
                        y="60"
                        textAnchor="middle"
                        fontFamily="'Inter', system-ui, sans-serif"
                        fontSize="42"
                        fontWeight="800"
                        fill="#0F1820"
                        letterSpacing="-2"
                      >
                        BS
                      </text>
                      <rect x="14" y="76" width="72" height="5" fill="#F5A623" />
                      <rect x="14" y="87" width="72" height="5" fill="#F5A623" />
                    </svg>
                  ),
                },
              ] as const
            ).map((partner) => (
              <div key={partner.name} style={{ padding: "2rem", borderRadius: 12, background: css.bg, border: `1px solid ${css.warmBorder}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Petrona', Georgia, serif", fontSize: "1rem", fontWeight: 700, background: partner.logoBg, color: css.navy, letterSpacing: "0.04em" }}>
                    {partner.logo ?? partner.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.1rem", fontWeight: 600, color: css.navy, lineHeight: 1.1 }}>{partner.name}</div>
                    <div style={{ fontSize: "0.72rem", color: partner.accent, fontWeight: 600, marginTop: "0.3rem", letterSpacing: "0.04em" }}>{partner.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft, margin: 0 }}>{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner m={m} overline="Ready to Transform Your Business?" title={<>Let&apos;s partner <strong style={{ fontWeight: 600 }}>for success.</strong></>} desc="Take the first step towards unlocking your business's true potential. Partner with Complete Career Solutions today and embark on a journey towards sustainable growth and success." onClick={() => nav("contact")} />
    </>
  );
}

function ContactPage({ m }: { m: boolean }) {
  return (
    <>
      <PageHero m={m} overline="Contact Us" title={<>Partner <strong style={{ fontWeight: 600, color: css.sage }}>With Us.</strong></>} desc="We strategically partner with companies and individuals whose values align with ours. We invite you to reach out and explore how we can achieve success together." />
      <section style={{ padding: m ? "0 0 2.5rem" : "0 0 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: m ? "2rem" : "4rem" }}>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Reach Out</div>
              <div style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "2rem" }}>We&apos;d love to hear <strong style={{ fontWeight: 600 }}>from you.</strong></div>
              {[
                { name: "Tom Triolo — CEO & Executive Coach", email: "ttriolo@completecareersolutions.com", scope: "Executive Coaching · Consulting · AI Solutions" },
                { name: "Brent Triolo — Co-Founder, CCS Staffing", email: "brent.triolo@completecareersolutions.com", scope: "Talent Management · Executive Search" },
                { name: "CCS Main Office", email: "", scope: "555 E 5th St\nAustin, TX 78701-4157, United States\n+1 (512) 579-1819" },
              ].map((c) => (
                <div key={c.name} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}`, marginBottom: "1rem" }}>
                  <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>{c.name}</h4>
                  {c.email && <p style={{ fontSize: "0.9rem", color: css.inkSoft }}><a href={`mailto:${c.email}`} style={{ color: css.sage, textDecoration: "none", fontWeight: 600 }}>{c.email}</a></p>}
                  <p style={{ fontSize: "0.9rem", color: css.inkSoft, lineHeight: 1.6, whiteSpace: "pre-line" }}>{c.scope}</p>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.sage, marginBottom: "1rem", fontWeight: 700 }}>Discovery Questions</div>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, marginBottom: "1.5rem" }}>Here&apos;s what a first conversation typically covers:</p>
              {[
                { title: "For Executive Coaching", desc: "What leadership challenges are your executives currently facing? How do you currently support the growth of your senior leaders?" },
                { title: "For Talent Management", desc: "What are your biggest challenges in hiring and retaining talent? What would an ideal recruitment partner look like?" },
                { title: "For AI Solutions", desc: "What role does AI currently play in your organization? Are there specific processes that could benefit from AI?" },
              ].map((q) => (
                <div key={q.title} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}`, marginBottom: "1rem" }}>
                  <h4 style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>{q.title}</h4>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function OptionC() {
  const [page, setPage] = useState<Page>("home");
  const [modal, setModal] = useState<"tom" | "brent" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const m = useIsMobile();
  const nav = (p: Page) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const pages: Record<Page, string> = { home: "Home", coaching: "Coaching", consulting: "Consulting", talent: "Talent", ai: "AI Solutions", about: "About", contact: "Book a Call" };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: css.bg, color: css.ink, minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: m ? "0.75rem 1rem" : "1rem 3rem", background: "rgba(250,248,245,0.92)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${css.warmBorder}` }}>
        <div onClick={() => nav("home")} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
          <Image src="/logo.png" alt="CCS" width={32} height={32} style={{ borderRadius: 8 }} />
          {!m && <span style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "1.1rem", fontWeight: 600 }}>Complete Career Solutions</span>}
          {m && <span style={{ fontFamily: "'Petrona', Georgia, serif", fontSize: "0.9rem", fontWeight: 600 }}>CCS</span>}
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
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)" : i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
        <div style={{ display: m ? "none" : "flex", gap: "0.3rem", alignItems: "center" }}>
          {(Object.keys(pages) as Page[]).map((key) => (
            <button key={key} onClick={() => nav(key)} style={{
              background: key === "contact" ? css.terracotta : page === key ? css.terracottaLight : "none",
              border: "none", cursor: "pointer", padding: m ? "0.4rem 0.6rem" : "0.5rem 1rem", fontSize: m ? "0.72rem" : "0.82rem",
              fontWeight: page === key || key === "contact" ? 600 : 500,
              color: key === "contact" ? "white" : page === key ? css.terracotta : css.inkSoft,
              borderRadius: 8, transition: "all 0.2s", fontFamily: "inherit",
              marginLeft: key === "contact" ? "0.5rem" : 0,
            }}>
              {pages[key]}
            </button>
          ))}
        </div>
      </nav>

      {m && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "52px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(250,248,245,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${css.warmBorder}`,
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {(Object.keys(pages) as Page[]).map((key) => (
            <button
              key={key}
              onClick={() => { nav(key); setMenuOpen(false); }}
              style={{
                background: page === key ? css.terracottaLight : "transparent",
                border: "none",
                padding: "0.75rem 1rem",
                fontSize: "0.88rem",
                fontWeight: page === key ? 600 : 500,
                color: key === "contact" ? css.terracotta : css.ink,
                textAlign: "left",
                cursor: "pointer",
                borderRadius: 8,
                fontFamily: "inherit",
              }}
            >
              {pages[key]}
            </button>
          ))}
        </div>
      )}

      {/* Page Content */}
      {page === "home" && <HomePage nav={nav} m={m} />}
      {page === "coaching" && <CoachingPage nav={nav} m={m} />}
      {page === "consulting" && <ConsultingPage nav={nav} m={m} />}
      {page === "talent" && <TalentPage nav={nav} m={m} />}
      {page === "ai" && <AIPage nav={nav} m={m} />}
      {page === "about" && <AboutPage nav={nav} setModal={setModal} m={m} />}
      {page === "contact" && <ContactPage m={m} />}

      {/* FOOTER */}
      <footer style={{ padding: m ? "1.5rem 1rem" : "2rem 3rem", display: "flex", flexDirection: m ? "column" : "row", justifyContent: "space-between", alignItems: m ? "center" : "center", gap: m ? "1rem" : 0, borderTop: `1px solid ${css.warmBorder}`, marginTop: "2rem" }}>
        <div style={{ fontSize: "0.72rem", color: css.muted, textAlign: m ? "center" : undefined }}>&copy; 2026 Complete Career Solutions &middot; Austin, Texas &middot; (512) 579-1819</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["LinkedIn", "Privacy", "Email"].map((l) => (
            <a key={l} href={l === "Email" ? "mailto:ttriolo@completecareersolutions.com" : "#"} style={{ fontSize: "0.72rem", color: css.muted, textDecoration: "none", fontWeight: 500 }}>{l}</a>
          ))}
        </div>
      </footer>

      <TeamModal member={modal} onClose={() => setModal(null)} />
    </div>
  );
}
