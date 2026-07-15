import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "BEE Star Registration | SRC Global",
  description: "BEE star labelling and energy efficiency registration for appliances, ACs, motors, and more.",
  alternates: { canonical: "/bee" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main><ServiceDetailScreen data={SERVICE_DETAILS.bee} /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
