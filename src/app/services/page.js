import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppWidget from '../Components/WhatsAppWidget';
import ServicesScreen from '../screens/ServicesScreen';

export const metadata = {
  title: 'Services | SRC Global — BIS, EPR, WPC, TEC, BEE, ISO, CDSCO',
  description: '50+ compliance and certification services across BIS, EPR, WPC, TEC, BEE, LMPC, ISO, and CDSCO.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main><ServicesScreen /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
