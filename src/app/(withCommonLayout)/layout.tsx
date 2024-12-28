import Dashboard from "@/components/modules/dashboard/Dashboard";
import { ReactNode } from "react";

export default function commonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Dashboard children={children} />
    </div>
  );
}
