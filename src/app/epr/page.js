import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "EPR Registration | SRC Global",
  description: "EPR registration for e-waste, plastic waste, and battery waste with CPCB — end-to-end producer responsibility compliance.",
  alternates: { canonical: "/epr" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.epr} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
