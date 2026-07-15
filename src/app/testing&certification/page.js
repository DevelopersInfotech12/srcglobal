import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "Testing & Certification | SRC Global",
  description:
    "Lab coordination for every Indian certification — BIS CRS, ISI Mark, WPC-ETA, TEC MTCTE, and BEE. Right lab, right standard, first time.",
  alternates: { canonical: "/testing&certification" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.testing} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
