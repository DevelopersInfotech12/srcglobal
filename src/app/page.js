import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WhatsAppWidget from './Components/WhatsAppWidget';
import HomeScreen from './screens/HomeScreen';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeScreen />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
