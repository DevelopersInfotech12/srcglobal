import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppWidget from '../Components/WhatsAppWidget';
import ContactScreen from '../screens/ContactScreen';

export const metadata = {
  title: 'Contact Us | SRC Global — Free Consultation',
  description: 'Get a free consultation with SRC Global compliance experts. We respond within 2 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main><ContactScreen /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
