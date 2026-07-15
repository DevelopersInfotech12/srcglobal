import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhatsAppWidget from "../Components/WhatsAppWidget";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";
import BISCRSOverview from "../Components/BISCRSOverview";
import { SERVICE_DETAILS } from "../lib/servicesData";

export const metadata = {
  title: "BIS CRS (IMEI) Registration | SRC Global",
  description:
    "BIS CRS Registration for electronics & IT products — mobiles, laptops, LED lights, chargers, power banks and more. End-to-end filing and compliance support.",
  alternates: { canonical: "/bis-crs" },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceDetailScreen data={SERVICE_DETAILS['bis-crs']} overviewSlot={<BISCRSOverview />} />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
