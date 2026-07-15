import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "CDSCO / Drug License | SRC Global",
  description: "CDSCO drug license, cosmetic license, and medical device registration under DCGI and MDR 2017.",
  alternates: { canonical: "/cdsco" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.cdsco} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
