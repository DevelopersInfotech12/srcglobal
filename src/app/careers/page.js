import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppWidget from '../Components/WhatsAppWidget';
import CareersScreen from '../screens/CareersScreen';

export const metadata = { title: 'Careers | SRC Global — Join India\'s Leading Compliance Team' };

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main><CareersScreen /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
