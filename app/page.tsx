"use client";

import { useState } from "react";
import DesignSwitcher from "@/components/DesignSwitcher";
import OptionA from "@/components/designs/OptionA";
import OptionB from "@/components/designs/OptionB";
import OptionC from "@/components/designs/OptionC";
import OptionD from "@/components/designs/OptionD";

type Design = "a" | "b" | "c" | "d";

const designs: Record<Design, React.ComponentType> = {
  a: OptionA,
  b: OptionB,
  c: OptionC,
  d: OptionD,
};

export default function Home() {
  const [current, setCurrent] = useState<Design>("d");
  const ActiveDesign = designs[current];

  return (
    <>
      <ActiveDesign />
      <DesignSwitcher current={current} onChange={setCurrent} />
    </>
  );
}
