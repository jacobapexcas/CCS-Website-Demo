"use client";

import { useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  shortBio: string;
  fullBio: string;
  personal: string;
  credentials: string;
}

const teamData: Record<string, TeamMember> = {
  tom: {
    name: "Tom Triolo",
    role: "CEO & Executive Coach",
    photo: "/TomTriolo.jpg",
    shortBio:
      "Founder of Complete Career Solutions with nearly 25 years of senior-level leadership experience helping organizations and individuals achieve lasting success.",
    fullBio:
      "Tom Triolo is the Founder of Complete Career Solutions, where he channels nearly 25 years of senior-level leadership experience into helping organizations and individuals achieve lasting success. A trusted advisor and business partner, Tom has built his career around one central principle: enabling the success of others — whether executives, teams, or entire organizations.\n\nThroughout his career, Tom has held multiple senior human resources and business leadership roles across both large global enterprises and mid-sized organizations. His breadth of experience spans diverse industries — including technology (hardware and software), professional services, financial services, commercial development, medical devices, and consumer products. This cross-industry expertise allows him to quickly integrate into new environments and deliver tailored solutions that drive performance, growth, and organizational alignment.\n\nTom has partnered with executives and HR leaders at the highest levels, providing strategic consulting in areas such as executive coaching, organizational design and assessment, sales optimization, and talent acquisition strategy. His ability to bridge C-suite vision with operational execution makes him a sought-after partner for leaders navigating complex business challenges and transformation.",
    personal:
      "Beyond his professional work, Tom has been married to his wife, Lesa, for over 30 years, and together they raised three sons. With their children now grown and spread across the country, Tom and Lesa share a passion for travel and adventure. When at home in Austin, Tom can often be found on the golf course or competing in his church basketball league.",
    credentials:
      "Executive Coaching · Organizational Design · Sales Optimization · Talent Acquisition Strategy",
  },
  brent: {
    name: "Brent Triolo",
    role: "Co-Founder & Senior Recruitment Advisor",
    shortBio:
      "Co-Founder of CCS Staffing, driven by a passion for helping others and a deep commitment to servant leadership.",
    fullBio:
      "Brent, Co-Founder of CCS Staffing, is driven by a passion for helping others and a deep commitment to servant leadership. His extensive experience across various industries has shaped his leadership approach, which emphasizes empowering and supporting those around him. The core values of CCS Staffing were thoughtfully crafted by Brent, reflecting his personal dedication to integrity, partnership, and excellence.",
    personal:
      "Outside the office, Brent's competitive spirit — honed during his days as a collegiate athlete — shines through in his love for beach volleyball, softball, golf, and any challenge that tests his limits. When it's time to recharge, you can find him enjoying a baseball game or focusing on mindfulness through yoga, cold plunges, and meditation.",
    credentials:
      "Servant Leadership · Talent Acquisition · Values-Driven Culture · Executive Search",
  },
};

export { teamData };
export type { TeamMember };

export default function TeamModal({
  member,
  onClose,
}: {
  member: "tom" | "brent" | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [member]);

  if (!member) return null;

  const person = teamData[member];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        padding: "2rem",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "12px",
          maxWidth: "640px",
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "2.5rem",
          position: "relative",
          animation: "slideUp 0.3s ease",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#999",
            lineHeight: 1,
            padding: "0.25rem",
          }}
        >
          &times;
        </button>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
        >
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#1a1f36",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b8a88a",
                fontSize: "1.5rem",
                fontWeight: 300,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {person.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#1a1f36",
                margin: 0,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {person.name}
            </h2>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#8a8e9e",
                letterSpacing: "0.04em",
                marginTop: "0.25rem",
              }}
            >
              {person.role}
            </div>
          </div>
        </div>

        {/* Full bio */}
        {person.fullBio.split("\n\n").map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "#3a3e4e",
              marginBottom: "1rem",
              fontWeight: 300,
            }}
          >
            {para}
          </p>
        ))}

        {/* Personal */}
        <div
          style={{
            borderTop: "1px solid #eee",
            marginTop: "1.5rem",
            paddingTop: "1.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#b8a88a",
              fontWeight: 500,
              marginBottom: "0.75rem",
            }}
          >
            BEYOND THE OFFICE
          </div>
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.8,
              color: "#5a5e6e",
              fontWeight: 300,
            }}
          >
            {person.personal}
          </p>
        </div>

        {/* Credentials */}
        <div
          style={{
            borderTop: "1px solid #eee",
            marginTop: "1.5rem",
            paddingTop: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              color: "#8a8e9e",
              letterSpacing: "0.04em",
            }}
          >
            {person.credentials}
          </div>
        </div>
      </div>
    </div>
  );
}
