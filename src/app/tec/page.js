import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "TEC / MTCTE Certification | SRC Global",
  description: "TEC / MTCTE certification for telecom equipment, routers, IoT devices, and mobile handsets under DoT norms.",
  alternates: { canonical: "/tec" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.tec} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
