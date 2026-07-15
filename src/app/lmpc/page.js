import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "LMPC Registration | SRC Global",
  description: "LMPC import license and manufacturer registration under the Legal Metrology (Packaged Commodities) Rules.",
  alternates: { canonical: "/lmpc" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.lmpc} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
