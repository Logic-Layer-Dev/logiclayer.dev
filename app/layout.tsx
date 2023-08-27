import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://logiclayer.dev/"),
    title: "Logic Layer - Software Development",
    description:
    "Software development team, focused on open-source technologies. Located in Chapecó, Brazil.",
    generator: "Node.js",
    applicationName: "Logic Layer - Software Development",
    keywords: [
        "Logic Layer - Software Development",
        "LogicLayer",
        "development",
        "software",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "nodejs",
        "postgres",
        "react",
        "backend developer",
        "backend engineer",
        "tech",
        "brasil",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "software developer portfolio",
        "backend software engineer"
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Logic Layer - Software Development",
        description:
      "Software development team, focused on open-source technologies. Located in Chapecó, Brazil.",
        url: "https://logiclayer.dev/",
        siteName: "logiclayer.dev",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Logic Layer - Software Development",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Logic Layer - Software Development",
        description:
      "Software development team, focused on open-source technologies. Located in Chapecó, Brazil.",
        creator: "Carlos Giongo",
        creatorId: "0000000000",
        images: ["./public/LogicLayer.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
