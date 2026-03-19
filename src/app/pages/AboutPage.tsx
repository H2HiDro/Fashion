import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';

const imgBg = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white relative min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
          <div className="absolute bg-[rgba(139,69,19,0.7)] inset-0" />
        </div>
        
        <Header theme="dark" />
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="font-['Lato:Regular',sans-serif] leading-[1.4] not-italic text-[16px] tracking-[1.6px] uppercase mb-4">
            Made in Indonesia, Dedicated to Indonesia
          </p>
          <h1 className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] text-[76px] uppercase mb-6">
            About Modeva
          </h1>
          <p className="font-['Lato:Regular',sans-serif] text-[18px] max-w-[700px] mx-auto">
            Discover the art of dressing up with Indonesia's premier fashion destination
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1356px] mx-auto px-[42px] py-[96px]">
        {/* Our Story */}
        <div className="grid grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] text-[48px] text-[#3e3e3e] uppercase mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-['Lato:Regular',sans-serif] text-[16px] text-[#757575] leading-[1.6]">
              <p>
                Modeva was founded with a singular vision: to bring the finest fashion to Indonesia while celebrating our rich cultural heritage. We believe that fashion is more than just clothing—it's a form of self-expression and art.
              </p>
              <p>
                Since our inception, we have been committed to providing high-quality, stylish pieces that combine international trends with local craftsmanship. Every piece in our collection is carefully curated to ensure it meets our standards of excellence.
              </p>
              <p>
                Our name, Modeva, represents the evolution of modern fashion (Mode-Evolution), reflecting our commitment to staying ahead of trends while honoring timeless style.
              </p>
            </div>
          </div>
          <div className="h-[500px] w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=80" 
              alt="Fashion workshop" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Our Craftsmanship */}
        <div className="mb-24 bg-[#fafafa] p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80" 
              alt="Tailoring craftsmanship" 
              className="w-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] text-[36px] md:text-[48px] text-[#3e3e3e] uppercase mb-6">
              Our Craftsmanship
            </h2>
            <div className="font-['Lato:Regular',sans-serif] text-[16px] text-[#757575] leading-[1.6] space-y-4">
              <p>
                True luxury lies in the details. At Modeva, every seam, texture, and stitch is a testament to the passionate artisanship of our makers.
              </p>
              <p>
                We source the absolute finest fabrics globally to ensure that our garments not only look exceptional but offer unparalleled comfort and durability over time. It's affordable luxury, tailored with care.
              </p>
            </div>
          </div>
        </div>

        {/* Meet The Team */}
        <div className="mb-24">
          <h2 className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] text-[36px] md:text-[48px] text-[#3e3e3e] uppercase mb-12 text-center">
            Meet The Visionaries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Eleanor Vance", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" },
              { name: "Marcus Chen", role: "Lead Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
              { name: "Sophia Rossi", role: "Head of Sourcing", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80" },
              { name: "Julian Bates", role: "Artisan Tailor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80" },
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative overflow-hidden mb-4 mx-auto w-full aspect-square">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale hover:grayscale-0"
                  />
                </div>
                <h3 className="font-['Playfair_Display:Medium',sans-serif] text-[20px] text-[#3e3e3e] mb-1">{member.name}</h3>
                <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#8b4513] tracking-widest uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-24">
          <h2 className="font-['Playfair_Display:Medium',sans-serif] font-medium leading-[1.3] text-[48px] text-[#3e3e3e] uppercase mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#f2f2f2] p-8 text-center">
              <div className="bg-[#8b4513] rounded-full size-[80px] mx-auto mb-6 flex items-center justify-center">
                <p className="text-white text-[32px]">✓</p>
              </div>
              <h3 className="font-['Playfair_Display:Regular',sans-serif] text-[24px] text-[#3e3e3e] mb-4">
                Quality First
              </h3>
              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#757575] leading-[1.5]">
                We never compromise on quality. Every piece is crafted with attention to detail and made to last.
              </p>
            </div>
            <div className="bg-[#f2f2f2] p-8 text-center">
              <div className="bg-[#8b4513] rounded-full size-[80px] mx-auto mb-6 flex items-center justify-center">
                <p className="text-white text-[32px]">♥</p>
              </div>
              <h3 className="font-['Playfair_Display:Regular',sans-serif] text-[24px] text-[#3e3e3e] mb-4">
                Customer Satisfaction
              </h3>
              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#757575] leading-[1.5]">
                Your happiness is our priority. We offer 100% satisfaction guarantee on all purchases.
              </p>
            </div>
            <div className="bg-[#f2f2f2] p-8 text-center">
              <div className="bg-[#8b4513] rounded-full size-[80px] mx-auto mb-6 flex items-center justify-center">
                <p className="text-white text-[32px]">★</p>
              </div>
              <h3 className="font-['Playfair_Display:Regular',sans-serif] text-[24px] text-[#3e3e3e] mb-4">
                Indonesian Pride
              </h3>
              <p className="font-['Lato:Regular',sans-serif] text-[14px] text-[#757575] leading-[1.5]">
                Proudly made in Indonesia, supporting local artisans and craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#8b4513] text-white p-12 text-center">
          <h2 className="font-['Playfair_Display:Medium',sans-serif] font-medium text-[36px] mb-6 uppercase">
            Get In Touch
          </h2>
          <div className="font-['Lato:Regular',sans-serif] text-[16px] space-y-2 mb-8">
            <p>WhatsApp: +62 859 9999 999</p>
            <p>Email: hello@modeva.com</p>
            <p>Address: Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</p>
          </div>
          <button 
            className="bg-white text-[#8b4513] font-['Lato:Regular',sans-serif] text-[16px] tracking-[1.6px] uppercase px-8 py-4 cursor-pointer hover:bg-[#f2f2f2] transition-colors"
            onClick={() => navigate('/products')}
          >
            Start Shopping
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#8b4513] text-white py-12">
        <div className="max-w-[1356px] mx-auto px-[42px] text-center">
          <p className="font-['Lato:Regular',sans-serif] text-[12px]">
            All rights reserved - Copyright 2023 By Modeva Fashion
          </p>
        </div>
      </div>
    </div>
  );
}
