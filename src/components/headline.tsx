"use client";

import React, { useState } from "react";
import { TextEffect } from "@/components/text/text-effect";

function TextEffectWithExit() {
  const [trigger, setTrigger] = useState(true);
  
  const blurSlideVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(10px) brightness(0%)",
        y: 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px) brightness(100%)",
        transition: {
          duration: 0.4,
        },
      },
    },
  };

  return (
    <TextEffect
      className="inline-flex"
      per="char"
      variants={blurSlideVariants}
      trigger={trigger}
    >
      gm, I'm Sarthak
    </TextEffect>
  );
}

export default TextEffectWithExit;