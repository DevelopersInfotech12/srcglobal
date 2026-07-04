'use client';
import HeroSection from '../Components/home/HeroSection';
import ServicesAndProcess from '../Components/home/ServicesAndProcess';
import WhyAndTestimonials from '../Components/home/WhyAndTestimonials';
import TrustAndIndustries from '../Components/home/TrustAndIndustries';
import BlogFaqCta from '../Components/home/BlogFaqCta';

export default function HomeScreen() {
  return (
    <>
      <HeroSection />
      <ServicesAndProcess />
      <WhyAndTestimonials />
      <TrustAndIndustries />
      <BlogFaqCta />
    </>
  );
}