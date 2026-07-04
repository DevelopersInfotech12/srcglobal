import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppWidget from '../Components/WhatsAppWidget';
import AboutScreen from '../screens/AboutScreen';

export const metadata = {
  title: 'About Us | SRC Global — Star India Accreditation',
  description: '12+ years of compliance excellence. Meet the team behind India\'s most trusted certification consultancy.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main><AboutScreen /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
