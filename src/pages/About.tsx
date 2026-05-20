import { Link } from "react-router-dom";
import {
  Target, Eye, Lightbulb, Heart, TrendingUp, Globe, Shield,
  ArrowRight, CheckCircle2, PlayCircle, MonitorPlay, Users, BookOpen
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutOfficeImg from "@/assets/about-office.jpg";

const values = [
  { icon: Lightbulb, title: "Beginner-friendly", desc: "Courses tailored for all skill levels." },
  { icon: MonitorPlay, title: "Practical projects", desc: "Build real apps to show employers." },
  { icon: Users, title: "Mentor support", desc: "Guidance from industry professionals." },
  { icon: TrendingUp, title: "Career-focused", desc: "Curriculum designed around what companies need." },
  { icon: Target, title: "Interview preparation", desc: "Nail your technical and HR rounds." },
  { icon: Shield, title: "Trusted Platform", desc: "Recognized for quality technical education." },
];

const offerings = [
  { title: "Web Development Training", desc: "Master frontend and backend technologies to build scalable web applications." },
  { title: "AI & Prompt Engineering", desc: "Learn to integrate and prompt state-of-the-art AI models effectively." },
  { title: "Recruitment Training", desc: "Gain the skills needed to become a successful tech recruiter." },
  { title: "Internship Programs", desc: "Get hands-on experience through structured, mentor-led internships." },
  { title: "Career Acceleration", desc: "Fast-track your job search with dedicated coaching and resume support." }
];

const About = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50 font-sans">
      {/* ─── Page Hero ─── */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-indigo-950">
        <div className="absolute inset-0 bg-[url('@/assets/herobg.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 opacity-95" />
        
        {/* Decorative Orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]" />
        
        <AnimatedSection>
          <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-white font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-md">
              Empowering Students With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Future-Ready Skills</span>
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              We help you learn Web Development, AI, Prompt Engineering, and Recruitment Training to accelerate your career and make you job-ready.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Our Mission ─── */}
      <section className="py-24 bg-white relative z-20 -mt-10">
        <div className="container max-w-6xl mx-auto px-4">
           <AnimatedSection>
              <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-10 md:p-14 shadow-2xl text-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('@/assets/tech-bg.jpg')] opacity-10 mix-blend-overlay" />
                 <div className="relative z-10">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                     <Target size={32} />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Our Mission</h2>
                   <p className="text-white/90 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                     To equip students with practical skills, build their confidence, and ensure complete career readiness in an ever-evolving tech landscape.
                   </p>
                 </div>
              </div>
           </AnimatedSection>
        </div>
      </section>

      {/* ─── What We Offer ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-indigo-950 mb-4">What We Offer</h2>
              <p className="text-lg text-slate-600 font-medium">Comprehensive programs designed for your success.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {offerings.map((offer, i) => (
                <AnimatedSection delay={i * 100} key={offer.title}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full hover:-translate-y-2 group">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                      <BookOpen size={24} className="text-indigo-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-indigo-950 mb-3">{offer.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{offer.desc}</p>
                  </div>
                </AnimatedSection>
             ))}
          </div>
        </div>
      </section>

      {/* ─── Why Students Choose Us ─── */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-indigo-950 mb-4">Why Students Choose Us</h2>
              <p className="text-lg text-slate-600 font-medium">The foundation of our platform is built on student success.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                    <value.icon size={28} className="text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm font-medium">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Student Journey ─── */}
      <section className="py-24 bg-indigo-950 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-white mb-4">Your Student Journey</h2>
              <p className="text-lg text-indigo-200 font-medium">A proven timeline to achieve your career goals.</p>
            </div>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-800 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { label: "Enroll", desc: "Join the program." },
                { label: "Learn", desc: "Attend live classes." },
                { label: "Practice", desc: "Hands-on exercises." },
                { label: "Build Portfolio", desc: "Create real projects." },
                { label: "Become Career Ready", desc: "Ace the interviews." }
              ].map((step, i) => (
                <AnimatedSection delay={i * 150} key={step.label}>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg relative border-t-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-indigo-950 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative lg:-mt-10 border-4 border-white shadow-md group-hover:bg-orange-500 transition-colors">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-indigo-950 mb-2">{step.label}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Page CTA ─── */}
      <section className="py-24 bg-slate-50">
         <div className="container max-w-4xl mx-auto px-4 text-center">
           <AnimatedSection>
             <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6">Start Your Learning Journey Today</h2>
             <p className="text-xl text-slate-600 mb-10 font-medium">
               Take the first step towards a rewarding tech career.
             </p>
             <Link to="/courses" className="inline-flex bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-2 items-center justify-center gap-3">
               Explore Courses <ArrowRight size={24} />
             </Link>
           </AnimatedSection>
         </div>
      </section>
    </div>
  );
};

export default About;
