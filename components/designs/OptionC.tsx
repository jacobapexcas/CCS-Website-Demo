"use client";

import { useState } from "react";
import TeamModal from "@/components/TeamModal";
import { teamData } from "@/components/TeamModal";

/* Option C — Full Website
   Multi-page version with tab navigation (Home, Coaching, Consulting, Talent, AI, About, Contact) */

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
  gold: "#c49a3e",
  goldLight: "rgba(196,154,62,0.08)",
  navy: "#4a6fa5",
  navyLight: "rgba(74,111,165,0.08)",
  warmBorder: "rgba(26,26,26,0.08)",
};

type Page = "home" | "coaching" | "consulting" | "talent" | "ai" | "about" | "contact";

function PageHero({ overline, title, desc, cta, bgImage }: { overline: string; title: React.ReactNode; desc: string; cta?: { label: string; onClick: () => void }; bgImage?: string }) {
  return (
    <section style={{ padding: "8rem 0 4rem", position: "relative", overflow: "hidden" }}>
      {bgImage ? (
        <div style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, opacity: 0.2, maskImage: "linear-gradient(to left, rgba(0,0,0,1), transparent)" }} />
      ) : (
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: `radial-gradient(ellipse at 60% 40%, ${css.terracottaLight} 0%, transparent 70%)`, zIndex: 0 }} />
      )}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>{overline}</div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 400, lineHeight: 1.15, maxWidth: 650 }}>{title}</h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 640, marginTop: "1.5rem" }}>{desc}</p>
        {cta && (
          <button onClick={cta.onClick} style={{ marginTop: "2rem", display: "inline-block", padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.terracotta, color: "white", border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 12px rgba(196,93,62,0.25)" }}>
            {cta.label}
          </button>
        )}
      </div>
    </section>
  );
}

function FeatureGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
      {items.map((item) => (
        <div key={item.title} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}` }}>
          <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</h4>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function CtaBanner({ overline, title, desc, onClick }: { overline: string; title: React.ReactNode; desc: string; onClick: () => void }) {
  return (
    <section style={{ textAlign: "center", padding: "5rem 2rem", background: css.surface, borderRadius: 20, margin: "2rem" }}>
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>{overline}</div>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, maxWidth: 550, margin: "0 auto" }}>{title}</div>
      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 640, margin: "1rem auto 0", textAlign: "center" }}>{desc}</p>
      <button onClick={onClick} style={{ marginTop: "2rem", padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.terracotta, color: "white", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Schedule a Discovery Call</button>
    </section>
  );
}

/* ---- PAGES ---- */

function HomePage({ nav }: { nav: (p: Page) => void }) {
  return (
    <>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: 80, right: 0, width: "45%", height: "85%", background: `radial-gradient(ellipse at 70% 30%, ${css.terracottaLight} 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, ${css.sageLight} 0%, transparent 60%)`, borderRadius: "0 0 0 40%", zIndex: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-up animate-fade-up-1" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.45rem 1rem", background: css.terracottaLight, borderRadius: 100, fontSize: "0.76rem", fontWeight: 600, color: css.terracotta, marginBottom: "2rem" }}>
            <span style={{ width: 6, height: 6, background: css.terracotta, borderRadius: "50%", display: "inline-block" }} />
            Austin, Texas · Partnering with Leaders Since 2010
          </div>
          <h1 className="animate-fade-up animate-fade-up-2" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", fontWeight: 400, lineHeight: 1.12, maxWidth: 780 }}>
            Your people are the strategy. We help you <strong style={{ fontWeight: 600, color: css.terracotta, textDecoration: "underline", textDecorationColor: css.terracottaMid, textUnderlineOffset: "5px", textDecorationThickness: "3px" }}>prove it.</strong>
          </h1>
          <p className="animate-fade-up animate-fade-up-3" style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, maxWidth: 640, marginTop: "1.5rem" }}>
            CCS partners with CEOs, CHROs, and executive teams to transform leadership performance through coaching, human capital consulting, talent management, and AI-powered enablement.
          </p>
          <div className="animate-fade-up animate-fade-up-4" style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button onClick={() => nav("contact")} style={{ padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.terracotta, color: "white", border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 12px rgba(196,93,62,0.25)" }}>Schedule a Discovery Call</button>
            <button onClick={() => nav("coaching")} style={{ padding: "0.85rem 2rem", fontSize: "0.88rem", fontWeight: 600, borderRadius: 8, background: css.surface, color: css.ink, border: `1px solid ${css.warmBorder}`, cursor: "pointer", fontFamily: "inherit" }}>See How We Work</button>
          </div>
          <div className="animate-fade-up animate-fade-up-5" style={{ display: "flex", gap: "3rem", marginTop: "4rem", paddingTop: "2.5rem", borderTop: `1px solid ${css.warmBorder}` }}>
            {[{ num: "25+", label: "Years Leadership Experience" }, { num: "6", label: "Industries Served" }, { num: "100%", label: "Referral-Driven Growth" }].map((t) => (
              <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 700 }}>{t.num}</div>
                <div style={{ fontSize: "0.75rem", color: css.muted }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>What We Do</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>
            Four integrated pillars that meet leaders <strong style={{ fontWeight: 600 }}>where they are.</strong>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginTop: "3rem" }}>
            {[
              { icon: "🎯", bg: css.terracottaLight, page: "coaching" as Page, title: "Executive Coaching", desc: "Inside-out and outside-in coaching for C-suite leaders, new executives, and high-potentials." },
              { icon: "📐", bg: css.sageLight, page: "consulting" as Page, title: "Business Consulting", desc: "Human capital strategy, organizational design, workforce experience assessment, and operational optimization." },
              { icon: "🤝", bg: css.goldLight, page: "talent" as Page, title: "Talent Management", desc: "Full-desk recruiters who function like your internal talent team. Coaching-informed candidate assessment." },
              { icon: "⚡", bg: css.navyLight, page: "ai" as Page, title: "AI Solutions", desc: "AI readiness assessments, secure workspace setup, leadership AI workshops, and ongoing optimization." },
            ].map((p) => (
              <div key={p.title} onClick={() => nav(p.page)} style={{ background: css.surface, borderRadius: 20, padding: "2.5rem", border: `1px solid ${css.warmBorder}`, cursor: "pointer", transition: "all 0.35s" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", background: p.bg, marginBottom: "1.2rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ background: css.ink, color: css.bg, borderRadius: 20, padding: "4rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Impact</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Leaders across six industries <strong style={{ fontWeight: 600 }}>trust CCS.</strong></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
              {[{ num: "15+", label: "Years in Practice" }, { num: "6", label: "Industry Verticals" }, { num: "25+", label: "Yrs Sr. Leadership" }, { num: "100%", label: "Referral-Driven" }].map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "1.5rem", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2.2rem", fontWeight: 600, color: css.terracotta }}>{s.num}</div>
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

      <CtaBanner overline="Let's Start" title={<>Ready to build leaders who build <strong style={{ fontWeight: 600 }}>what&apos;s next?</strong></>} desc="Every engagement starts with a conversation. Tell us where you are and where you need to be — we'll map the path together." onClick={() => nav("contact")} />
    </>
  );
}

function CoachingPage({ nav }: { nav: (p: Page) => void }) {
  return (
    <>
      <PageHero overline="Executive Coaching" title={<>Transform capable leaders into <strong style={{ fontWeight: 600, color: css.terracotta }}>catalytic</strong> ones.</>} desc="Our coaching programs are designed to elevate leadership performance through personalized, results-driven engagement. We work closely with senior leaders to enhance decision-making, emotional intelligence, and strategic thinking." cta={{ label: "Start a Coaching Engagement", onClick: () => nav("contact") }} bgImage="/ExecutiveCoachingImage.jpg" />
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Coaching Outcomes</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>What leaders gain from working with <strong style={{ fontWeight: 600 }}>CCS.</strong></div>
          <FeatureGrid items={[
            { title: "Accelerated Leadership Impact", desc: "Develop the mindsets and skillsets essential for leadership success through structured development that compounds over time." },
            { title: "Enhanced Communication", desc: "Cultivate impactful communication techniques that strengthen engagement with teams, boards, and stakeholders at every level." },
            { title: "Elevated Executive Presence", desc: "Build a commanding presence that garners respect and inspires confidence — the authentic expression of clarity and conviction." },
            { title: "Heightened Self-Awareness", desc: "Gain deeper insight into strengths, blind spots, and growth edges. Self-awareness is the foundation of every other leadership competency." },
          ]} />
        </div>
      </section>
      <CtaBanner overline="Get Started" title={<>What leadership challenge are your executives <strong style={{ fontWeight: 600 }}>facing today?</strong></>} desc="Let's explore how coaching can create measurable leadership transformation." onClick={() => nav("contact")} />
    </>
  );
}

function ConsultingPage({ nav }: { nav: (p: Page) => void }) {
  return (
    <>
      <PageHero overline="Business Consulting" title={<>Human capital strategy that drives <strong style={{ fontWeight: 600, color: css.terracotta }}>measurable results.</strong></>} desc="From digitalization to remote work to organizational restructuring, disruption demands innovative solutions. CCS specializes in human capital strategies that empower leaders to navigate change." cta={{ label: "Start a Consulting Engagement", onClick: () => nav("contact") }} />
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Consulting Offerings</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Designing adaptive systems that empower <strong style={{ fontWeight: 600 }}>people and performance.</strong></div>
          <FeatureGrid items={[
            { title: "Outcome-Driven Human Capital Solutions", desc: "Reimagine tasks that can be automated, optimize workforce allocation, and reshape where and how work is performed." },
            { title: "Flexible Human Capital Operations", desc: "Design, build, implement, and maintain agile human capital operations aligned with your strategic objectives." },
            { title: "Digital Transformation", desc: "Accelerate your digital journey with expertise in leveraging new technologies, platforms, and work methodologies." },
            { title: "Workforce Experience Assessment", desc: "Quickly gauge workforce sentiment and identify improvement opportunities aligned with modern disruption." },
          ]} />
        </div>
      </section>
      <CtaBanner overline="Get Started" title={<>What business processes could benefit from a <strong style={{ fontWeight: 600 }}>fresh perspective?</strong></>} desc="We tailor every engagement to your budget and goals." onClick={() => nav("contact")} />
    </>
  );
}

function TalentPage({ nav }: { nav: (p: Page) => void }) {
  return (
    <>
      <PageHero overline="Talent Management" title={<>Your external talent team that works like an <strong style={{ fontWeight: 600, color: css.terracotta }}>internal one.</strong></>} desc="CCS Staffing is not a traditional recruitment firm. Our full-desk recruiters are deeply engaged in every step — from sourcing to onboarding." cta={{ label: "Discuss Your Talent Needs", onClick: () => nav("contact") }} bgImage="/TalentManagementImage.jpg" />
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>How We&apos;re Different</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>Recruitment powered by <strong style={{ fontWeight: 600 }}>coaching insight.</strong></div>
          <FeatureGrid items={[
            { title: "Outsourced Talent Acquisition", desc: "We function as your embedded recruitment team — involved in every step, not just resume forwarding." },
            { title: "Coaching-Informed Assessment", desc: "Our CCS coaches assess each candidate's long-term viability and potential before submission." },
            { title: "Strategic Recruitment", desc: "We align recruitment strategy with your business goals — not just job descriptions." },
            { title: "Workforce Development", desc: "A strategic approach to developing your workforce beyond the hire with pipelines and succession plans." },
          ]} />
        </div>
      </section>
      <CtaBanner overline="Get Started" title={<>What would an ideal recruitment partner look like <strong style={{ fontWeight: 600 }}>for your team?</strong></>} desc="Let's talk about your hiring challenges and how CCS Staffing can help." onClick={() => nav("contact")} />
    </>
  );
}

function AIPage({ nav }: { nav: (p: Page) => void }) {
  return (
    <>
      <PageHero overline="AI Solutions" title={<>Building confident leaders in the <strong style={{ fontWeight: 600, color: css.terracotta }}>age of AI.</strong></>} desc="CCS helps teams use AI confidently, securely, and strategically — to save time, communicate clearly, and make smarter business decisions." cta={{ label: "Explore AI Enablement", onClick: () => nav("contact") }} />
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Our Framework</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}><strong style={{ fontWeight: 600 }}>Assess → Implement → Optimize</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2.5rem" }}>
            {[
              { num: "01", title: "Assess", desc: "Evaluate readiness, workflows, and leadership comfort with AI tools. Deliverables include an AI Readiness Report and Opportunity Map." },
              { num: "02", title: "Implement", desc: "Deploy secure AI workspaces and core productivity tools. Includes tool setup, prompt libraries, and role-based access planning." },
              { num: "03", title: "Optimize", desc: "Deliver training and long-term enablement for sustainable adoption. AI Leadership Workshops and ongoing learning pathways." },
            ].map((phase) => (
              <div key={phase.num} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}`, textAlign: "center" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "2.5rem", fontWeight: 700, color: css.terracotta, opacity: 0.2, marginBottom: "0.5rem" }}>{phase.num}</div>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>{phase.title}</h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: css.inkSoft }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner overline="Get Started" title={<>What role does AI currently play in <strong style={{ fontWeight: 600 }}>your organization?</strong></>} desc="Whether you're just starting or scaling existing AI initiatives, we'll meet you where you are." onClick={() => nav("contact")} />
    </>
  );
}

function AboutPage({ nav, setModal }: { nav: (p: Page) => void; setModal: (m: "tom" | "brent") => void }) {
  return (
    <>
      <PageHero overline="About CCS" title={<>A modern, trusted firm grounded in <strong style={{ fontWeight: 600, color: css.terracotta }}>human-centered values.</strong></>} desc="Founded in 2010 in Austin, Texas, Complete Career Solutions empowers organizations to surpass their business objectives by unlocking the full potential of their people." />
      <section style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Our Values</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>These aren&apos;t just words. They shape every <strong style={{ fontWeight: 600 }}>interaction and decision.</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { title: "Courage", desc: "Acting with trust, presence, faith, and vulnerability." },
              { title: "Intention & Quality", desc: "Purposeful work that maximizes impact." },
              { title: "Integrity", desc: "Honesty, transparency, and accountability." },
              { title: "Partnership", desc: "Meaningful, long-term relationships." },
              { title: "Tenacity", desc: "Resilience, grit, and passion for success." },
            ].map((v) => (
              <div key={v.title} style={{ textAlign: "center", padding: "2rem 1rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}` }}>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>{v.title}</h4>
                <p style={{ fontSize: "0.78rem", color: css.inkSoft, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "0 0 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Leadership</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2 }}>25 years of experience. One mission: <strong style={{ fontWeight: 600 }}>enabling your success.</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "3rem" }}>
            {(["tom", "brent"] as const).map((key) => {
              const person = teamData[key];
              const colors = key === "tom" ? { bg: css.terracottaLight, accent: css.terracotta } : { bg: css.sageLight, accent: css.sage };
              return (
                <div key={key} style={{ background: css.surface, borderRadius: 20, padding: "2.5rem", border: `1px solid ${css.warmBorder}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.2rem" }}>
                    {person.photo ? (
                      <img src={person.photo} alt={person.name} style={{ width: 64, height: 64, borderRadius: 14, objectFit: "cover" }} />
                    ) : (
                      <div style={{ width: 64, height: 64, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, background: colors.bg, color: colors.accent }}>{person.name.split(" ").map((n) => n[0]).join("")}</div>
                    )}
                    <div>
                      <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 600 }}>{person.name}</div>
                      <div style={{ fontSize: "0.76rem", color: css.terracotta, fontWeight: 600, marginTop: "0.1rem" }}>{person.role}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: css.inkSoft }}>{person.shortBio}</p>
                  <button onClick={() => setModal(key)} style={{ marginTop: "0.75rem", background: "none", border: "none", color: css.terracotta, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", padding: 0, fontFamily: "inherit" }}>Read Full Bio &rarr;</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBanner overline="Partner With Us" title={<>Ready to build something <strong style={{ fontWeight: 600 }}>extraordinary?</strong></>} desc="Let us show you what a true strategic partnership looks like." onClick={() => nav("contact")} />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero overline="Get In Touch" title={<>Every engagement starts with a <strong style={{ fontWeight: 600, color: css.terracotta }}>conversation.</strong></>} desc="Tell us where you are, where you need to be, and we'll explore how CCS can help. No pressure, no pitch deck — just a real conversation about what's possible." />
      <section style={{ padding: "0 0 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Reach Out</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "2rem" }}>We&apos;d love to hear <strong style={{ fontWeight: 600 }}>from you.</strong></div>
              {[
                { name: "Tom Triolo — CEO & Executive Coach", email: "ttriolo@completecareersolutions.com", scope: "Executive Coaching · Business Consulting · AI Solutions" },
                { name: "Brent Triolo — Co-Founder & Recruitment", email: "brent.triolo@completecareersolutions.com", scope: "Talent Management · CCS Staffing" },
                { name: "Office", email: "", scope: "555 E 5th Street\nAustin, Texas 78701\n(512) 579-1819" },
              ].map((c) => (
                <div key={c.name} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}`, marginBottom: "1rem" }}>
                  <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem" }}>{c.name}</h4>
                  {c.email && <p style={{ fontSize: "0.9rem", color: css.inkSoft }}><a href={`mailto:${c.email}`} style={{ color: css.terracotta, textDecoration: "none", fontWeight: 600 }}>{c.email}</a></p>}
                  <p style={{ fontSize: "0.9rem", color: css.inkSoft, lineHeight: 1.6, whiteSpace: "pre-line" }}>{c.scope}</p>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: css.terracotta, marginBottom: "1rem", fontWeight: 700 }}>Discovery Questions</div>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: css.inkSoft, marginBottom: "1.5rem" }}>Here&apos;s what a first conversation typically covers:</p>
              {[
                { title: "For Executive Coaching", desc: "What leadership challenges are your executives currently facing? How do you currently support the growth of your senior leaders?" },
                { title: "For Talent Management", desc: "What are your biggest challenges in hiring and retaining talent? What would an ideal recruitment partner look like?" },
                { title: "For AI Solutions", desc: "What role does AI currently play in your organization? Are there specific processes that could benefit from AI?" },
              ].map((q) => (
                <div key={q.title} style={{ padding: "2rem", borderRadius: 12, background: css.surface, border: `1px solid ${css.warmBorder}`, marginBottom: "1rem" }}>
                  <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem" }}>{q.title}</h4>
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
  const nav = (p: Page) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const pages: Record<Page, string> = { home: "Home", coaching: "Coaching", consulting: "Consulting", talent: "Talent", ai: "AI Solutions", about: "About", contact: "Book a Call" };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: css.bg, color: css.ink, minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 3rem", background: "rgba(250,248,245,0.92)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${css.warmBorder}` }}>
        <div onClick={() => nav("home")} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
          <img src="/logo.png" alt="CCS" style={{ width: 32, height: 32, borderRadius: 8 }} />
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 600 }}>Complete Career Solutions</span>
        </div>
        <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
          {(Object.keys(pages) as Page[]).map((key) => (
            <button key={key} onClick={() => nav(key)} style={{
              background: key === "contact" ? css.terracotta : page === key ? css.terracottaLight : "none",
              border: "none", cursor: "pointer", padding: "0.5rem 1rem", fontSize: "0.82rem",
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

      {/* Page Content */}
      {page === "home" && <HomePage nav={nav} />}
      {page === "coaching" && <CoachingPage nav={nav} />}
      {page === "consulting" && <ConsultingPage nav={nav} />}
      {page === "talent" && <TalentPage nav={nav} />}
      {page === "ai" && <AIPage nav={nav} />}
      {page === "about" && <AboutPage nav={nav} setModal={setModal} />}
      {page === "contact" && <ContactPage />}

      {/* FOOTER */}
      <footer style={{ padding: "2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${css.warmBorder}`, marginTop: "2rem" }}>
        <div style={{ fontSize: "0.72rem", color: css.muted }}>&copy; 2026 Complete Career Solutions &middot; Austin, Texas &middot; (512) 579-1819</div>
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
