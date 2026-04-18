import React, { useState } from 'react';
import { Monitor, Rocket, Zap, Crown, X, CheckCircle2, MessageCircle } from 'lucide-react';

const WebServices = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const agencyPhoneNumber = "7397173947"; 
  const whatsappLink = `https://wa.me/${agencyPhoneNumber}`;

  const services = [
    {
      id: "standard",
      name: "Website Standard Plan", 
      oldPrice: "₹ 7,999",
      price: "₹ 4,999",
      icon: <Monitor className="w-6 h-6" />,
      images: [
        "assets/turiya.png",
        "assets/turiya1.png",
        "assets/nand.png",
        "assets/nand1.png",
      ],
      shortDesc: "A professional start for individuals and startups looking to establish a secure online presence quickly.",
      capabilities: [
        "Free Hosting 1 Yr", "standard structure", "1 Mail Account", "FB and Insta Integration", 
        "Basic Designs", "Call Integration", "WhatsApp Chat", "1 Yr Support"
      ],
      description: `Inotriz Global accelerates and scales businesses through powerful digital solutions designed for the modern market. Our Standard Plan is specifically crafted for startups and individuals who need a simple, yet high-impact secure way to manage their records digitally—no more hunting through file cabinets or worrying about lost paperwork. We focus on moving your business from endless paperwork to a secure digital world where your brand identity is protected with strong encryption and stored in secure systems. 

This plan offers a professional entry point that includes essential call and WhatsApp integrations to ensure you never miss a lead. Our expert team ensures that every element of your 6-page site looks sharp and clear, providing a fast turnaround so your daily operations keep running smoothly. Whether you are in healthcare, finance, or education, this plan provides the foundational digitalization required to reach across global borders. We handle the technical setup quickly and accurately, allowing you to focus on your core business goals while we ensure your digital footprint remains robust and accessible 24/7.`,
    },
    {
      id: "premium-standard",
      name: "Premium website Standard Plan",
      oldPrice: "₹ 14,999",
      price: "₹ 11,999",
      icon: <Rocket className="w-6 h-6" />,
      images: [
        "assets/true.png",
        "assets/true1.png",
        "assets/guru.png",
        "assets/guru1.png"
      ],
      shortDesc: "The ideal choice for growing businesses that need more pages and better social media integration.",
      capabilities: [
        "Free Hosting 1 Yr", "Admin Panel - Basic", "1 Mail Account", "10 Pages", 
        "Customized Pages", "Customized Designs", "Call Integration", 
        "FB & Insta Integration", "WhatsApp Chat", "1 Yr Support", "Google Analytical"
      ],
      description: `The Premium Standard Plan is designed for growing enterprises that demand a more comprehensive synergy of marketing and consulting solutions. By expanding to 10 customized pages, we provide the space needed to detail your specialized services and document your growth story for a global audience. This plan integrates advanced Facebook and Instagram connectivity, allowing you to synchronize your social media efforts with your primary web hub seamlessly. 

Our digital solutions make your files and services easy to find, keeping your data safe while cutting down on administrative overhead. With a dedicated basic Admin Panel, you gain direct control over your content, ensuring you stay ready for audits and compliance checks at a moment's notice. We tailor our services to fit your specific industry quirks, providing customized designs that resonate with your target demographic. From medical record digitization to corporate portfolios, we ensure your digital records are just a click away with our cloud-integrated storage options, enabling your team to work faster and more efficiently from anywhere in the world.`,
    },
    {
      id: "ecommerce",
      name: "E - commerce website Plan", 
      oldPrice: "₹ 30,000",
      price: "₹ 21,999",
      icon: <Zap className="w-6 h-6" />,
      images: [
         "assets/lap.png",
        "assets/lap1.png",
        "assets/get.png",
        "assets/get1.png",
        "assets/get2.png",
      ],
      shortDesc: "A high-performance solution for e-commerce stores requiring payment gateways and SEO optimization.",
      capabilities: [
        "Free Hosting 1 Yr", "Free .IN Domain 1 Yr", "Admin Panel", "Customized Designs", 
        "Free Base SEO - 1 Yr", "Customized Panels", "Unlimited Products & Category", 
        "FB & Insta Integration", "Payment Gateway", "Shipping Integration", 
        "WhatsApp Chat", "1 Yr Support", "Google Analytical"
      ],
      description: `Transition your brand from a physical storefront to a powerful, high-conversion digital marketplace with our E-commerce Plan. Inotriz Global handles all technical complexities—from unlimited product categories to secure payment gateway and shipping integrations—ensuring a hassle-free shopping experience for your customers. We move your business into the fast lane of global trade by providing a fully searchable digital database of your inventory, powered by high-end equipment and meticulous data organization. 

Our e-commerce architecture is built on a foundation of performance and security, including free Base SEO for one year to ensure your products appear at the top of search results. We provide a robust Admin Panel that allows you to manage bulk volume orders and track shipping status in real-time. By going digital, you save significant money and space by ditching physical storage and moving to secure digital archiving. This plan is designed to handle mountains of paperwork and product data, converting them into searchable, editable files that work across all your software systems. We figure out exactly what your store needs to scale, delivering a preferred digital format that makes document and product management easy.`,
    },
    {
      id: "premium-ecommerce",
      name: "Premium E - commerce website Plan",
      oldPrice: "₹ 75,000",
      price: "₹ 49,999",
      icon: <Crown className="w-6 h-6" />,
      images: [
        "assets/ifash.png",
        "assets/ifash1.png",
        "assets/ifash2.png",
        "assets/das.png",
        "assets/das1.png",
        "assets/das2.png",
      ],
      shortDesc: "Fully bespoke web applications with global scalability and advanced marketing features.",
      capabilities: [
        "Free Hosting 1 Yr", "Free .COM Domain 1 Yr", "Mail ID Company Name", "Premium SEO - 1 Yr", 
        "Inventory & Admin Panel", "Premium Designs", "Premium Theme", "Unlimited Pages", 
        "Unlimited Products", "Unlimited Category", "FB & Insta Integration", "Payment Gateway", 
        "Shipping Integration", "WhatsApp Chat", "Affiliate Marketing", "1 Yr Support", "Google Analytical"
      ],
      description: `The Premium E-commerce Plan is our most robust digital solution, designed for enterprises looking to dominate their industry on a global scale. This plan offers a complete synergy of business consulting, marketing, and global trade solutions, featuring bespoke web applications that are fully scalable. We provide a free .COM domain and professional company-branded email IDs to establish maximum authority in your market. With Premium SEO services, we ensure your brand maintains a dominant presence across global search engines for the long term. 

This enterprise-grade plan includes advanced Inventory and Admin Panels, tailored specifically for high-volume transactions and complex data management. We integrate Affiliate Marketing capabilities, allowing you to expand your sales force exponentially through digital partnerships. Our expert team utilizes advanced OCR and indexing to ensure every piece of data in your unlimited page structure is fully searchable and secure. From secure digital archiving to medical-grade record digitization, we specialize in maintaining private, accurate data that stays compliant with international industry rules. This is more than a website; it is a full-scale digital transformation that enables you to share and collaborate easily, ensuring no more lost files and a truly paperless, green office environment.`,
    },
  ];

  return (
    <section id="websites" className="py-20 px-6 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 prose prose-xl prose-invert prose-serif">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm no-underline">Our Packages</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 text-white">Simple & Transparent <strong className="text-[#ff4d00]">Website</strong> Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            // Updated logic: High-contrast glow on 2nd (index 1) and 4th (index 3) cards
            const isGlowCard = index === 1 || index === 3;

            return (
              <div 
                key={service.id} 
                className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 flex flex-col items-start 
                  ${isGlowCard 
                    ? "border-orange-500 bg-white/10 shadow-[0_0_25px_rgba(255,77,0,0.25)] ring-1 ring-orange-500/50" 
                    : "border-white/20 bg-white/[0.07]"}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/10 text-red-500`}>
                  {service.icon}
                </div>
                
                <div className="prose prose-serif prose-invert prose-lg mb-2 align-top w-full">
                  <h3 className="text-xl font-serif text-white whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                      {service.name}
                  </h3>
                </div>

                <div className="flex flex-col mb-4">
                  <span className="text-gray-500 line-through text-sm font-medium">{service.oldPrice}</span>
                  <span className="text-orange-500 text-2xl font-bold">{service.price}</span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {service.shortDesc}
                </p>

                <button 
                  onClick={() => setSelectedService(service)} 
                  className="w-full mt-8 py-3 rounded-xl bg-[#ff4d00] text-white font-bold hover:bg-[#e64500] transition-all text-sm shadow-lg shadow-orange-900/40"
                >
                  Enquiry Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MODAL POPUP --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white text-black w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl relative shadow-2xl flex flex-col">
            
            {/* Header Sticky */}
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center bg-red-50 text-red-600">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-3xl font-serif font-medium text-gray-900">
                    {selectedService.name}
                  </h2>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* GLOW GOLD RATE CARD */}
                  <span className="bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B8860B] text-white px-6 py-3 rounded-xl font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      {selectedService.price}
                  </span>
                    
                  {/* GREEN WHATSAPP BUTTON */}
                  <a 
                      href={whatsappLink}
                      target="_blank" rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-[#20ba5a] transition-all"
                  >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      Whatsapp
                  </a>
                  
                  <button onClick={() => setSelectedService(null)} className="p-2 text-gray-400 hover:text-red-600 transition-all ml-2">
                    <X className="w-7 h-7" />
                  </button>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto grid md:grid-cols-[1fr,450px] relative">
              
              {/* Content Side (Left) */}
              <div className="p-10 md:p-14">
                {/* KEY CAPABILITIES */}
                <div className="mb-12">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-3">Key Capabilities:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedService.capabilities.map((capability: string) => (
                            <div key={capability} className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-3 rounded-xl">
                                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <span className="text-[13px] font-medium text-gray-800 leading-tight">
                                    {capability}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description Text */}
                <div className="prose prose-sm prose-serif max-w-none text-gray-600 leading-relaxed mb-12">
                  <p className="font-bold text-gray-900 mb-2">{selectedService.name} Services by Inotriz Global</p>
                  <p className="whitespace-pre-line">{selectedService.description}</p>
                </div>
              </div>

              {/* IMAGE COLUMN (Right Side Center, Sticky Content) */}
              <div className="hidden md:flex flex-col justify-center items-center gap-8 p-10 bg-gray-50 border-l border-gray-100 sticky top-0 h-full overflow-hidden">
                {selectedService.images.map((imgUrl: string, index: number) => (
                  <div key={index} className="w-full rounded-2xl overflow-hidden shadow-xl bg-white transform hover:scale-[1.02] transition-transform">
                    <img 
                      src={imgUrl} 
                      alt={`${selectedService.name} preview`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
            
            {/* Footer Sticky */}
            <div className="p-6 bg-white border-t border-gray-100">
               <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all"
                >
                  Close Details
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebServices;