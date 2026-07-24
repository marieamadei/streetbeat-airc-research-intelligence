import type { Metadata } from "next";
import DemoWorkspace from "./DemoWorkspace";

export const metadata: Metadata = {
  title: "Demo | AIRC Research Intelligence",
  description:
    "Workspace dimostrativo Streetbeat per Fondazione AIRC, basato su dati pubblici e scenari operativi esplicitamente indicati.",
};

export default function DemoPage() {
  return <DemoWorkspace />;
}
