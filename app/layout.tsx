import type { Metadata } from "next";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://marieamadei.github.io/streetbeat-airc-research-intelligence/",
  ),
  title: "AIRC Research Intelligence | Streetbeat",
  description:
    "Concept Streetbeat per trasformare segnali scientifici, organizzativi e di relazione in decisioni e azioni per la missione AIRC.",
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
  openGraph: {
    title: "AIRC Research Intelligence | Streetbeat",
    description: "Dalla ricerca alla prossima decisione.",
    images: [`${publicBasePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
