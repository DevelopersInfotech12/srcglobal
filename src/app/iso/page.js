import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "ISO Certification | SRC Global",
  description: "ISO 9001, 14001, 45001, 27001 and more — international management system certification and audit support.",
  alternates: { canonical: "/iso" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.iso} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
