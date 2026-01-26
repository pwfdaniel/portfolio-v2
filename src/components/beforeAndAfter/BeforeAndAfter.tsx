"use client";

import { useTheme } from "@once-ui-system/core";
import classNames from "classnames";
import * as React from "react";
import styles from "./BeforeAndAfter.module.scss";

interface BeforeAndAfterProps extends React.HTMLAttributes<HTMLDivElement> {
  before: { src: string; alt?: string; label?: string };
  after: { src: string; alt?: string; label?: string };
  orientation?: "horizontal" | "vertical"; // horizontal: drag left-right; vertical: drag up-down
  /** initial position (0-1) */
  initial?: number;
  /** optional fixed aspect ratio such as 16/9 (number) or pass string like "16/9" */
  aspectRatio?: number | string;
  radius?: string;
  hover?: boolean; // hover mode vs drag (default true per request)
  /** wrap in browser-like frame */
  frame?: boolean;
  frameTitle?: string;
  frameUrl?: string;
}

const HOVER_MIN = 0;
const HOVER_MAX = 1;

export const BeforeAndAfter: React.FC<BeforeAndAfterProps> = ({
  before,
  after,
  orientation = "horizontal",
  initial = 0.5,
  aspectRatio,
  radius = "var(--once-radius-m)",
  hover = true,
  frame,
  frameTitle,
  frameUrl,
  className,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState(() =>
    Math.min(HOVER_MAX, Math.max(HOVER_MIN, initial))
  );

  const vertical = orientation === "vertical";

  React.useEffect(() => {
    setValue(Math.min(HOVER_MAX, Math.max(HOVER_MIN, initial)));
  }, [initial]);

  // pointer / hover handling
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function updateFromEvent(clientX: number, clientY: number) {
      const rect = el!.getBoundingClientRect();
      let next: number;
      if (vertical) {
        next = (clientY - rect.top) / rect.height;
      } else {
        next = (clientX - rect.left) / rect.width;
      }
      next = Math.min(HOVER_MAX, Math.max(HOVER_MIN, next));
      setValue(next);
    }

    function onPointerMove(e: PointerEvent) {
      if (!hover && !(e.pressure > 0 || e.buttons > 0)) return;
      updateFromEvent(e.clientX, e.clientY);
    }

    function onMouseMove(e: MouseEvent) {
      if (!hover) return;
      updateFromEvent(e.clientX, e.clientY);
    }

    if (hover) {
      el.addEventListener("mousemove", onMouseMove);
    } else {
      window.addEventListener("pointermove", onPointerMove);
    }

    return () => {
      if (hover) {
        el.removeEventListener("mousemove", onMouseMove);
      } else {
        window.removeEventListener("pointermove", onPointerMove);
      }
    };
  }, [hover, vertical]);

  const clipStyle = vertical
    ? { clipPath: `inset(0 0 ${(1 - value) * 100}% 0)` }
    : { clipPath: `inset(0 0 0 ${value * 100}%)` };

  const aspect = React.useMemo(() => {
    if (!aspectRatio) return undefined;
    if (typeof aspectRatio === "number") return `${aspectRatio}`;
    return aspectRatio;
  }, [aspectRatio]);

  const containerStyle: React.CSSProperties = {
    borderRadius: radius,
    // Only apply aspect-ratio if provided; otherwise intrinsic base image height drives layout
    ...(aspect ? { aspectRatio: aspect } : {}),
  };

  const lineStyle: React.CSSProperties = vertical
    ? { top: `${value * 100}%`, left: 0, transform: "translateY(-1px)" }
    : { left: `${value * 100}%`, top: 0, transform: "translateX(-1px)" };

  const comparisonCore = (
    <div
      ref={ref}
      className={classNames(
        styles.container,
        vertical && styles.vertical,
        className
      )}
      style={containerStyle}
      {...rest}
    >
      <div className={styles.base} aria-label={before.label || "Before"}>
        <img
          src={before.src}
          alt={before.alt || before.label || "Before"}
          draggable={false}
          onLoad={() => {
            if (ref.current) setValue((v) => v);
          }}
        />
        {before.label && <span className={styles.label}>{before.label}</span>}
      </div>
      <div className={styles.overlay} aria-label={after.label || "After"}>
        <div className={styles.overlayContent} style={clipStyle}>
          <img
            src={after.src}
            alt={after.alt || after.label || "After"}
            draggable={false}
          />
        </div>
        {after.label && (
          <span className={classNames(styles.label, styles.after)}>
            {after.label}
          </span>
        )}
      </div>
      <div className={styles.handleLineWrapper}>
        <div className={styles.handleLine} style={lineStyle} />
      </div>
    </div>
  );

  if (frame) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
      <div
        className={classNames(styles.appFrame, isDark && styles.appFrameDark)}
        data-title={frameTitle}
        data-url={frameUrl}
      >
        <div className={styles.appFrameBar}>
          <div className={styles.appFrameButtons}>
            <span />
            <span />
            <span />
          </div>
          {frameTitle && (
            <div className={styles.appFrameTitle}>{frameTitle}</div>
          )}
          {frameUrl && <div className={styles.appFrameUrl}>{frameUrl}</div>}
        </div>
        <div className={styles.appFrameContent}>{comparisonCore}</div>
      </div>
    );
  }

  return comparisonCore;
};
