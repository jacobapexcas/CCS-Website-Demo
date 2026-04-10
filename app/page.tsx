"use client";

import { useState } from "react";
import Image from "next/image";
import DesignSwitcher from "@/components/DesignSwitcher";
import OptionA from "@/components/designs/OptionA";
import OptionB from "@/components/designs/OptionB";
import OptionC from "@/components/designs/OptionC";
import OptionD from "@/components/designs/OptionD";
import OptionE from "@/components/designs/OptionE";
import OptionF from "@/components/designs/OptionF";

type Design = "a" | "b" | "c" | "d" | "e" | "f";

const designs: Record<Design, React.ComponentType> = {
  a: OptionA,
  b: OptionB,
  c: OptionC,
  d: OptionD,
  e: OptionE,
  f: OptionF,
};

const PASSWORD = "ccsdemo";

export default function Home() {
  const [current, setCurrent] = useState<Design>("d");
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const ActiveDesign = designs[current];

  if (!unlocked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1f36",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "380px", padding: "2rem" }}>
          <Image
            src="/logo.png"
            alt="CCS"
            width={72}
            height={72}
            style={{
              borderRadius: "50%",
              marginBottom: "2rem",
            }}
          />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.8rem",
              fontWeight: 300,
              color: "#faf9f6",
              marginBottom: "0.5rem",
            }}
          >
            CCS Website Preview
          </h1>
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(250,249,246,0.4)",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            Enter the password to view the design concepts.
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
          >
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              autoFocus
              style={{
                width: "100%",
                padding: "0.9rem 1.2rem",
                fontSize: "0.85rem",
                fontFamily: "inherit",
                background: "rgba(250,249,246,0.06)",
                border: error
                  ? "1px solid rgba(220,80,80,0.6)"
                  : "1px solid rgba(250,249,246,0.1)",
                borderRadius: "6px",
                color: "#faf9f6",
                outline: "none",
                marginBottom: "1rem",
                transition: "border-color 0.3s",
                boxSizing: "border-box",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.9rem",
                fontSize: "0.8rem",
                fontFamily: "inherit",
                fontWeight: 500,
                letterSpacing: "0.06em",
                background: "#b8a88a",
                color: "#1a1f36",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
            >
              View Designs
            </button>
          </form>
          {error && (
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.78rem",
                color: "rgba(220,80,80,0.8)",
              }}
            >
              Incorrect password
            </p>
          )}
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
