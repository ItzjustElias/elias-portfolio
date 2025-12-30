// GEEN "use client" hier!
import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Juridische informatie over gegevensgebruik op eliasb.be",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}