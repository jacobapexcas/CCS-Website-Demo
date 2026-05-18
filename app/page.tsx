"use client";

import { useState } from "react";
import Image from "next/image";
import DesignSwitcher from "@/components/DesignSwitcher";
import OptionC from "@/components/designs/OptionC";
import OptionH from "@/components/designs/OptionH";

// Two finalist designs surfaced to the team:
// - Version A (OptionC): the current live design — warm cream, multi-page editorial
// - Version B (OptionH): the new direction — dark navy hero, spaced-caps eyebrows,
//   sharper geometry. Built from the Version B UI kit shared 2026-05-19.
// Version B is the default landing because the team is converging on it as
// the chosen direction; Version A remains togglable for side-by-side review.
// Other designs (A, B, D, E, F, G in the design folder) remain on disk for
// reference but are not wired into the switcher.

type Design = "a" | "b";

const designs: Record<Design, React.ComponentType> = {
  a: OptionC,
  b: OptionH,
};

const PASSWORD = "ccsdemo";

export default function Home() {
  const [current, setCurrent] = useState<Design>("b");
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const ActiveDesign = designs[current];

  if (!unlocked) {
    // Lock screen styled to match Version B's hero language: dark navy
    // backdrop with the Austin skyline + diagonal gradient overlay, Inter
    // typography, spaced-caps eyebrow, bone-on-navy primary button. Gives
    // the visitor a hint of what's behind the curtain before they unlock.
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E141C",
          fontFamily: "'Inter', system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "1.5rem",
        }}
      >
        {/* Austin skyline backdrop */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/HomePageBackground.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.85)",
            opacity: 0.55,
          }}
        />
        {/* Diagonal gradient overlay (same recipe as Version B's hero) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(14,20,28,0.92) 0%, rgba(14,20,28,0.78) 45%, rgba(14,20,28,0.6) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 440,
            width: "100%",
          }}
        >
          <Image
            src="/logo-transparent.png"
            alt="CCS"
            width={64}
            height={64}
            style={{ display: "inline-block", marginBottom: "1.75rem" }}
            priority
          />

          {/* Eyebrow */}
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8ED6D9",
              marginBottom: "1.25rem",
            }}
          >
            Website Preview · Austin, Texas
          </div>

          {/* Display */}
          <h1
            style={{
              fontSize: "clamp(1.7rem, 4.5vw, 2.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.018em",
              lineHeight: 1.1,
              color: "#FAF8F4",
              marginBottom: "1rem",
            }}
          >
            Complete Career Solutions
          </h1>

          {/* Lede — hints at the brand promise */}
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.55,
              color: "#B6C3D5",
              marginBottom: "2.5rem",
              maxWidth: 360,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Empowering organizations through strategic consulting.
            Enter the password to view the redesign draft.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.toLowerCase().trim() === PASSWORD) {
                setUnlocked(true);
              } else {
                setError(true);
                setTimeout(() => setError(false), 1500);
              }
            }}
            style={{ textAlign: "left" }}
          >
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              autoFocus
              style={{
                width: "100%",
                padding: "0.95rem 1.1rem",
                fontSize: "0.9rem",
                fontFamily: "inherit",
                background: "rgba(250,248,244,0.06)",
                border: error
                  ? "1px solid rgba(220,80,80,0.65)"
                  : "1px solid rgba(250,248,244,0.18)",
                borderRadius: 2,
                color: "#FAF8F4",
                outline: "none",
                marginBottom: "0.875rem",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
                letterSpacing: "0.01em",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#3AAFB5";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = error
                  ? "rgba(220,80,80,0.65)"
                  : "rgba(250,248,244,0.18)";
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.95rem",
                fontSize: "0.85rem",
                fontFamily: "inherit",
                fontWeight: 600,
                letterSpacing: "0.02em",
                background: "#FAF8F4",
                color: "#0E141C",
                border: "1px solid transparent",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background-color 0.2s ease, transform 0.1s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F2EEE7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FAF8F4";
              }}
            >
              View Site →
            </button>
          </form>

          {error && (
            <p
              style={{
                marginTop: "0.875rem",
                fontSize: "0.78rem",
                color: "rgba(220,80,80,0.95)",
                textAlign: "left",
              }}
            >
              Incorrect password
            </p>
          )}

          <p
            style={{
              marginTop: "2.5rem",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(250,248,244,0.4)",
            }}
          >
            Driving Impactful Change · Since 2010
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ActiveDesign />
      <DesignSwitcher current={current} onChange={setCurrent} />
    </>
  );
}
