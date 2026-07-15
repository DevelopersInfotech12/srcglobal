import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "BIS Certification | SRC Global",
  description: "BIS ISI Mark, CRS Registration, Scheme-X and Hallmarking — complete BIS certification services for India.",
  alternates: { canonical: "/bis" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.bis} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
