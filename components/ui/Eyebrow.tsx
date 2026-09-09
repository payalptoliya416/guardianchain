import { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export default function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  const classes = [styles.eyebrow, styles[tone], className].filter(Boolean).join(" ");
  return <span className={classes}>{children}</span>;
}
