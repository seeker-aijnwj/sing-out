import "./Page.css";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <main className="page">
      {children}
    </main>
  );
}