const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  "accountAssociation": {
      "header": "eyJmaWQiOjEzNjYxNzIsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhhQ0M3MzA2Nzg5OGM1NTI5NTlDNjJiZTlGODgwNDk2QTQ2MGI1OEIyIn0",
      "payload": "eyJkb21haW4iOiJiYXNleWVhci1taW5pYXBwLnZlcmNlbC5hcHAifQ",
      "signature": "KqlKRKbhpxApSMU20/Z6CfoqatZOXv/L/pVFP7bMWJd1U4Tezz0ePCRs6AsxL8J3aSbz24+IEnX3BnMaSocIIRs="
    },
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

