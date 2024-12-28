import { ReactNode } from "react";

export default function commonLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
