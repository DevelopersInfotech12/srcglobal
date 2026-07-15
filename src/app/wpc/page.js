import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "WPC ETA Approval | SRC Global",
  description: "WPC ETA Approval for Wi-Fi, Bluetooth, GPS, and RF wireless devices — Saral Sanchar portal filing and DoT compliance.",
  alternates: { canonical: "/wpc" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.wpc} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
