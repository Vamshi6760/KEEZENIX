
import { Link } from "react-router-dom";
import {
  Code2, BrainCircuit, Users, Briefcase, GraduationCap,
  ArrowRight, ChevronRight, BookOpen, Star, Target, ShieldCheck,
  TrendingUp, Laptop, CheckCircle2, PlayCircle, Rocket
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/herobg.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import appDevImg from "@/assets/app-dev.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import recruitmentImg from "@/assets/recruitment.jpg";
import aboutOfficeImg from "@/assets/about-office.jpg";

import comcastLogo from "@/assets/comcast.jpg";
import dupontLogo from "@/assets/dupont.jpg";
import cienaLogo from "@/assets/ciena.png";
import caterpillarLogo from "@/assets/caterpillar.jpg";
import cdwLogo from "@/assets/cdw.png";
import servicenowLogo from "@/assets/servicenow.jpg";

const clients = [
  { name: "Comcast", logo: comcastLogo },
  { name: "DuPont", logo: dupontLogo },
  { name: "Ciena", logo: cienaLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "CDW", logo: cdwLogo },
  { name: "ServiceNow", logo: servicenowLogo },
];

const programs = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Master modern web frameworks like React, Node.js, and build full-stack applications.",
    color: "from-blue-500/10 to-indigo-600/10",
    iconColor: "text-blue-600",
    img: webDevImg,
    tag: "High Demand",
  },
  {
    icon: BrainCircuit,
    title: "AI & Prompt Engineering",
    desc: "Dive into generative AI, learn advanced prompt engineering, and build AI solutions.",
    color: "from-purple-500/10 to-fuchsia-500/10",
    iconColor: "text-purple-600",
    img: appDevImg,
    tag: "Trending",
  },
  {
    icon: Users,
    title: "Recruitment Training",
    desc: "Learn end-to-end talent acquisition strategies and HR technology tools.",
    color: "from-teal-500/10 to-emerald-500/10",
    iconColor: "text-teal-600",
    img: recruitmentImg,
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    desc: "Intensive preparation focused on soft skills, interview cracking, and career growth.",
    color: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600",
    img: digitalMarketingImg,
  },
  {
    icon: Briefcase,
    title: "Internship Programs",
    desc: "Get practical experience with real-world projects and mentorship.",
    color: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-600",
    img: webDevImg,
  },
];

const benefits = [
  { icon: Laptop, title: "Practical Learning", desc: "Learn by doing with hands-on exercises." },
  { icon: Briefcase, title: "Real-world Projects", desc: "Build a portfolio of industry-grade projects." },
  { icon: Star, title: "Resume Building", desc: "Craft a resume that stands out to recruiters." },
  { icon: Target, title: "Mock Interviews", desc: "Practice with industry experts." },
  { icon: ShieldCheck, title: "Internship Support", desc: "Assistance in securing valuable internships." },
  { icon: TrendingUp, title: "Placement-focused", desc: "Training designed to get you hired." },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50 font-sans">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden flex items-center min-h-[90vh] bg-indigo-950">
        <div className="absolute inset-0 bg-[url('@/assets/herobg.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 opacity-90" />
        
        {/* Decorative Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-teal-500/20 rounded-full blur-[120px]" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-up">
                <GraduationCap size={18} /> Empowering Future Leaders
              </span>
              <h1 className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-up-delay-1">
                Learn Skills That <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Accelerate Your Career
                </span>
              </h1>
              <p className="text-indigo-100/90 text-lg md:text-xl mt-6 leading-relaxed animate-fade-up-delay-2 max-w-xl mx-auto lg:mx-0 font-medium">
                Master Web Development, AI & Prompt Engineering, Recruitment Training, and join our Internship Programs to become job-ready.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start animate-fade-up-delay-3">
                <Link to="/register" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Start Learning <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-indigo-300 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-800/50 hover:border-white transition-all flex items-center justify-center">
                  Explore Programs
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-12 animate-fade-up-delay-3 text-white/80 text-sm font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-950 bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>Over <strong className="text-white">10,000+</strong> students enrolled</div>
              </div>
            </div>

            {/* Right: Floating UI Elements */}
            <div className="relative hidden lg:flex justify-center items-center h-[550px]">
              <div className="animate-float absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl w-80 z-20 top-20 right-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-inner">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Job Ready</p>
                    <p className="text-indigo-200 text-xs font-medium">95% Placement Rate</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 rounded-full bg-white/20"><div className="h-full bg-teal-400 w-11/12 rounded-full" /></div>
                  <div className="h-2 rounded-full bg-white/20"><div className="h-full bg-blue-400 w-3/4 rounded-full" /></div>
                </div>
              </div>
              
              <div className="animate-float absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl w-72 z-10 bottom-20 left-0" style={{ animationDelay: "1s" }}>
                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-inner">
                    <PlayCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Live Classes</p>
                    <p className="text-indigo-200 text-xs font-medium">Learn from experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Hiring Partners ─── */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Our Students Work At Top Companies
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex gap-12 animate-scroll whitespace-nowrap items-center">
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div key={i} className="flex items-center justify-center min-w-[150px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img src={client.logo} alt={client.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Courses / Programs Section ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">Our Programs</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Industry-aligned programs designed to give you the practical skills needed to thrive in today's landscape.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection delay={i * 100} key={program.title}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group border border-slate-100 h-full flex flex-col hover:-translate-y-2">
                  <div className="p-6 pb-0">
                     <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${program.color} group-hover:scale-110 transition-transform`}>
                        <program.icon size={26} className={program.iconColor} />
                      </div>
                  </div>
                  <div className="px-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-teal-600 transition-colors">{program.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{program.desc}</p>
                  </div>
                  <div className="p-6 pt-0 mt-auto border-t border-slate-50">
                     <Link to="/register" className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-4">
                      Enroll Now <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Learn With Us ─── */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
               <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-6 leading-tight">
                Why Learn With <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Us?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                We bridge the gap between academic learning and industry requirements, ensuring you get the mentorship and practical experience needed to stand out.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Industry-focused curriculum designed by experts.",
                  "Hands-on projects to build your real-world portfolio.",
                  "1-on-1 Mentor support for continuous guidance.",
                  "Career guidance to help you land your dream job.",
                  "Intensive interview preparation and mock sessions."
                ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="mt-1 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 size={16} className="text-teal-600" />
                     </div>
                     <span className="text-slate-700 font-medium text-lg">{item}</span>
                   </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                 <img src={aboutOfficeImg} alt="Students Learning" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                   <p className="text-white text-xl font-bold">Join a thriving community of tech learners.</p>
                 </div>
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Career Growth Journey ─── */}
      <section className="py-24 bg-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('@/assets/tech-bg.jpg')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
           <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Your Career Growth Journey</h2>
              <p className="text-lg text-indigo-200 max-w-2xl mx-auto font-medium">
                A structured path from learning fundamentals to landing your dream job.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
             {/* Line connector */}
             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-800 -translate-y-1/2" />
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { step: "01", title: "Learn Skills", desc: "Master the latest technologies and tools." },
                 { step: "02", title: "Build Projects", desc: "Apply knowledge to real-world scenarios." },
                 { step: "03", title: "Prepare for Interviews", desc: "Resume building and mock interviews." },
                 { step: "04", title: "Get Job Ready", desc: "Land internships and full-time roles." }
               ].map((item, i) => (
                 <AnimatedSection delay={i * 150} key={item.step}>
                   <div className="relative bg-white rounded-2xl p-8 shadow-xl text-center group hover:-translate-y-2 transition-all duration-300 border-b-4 border-teal-500">
                     <div className="w-16 h-16 rounded-full bg-indigo-100 border-4 border-white flex items-center justify-center text-indigo-700 font-black text-xl shadow-lg mx-auto mb-6 relative md:-mt-16 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                       {item.step}
                     </div>
                     <h4 className="text-xl font-bold text-indigo-950 mb-3">{item.title}</h4>
                     <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                   </div>
                 </AnimatedSection>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ─── Student Benefits ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
           <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-4">Student Benefits</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Everything you need to succeed in your career transition.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection delay={i * 100} key={benefit.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors">
                     <benefit.icon size={24} className="text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-indigo-950 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final Call To Action ─── */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-indigo-950 to-purple-900 rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]" />
               
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 relative z-10">
                 Ready to Build Your <span className="text-teal-400">Future?</span>
               </h2>
               <p className="text-xl text-indigo-100 mb-10 font-medium max-w-2xl mx-auto relative z-10">
                 Join thousands of learners accelerating their careers with our industry-leading programs.
               </p>
               <div className="relative z-10">
                 <Link to="/register" className="inline-flex bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)] transition-all hover:-translate-y-2 items-center justify-center gap-3">
                   Join Our Programs <ArrowRight size={24} />
                 </Link>
               </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
