import Featuredsection from "@/components/Featuredsection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/Testimonial";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
   <HeroSection/>
   <Featuredsection/>
   <MusicSchoolTestimonials/>
   <Instructors/>
   <Footer/>
   </main>
  );
}
