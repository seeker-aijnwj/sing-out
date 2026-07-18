import "./Card.css";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <section className="card">
      {children}
    </section>
  );
}