import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "BIS ISI Mark | SRC Global",
  description:
    "BIS ISI Mark certification for 370+ product categories including steel, cement, and electrical goods sold in India. Factory inspection to license grant, fully managed.",
  alternates: { canonical: "/bis-isi" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS['bis-isi']} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
