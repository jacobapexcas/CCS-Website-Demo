"use client";

type Design = "a" | "b" | "c" | "d";

const labels: Record<Design, { name: string; desc: string }> = {
  a: { name: "Option A", desc: "Editorial Authority" },
  b: { name: "Option B", desc: "Modern Warmth" },
  c: { name: "Option C", desc: "Full Website" },
  d: { name: "Option D", desc: "Premium Executive" },
};

export default function DesignSwitcher({
  current,
  onChange,
}: {
  current: Design;
  onChange: (d: Design) => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        gap: "0.25rem",
        padding: "0.35rem",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(20px)",
        borderRadius: "14px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {(Object.keys(labels) as Design[]).map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          style={{
            padding: "0.6rem 1.1rem",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "0.72rem",
            fontWeight: current === key ? 700 : 500,
            fontFamily: "inherit",
            letterSpacing: "0.02em",
            transition: "all 0.25s",
            background: current === key ? "rgba(255,255,255,0.15)" : "transparent",
            color: current === key ? "#fff" : "rgba(255,255,255,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "block" }}>{labels[key].name}</span>
          <span
            style={{
              display: "block",
              fontSize: "0.62rem",
              fontWeight: 400,
              opacity: current === key ? 0.7 : 0.4,
              marginTop: "1px",
            }}
          >
            {labels[key].desc}
          </span>
        </button>
      ))}
    </div>
  );
}
