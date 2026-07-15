import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppWidget from '../Components/WhatsAppWidget';
import AIRecommendationScreen from '../screens/AIRecommendationScreen';

export const metadata = {
  title: 'AI Certification Advisor | SRC Global',
  description: 'Get instant AI-powered certification recommendations for your product in India — BIS, EPR, WPC, TEC, BEE, LMPC, ISO, CDSCO.',
  alternates: { canonical: '/ai-recommendation' },
};

export default function AIRecommendationPage() {
  return (
    <>
      <Navbar />
      <main><AIRecommendationScreen /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
