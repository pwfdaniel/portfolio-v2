"use client";
import Image from "next/image";
import React from "react";

interface SkillIconProps {
  title: string;
  src: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ title, src }) => {
  const ref = React.useRef<HTMLImageElement | null>(null);
  console.log(`src: `, src);

  return (
    <Image
      ref={ref}
      width={48}
      height={48}
      alt={title}
      src={src}
      style={{ objectFit: "contain" }}
      onError={() => {
        const el = ref.current;
        if (el && !el.dataset.fallback) {
          el.dataset.fallback = "true";
          const letter = title.charAt(0).toUpperCase();
          const svg = encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><rect width='100%' height='100%' rx='8' ry='8' fill='%23222'/><text x='50%' y='54%' font-family='sans-serif' font-size='24' fill='white' text-anchor='middle'>${letter}</text></svg>`
          );
          el.src = `data:image/svg+xml,${svg}`;
        }
      }}
    />
  );
};

export default SkillIcon;
