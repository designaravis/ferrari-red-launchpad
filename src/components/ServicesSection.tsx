import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Briefcase,
  Globe2,
  Code,
  Palette,
  Megaphone,
  TrendingUp,
  ArrowUpRight,
  X,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Strategic planning, market analysis, competitive positioning, and operational optimization.',
    features: ['Business Planning', 'Market Analysis', 'Growth Frameworks'],
    color: 'primary',
    fullImageUrl: '/assets/BUSS.png',
    detailedDescription: `<b style="color: black; font-size: 1.25rem;">Business Consulting & Strategy by Inotriz Global</b> 
    
    At Inotriz Global, we redefine how businesses scale in a competitive world. Our consulting isn't just advice; it’s a blueprint for sustainable growth. We bridge the gap between complex market challenges and profitable results by analyzing your core operations and identifying hidden bottlenecks instantly. Our team specializes in global market entry and operational excellence, empowering leadership with data-driven insights to make bolder decisions. Whether you are a startup or an enterprise, we focus on digital transformation to turn your vision into a scalable, high-performing reality.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">How We Work: Our Proven 4-Phase Methodology</b>

<div style="margin-top: 1rem;">
  <b style="color: black;">Phase 1: Deep-Dive Discovery</b>
  <p>We begin by auditing your current workflows and organizational health. This phase uncovers the "why" behind your most persistent challenges.</p>
</div>

<div style="margin-top: 1rem;">
  <b style="color: black;">Phase 2: Strategic Blueprinting</b>
  <p>We design a custom roadmap aligned with international industry standards. Every strategy is built to minimize risk while maximizing resource output.</p>
</div>

<div style="margin-top: 1rem;">
  <b style="color: black;">Phase 3: Agile Implementation</b>
  <p>Our consultants work alongside your team to execute the new strategy. We provide the tools and training necessary for a seamless transition, ensuring change is adopted, not resisted.</p>
</div>

<div style="margin-top: 1rem;">
  <b style="color: black;">Phase 4: Continuous Optimization</b>
  <p>We don’t just walk away once the plan is launched; we monitor data and track KPIs. We refine the process based on real-world feedback and market shifts to meet your ROI goals.</p>
</div>

<p style="margin-top: 1.5rem;">Partner with Inotriz Global to transform your business into a global leader.</p>`,
  },
  {
    icon: Megaphone,
    title: 'Document scanning & Digitalization',
    description: 'Scan and digitization services, quick, secure, and speedy scanning services, and analytics-driven optimization.',
    features: ['Document Scanning', 'Bulk Volume Scanning', 'Secure Digital Archiving',],
    color: 'secondary',
    fullImageUrl: '/assets/scan.jpeg',
    detailedDescription: `<b style="color: black; font-size: 1.25rem;">Document Scanning & Digitalization Services by Inotriz Global</b> 
    
    Looking to move your business from endless paperwork to a secure, digital world? Inotriz Global Private Limited helps you do just that. We offer top-notch document scanning and digitalization services for businesses, healthcare, schools, finance, and even government offices. You get a simple, secure way to manage your records digitally—no more hunting through file cabinets or worrying about lost paperwork.

Our digital solutions make your files easy to find, keep your data safe, cut down on storage costs, and help your team work faster. Need to scan a huge stack of documents, digitize medical records, convert old archives, or just store everything in the cloud? We handle it all—quickly, accurately, and without hassle.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Why Inotriz Global Private Limited?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Skilled Team:</b> Our experts know how to scan everything—from contracts to handwritten notes—and make sure every page looks sharp and clear.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Safe and Private:</b> We take your privacy seriously. Your documents are protected with strong encryption and stored in secure systems.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Fast Turnaround:</b> Got thousands of documents to scan? No problem. We work fast and keep your daily operations running smoothly.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Custom Solutions:</b> Every industry has its quirks. We tailor our services to fit your specific needs.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Easy Cloud Access:</b> Wherever you are, your digital records are just a click away with our cloud storage options.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Our Document Scanning Services</b>
<ol style="list-style-type: decimal; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Document Scanning:</b> We turn your paper documents into searchable digital files—contracts, invoices, legal records, admin files, you name it. Get them in formats like PDF, TIFF, JPEG, or editable files you can actually use.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Bulk & Large Volume Scanning:</b> If you have mountains of paperwork, we’re ready. We digitize large archives and organize everything into searchable databases.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">OCR & Indexing:</b> With advanced OCR, your scanned documents aren’t just pictures—they’re fully searchable and editable. We index everything so you can find what you need in seconds.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Secure Digital Archiving:</b> Long-term storage, compliance, disaster recovery—your digital files are safe and ready when you need them.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">File Conversion:</b> PDF to Word, images to PDFs, handwritten notes to digital files—we make your documents work across all your software.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Medical Record Digitization:</b> We specialize in healthcare records. Patient data stays private, accurate, and always compliant with industry rules.</span></li>
</ol>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Why Go Digital?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;">Find documents fast—stop wasting time searching</span></li>
  <li><span style="color: #4b5563;">Save money and space by ditching paper storage</span></li>
  <li><span style="color: #4b5563;">Keep your data secure and backed up</span></li>
  <li><span style="color: #4b5563;">Stay ready for audits and compliance checks</span></li>
  <li><span style="color: #4b5563;">Share and collaborate easily—no more lost files</span></li>
  <li><span style="color: #4b5563;">Go green with a paperless office</span></li>
</ul>

<p style="margin-top: 1rem;"><b style="color: black;">Industries We Help:</b> Healthcare, Legal, Finance, Education, and Government.</p>

<p style="margin-top: 1rem;"><b style="color: black;">How It Works:</b> We figure out what you need, scan with high-end equipment, run OCR for searching, and deliver in your preferred digital format. Reach out today—we’re here to make document digitization easy.</p>`,
  },
  {
    icon: Globe2,
    title: 'Scanning & OCR Services',
    description: 'Advanced Optical Character Recognition services to turn paper into searchable, editable digital files.',
    features: ['Top-Notch OCR Tech', 'Crystal-Clear Scanning', 'Serious Security'],
    color: 'primary',
    fullImageUrl: '/assets/ocr.jpeg',
    detailedDescription: `<b style="color: black; font-size: 1.25rem;">Scanning & OCR Services | Inotriz Global</b>
   
    Smart Document Digitization & OCR for Today’s Businesses. Let’s face it—businesses are buried in paperwork these days. Keeping track of everything, finding what you need, or just making sure nothing gets lost can eat up a lot of time. That’s where Inotriz Global Private Limited steps in. We offer advanced Scanning and OCR (Optical Character Recognition) services that turn your stacks of paper into searchable, editable digital files you can actually use.

With our help, you can finally move away from paper-heavy systems. Your documents become easy to find, simple to manage, and secure. It saves time, cuts down on errors, and just makes day-to-day work smoother, no matter your industry.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">What Are Scanning & OCR Services?</b>
In simple terms: scanning creates digital images of your documents, and OCR technology reads those images and pulls out the text, making it editable and searchable. So instead of digging through piles of paper, you can search for a word or phrase and find what you need in seconds. We use the latest scanning equipment and smart OCR tools to make sure your documents are converted accurately. Plus, your information stays safe throughout the process.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Why Work with Inotriz Global Private Limited?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Industry Know-How:</b> Our team knows the ins and outs of document management for a wide range of industries.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Top-Notch OCR Tech:</b> We use advanced recognition systems that can read through all sorts of documents, no matter the layout or font.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Crystal-Clear Scanning:</b> With our high-quality scanners, your digital images are sharp and distortion-free.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Serious About Security:</b> We follow strict security protocols to keep your info protected.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Quick Turnaround:</b> Our streamlined workflow means we process batches fast without cutting corners.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Cost-Effective:</b> Going digital cuts down on physical storage and reduces manual work.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">How Our Scanning & OCR Process Works</b>
<ol style="list-style-type: decimal; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Assessment:</b> We assess your documents to plan the best way to digitize them.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Preparation:</b> Our team removes staples and bindings.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">High-Res Scanning:</b> We create clear digital images.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">OCR Transformation:</b> Software transforms images into searchable text.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Indexing & Storage:</b> Files get organized and stored securely.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Delivery:</b> You get your digitized documents in PDF, Word, or spreadsheet formats.</span></li>
</ol>

<p style="margin-top: 1rem;"><b style="color: black;">Who Benefits?</b> Healthcare, Legal & Finance, Education, and Business & Retail. Ready to Go Paperless? Get in touch with us today and turn your files into secure, intelligent digital assets.</p>`,
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description: 'Ecommerce development, automated systems, LMS solutions, and custom applications.',
    features: ['Custom Online Stores', 'Mobile-First Design', 'Secure Payments'],
    color: 'secondary',
    fullImageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200',
    detailedDescription: `<b style="color: black; font-size: 1.25rem;">Ecommerce Website Development Services | Inotriz Global</b>
    
    Build Powerful Online Stores That Actually Grow Your Business. These days, if you want your business to grow, you need a sharp, professional online store. That’s where Inotriz Global Private Limited steps in. We build ecommerce websites that are secure, flexible, and easy for both you and your customers to use.

We’re all about creating online stores that make shopping smooth and enjoyable. But it’s not just about the customer — we help you run your business more efficiently, too. Whether you’re starting fresh or looking to upgrade, we tailor every solution to fit your goals.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">What Does Ecommerce Website Development Really Mean?</b>
In simple terms, ecommerce website development is all about designing and building sites where your business can sell online. The best ecommerce websites look good, work fast, and make the whole experience — from browsing to buying — feel effortless for your customers. At Inotriz Global Private Limited, we focus on building platforms that look professional and run smoothly.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Why Pick Inotriz Global Private Limited for Your Ecommerce Site?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Custom Solutions:</b> Built around you. Your online store matches your brand and fits your specific needs.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Mobile-First, Always Responsive:</b> We make sure your store looks great and works perfectly on every device.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Simple, Intuitive Design:</b> We design layouts that make it easy for customers to find what they want and check out fast.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Smart Features:</b> Powerful search, streamlined carts, secure payment options, inventory tools, and customer accounts.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Speed and Performance:</b> We build fast-loading pages so customers stick around and your site gets noticed.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Security and Scalability:</b> Safe payment processing and a platform that grows alongside your business.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">What Do You Get From a Great Ecommerce Website?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;">Reach More Customers globally.</span></li>
  <li><span style="color: #4b5563;">Sell Around the Clock (24/7).</span></li>
  <li><span style="color: #4b5563;">Connect With Your Customers via personalized recommendations.</span></li>
  <li><span style="color: #4b5563;">Smarter Marketing and Better Business Insights with real data.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">How We Build Your Website:</b>
<ol style="list-style-type: decimal; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;">Consultation and Planning.</span></li>
  <li><span style="color: #4b5563;">Design and Development.</span></li>
  <li><span style="color: #4b5563;">Testing and Launch.</span></li>
  <li><span style="color: #4b5563;">Ongoing Support.</span></li>
</ol>
<p style="margin-top: 1rem;">Ready to take your online business to the next level? We’re ready to help you get there.</p>`,
  },
  {
    icon: Palette,
    title: 'Design Services',
    description: 'Logo design, branding, video animation, packaging, and marketing collateral.',
    features: ['Logo Design', 'Branding & Identity', 'UX/UI Design'],
    color: 'primary',
    fullImageUrl: '/assets/design.jpeg', 
    detailedDescription: `<b style="color: black; font-size: 1.25rem;">Creative Design Services | Inotriz Global</b>
   
    Make your brand impossible to ignore. At Inotriz Global Private Limited, we don’t just design—we help businesses build a visual identity that actually means something. In a world where everyone’s fighting for attention, good design grabs people, earns trust, and keeps your brand on their minds.

Our team blends creativity with strategy. We get to know your goals, then craft visuals that match your vision and drive your brand forward. Whether you’re just starting out, refreshing your image, or leveling up your digital presence, we create custom solutions that help your business stand out.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Why partner with us?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Creative expertise:</b> Our designers think about your business goals and message.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Tailored for you:</b> No two businesses are the same; we shape designs to match your personality.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Everything under one roof:</b> Branding, digital design, print, and UI.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">On time, every time:</b> We stick to deadlines without cutting corners.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Premium design, fair prices:</b> Quality work accessible to startups and enterprises alike.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Our design services:</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Logo design:</b> Modern, memorable logos that tell your story.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Branding & corporate identity:</b> Polished palettes, typography, and style guides.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Website design:</b> Responsive, user-friendly sites that keep visitors engaged.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Print design:</b> Brochures, cards, posters, and packaging that communicate clearly.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">UX/UI design:</b> Digital experiences that are easy to use and enjoyable.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Digital & social media design:</b> Eye-catching visuals for social posts and ads.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">How we work:</b>
<ol style="list-style-type: decimal; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;">Consultation.</span></li>
  <li><span style="color: #4b5563;">Concept development.</span></li>
  <li><span style="color: #4b5563;">Design execution.</span></li>
  <li><span style="color: #4b5563;">Feedback & refinement.</span></li>
  <li><span style="color: #4b5563;">Final delivery in all formats.</span></li>
</ol>

<p style="margin-top: 1rem;">Why design matters? It builds recognition, earns trust, keeps people engaged, and ensures your message is clear. Let’s bring your vision to life with design that makes an impact.</p>`,
  },
  {
    icon: TrendingUp,
    title: 'Digital Services',
    description: 'SEO, paid campaigns, social media marketing, and performance optimization.',
    features: ['Web Development', 'Search Visibility', 'Social Media Management'],
    color: 'secondary',
    fullImageUrl: '/assets/digital.jpeg',
    detailedDescription: `<b style="color: black; font-size: 1.25rem;">Digital Services | Inotriz Global</b>
    
    Take your business further with smart digital solutions. Let’s face it—if you want to succeed these days, you need more than just a website. You need to stand out online, reach the right people, and keep them coming back. That’s where we come in. At Inotriz Global Private Limited, we help businesses grow, connect with customers, and build lasting visibility with a full range of digital services.

We’re here to boost your performance, strengthen your brand, and help you engage your audience across digital platforms. Whether you want a better website, a bigger audience, or stronger customer relationships, our team builds strategies that fit your goals.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">What Exactly Are Digital Services?</b>
In a nutshell, digital services are tech-powered tools that help you build, manage, and grow your online presence. At Inotriz Global Private Limited, we blend creativity, technology, and strategy to help you stay ahead in the ever-changing digital world.

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Why Work with Inotriz Global Private Limited?</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">All-in-One Digital Solutions:</b> From building your foundation to connecting with customers.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">A Business-First Mindset:</b> Strategies designed around your brand and vision.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Tech That Keeps You Ahead:</b> Latest tools and technologies for modern solutions.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">We Deliver Results:</b> We track, refine, and optimize to see real improvements.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Affordable and Flexible:</b> Services that scale with your needs.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Our Digital Services:</b>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;"><b style="color: black;">Website Design & Development:</b> Responsive, storefront sites for any device.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Search Visibility & Optimization (SEO):</b> Helping people find you online.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Content & Digital Communication:</b> Content that informs, entertains, and connects.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Digital Marketing:</b> Targeted campaigns to turn clicks into customers.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Social Media Management:</b> Building lasting relationships with your followers.</span></li>
  <li><span style="color: #4b5563;"><b style="color: black;">Brand & Reputation Management:</b> Keeping your brand image strong and trusted.</span></li>
</ul>

<b style="color: black; font-size: 1.1rem; display: block; margin-top: 1.5rem;">Our Process:</b>
<ol style="list-style-type: decimal; margin-left: 1.5rem; margin-top: 0.5rem; color: black;">
  <li><span style="color: #4b5563;">Conversation.</span></li>
  <li><span style="color: #4b5563;">Game Plan.</span></li>
  <li><span style="color: #4b5563;">Execution.</span></li>
  <li><span style="color: #4b5563;">Optimization.</span></li>
  <li><span style="color: #4b5563;">Updates.</span></li>
</ol>
<p style="margin-top: 1rem;">Let’s unlock new opportunities and build a stronger digital future together.</p>`,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeService]);

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-lg block mb-4 md:mb-7 leading-none">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-black">
            Comprehensive Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mt-2">
            From strategy to execution, we provide end-to-end services to help your business 
            thrive in domestic and international markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setActiveService(service)}
            >
              <div className="h-full bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-all duration-300 relative z-10 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  <service.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black relative z-10">{service.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 relative z-10 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8 relative z-10">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 text-[10px] md:text-xs font-semibold bg-muted rounded-full text-muted-foreground">{feature}</span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-bold text-base md:text-lg group/link relative z-10">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 50 }}
              className="bg-white rounded-t-[2.5rem] md:rounded-[3rem] p-6 md:p-14 max-w-6xl w-full relative z-[110] shadow-2xl overflow-y-auto h-[95vh] md:h-auto max-h-[95vh] md:max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveService(null)} 
                className="absolute top-6 right-6 md:top-8 md:right-8 text-muted-foreground hover:text-black transition-colors z-[120] bg-white/80 p-1 rounded-full backdrop-blur-sm"
              >
                <X className="w-8 h-8 md:w-10 md:h-10" />
              </button>
              
              <div className="mb-8 md:mb-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pb-6 border-b border-border">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <activeService.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h2 className="font-display text-2xl md:text-5xl lg:text-6xl font-bold text-black leading-tight break-words">{activeService.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start">
                <div className="lg:hidden w-full">
                   <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border">
                      <img 
                        src={activeService.fullImageUrl}
                        alt={activeService.title}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-6 md:space-y-8">
                  <div className="prose prose-lg max-w-none">
                    <div 
                      className="text-muted-foreground text-base md:text-xl leading-relaxed whitespace-pre-line text-justify break-words"
                      dangerouslySetInnerHTML={{ __html: activeService.detailedDescription }} 
                    />
                  </div>
                  
                  <div className="pt-6 md:pt-8 space-y-4 md:space-y-5">
                    <h4 className="font-bold text-black uppercase tracking-widest text-xs md:text-sm">Key Capabilities:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {activeService.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/60 rounded-xl">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                          <span className="font-medium text-black text-base md:text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block lg:col-span-2 lg:sticky lg:top-0">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl border border-border">
                    <motion.img 
                      src={activeService.fullImageUrl}
                      alt={activeService.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setActiveService(null)} 
                className="w-full mt-10 md:mt-14 py-4 md:py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 text-base md:text-lg"
              >
                Close Details
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;