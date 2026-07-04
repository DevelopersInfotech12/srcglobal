import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppWidget from '../Components/WhatsAppWidget';
import BlogScreen from '../screens/BlogScreen';

export const metadata = {
  title: 'Blog | SRC Global — Regulatory Insights & Compliance Guides',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main><BlogScreen /></main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
