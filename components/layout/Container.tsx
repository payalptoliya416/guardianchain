import { HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Container({ children, className, ...rest }: ContainerProps) {
  const classes = className ? `${styles.container} ${className}` : styles.container;
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
