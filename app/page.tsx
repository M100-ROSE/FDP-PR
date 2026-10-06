import { Hero } from "@/components/sections/Hero";
import { EventSection } from "@/components/sections/EventSection";
import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { ConversationSection } from "@/components/sections/ConversationSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { ActionSection } from "@/components/sections/ActionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <EventSection />
      <AudiencesSection />
      <ConversationSection />
      <ReasonsSection />
      <ActionSection />
    </>
  );
}
