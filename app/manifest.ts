import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: siteConfig.name.split(" ")[0],
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e5",
    theme_color: "#f6f1e5",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
