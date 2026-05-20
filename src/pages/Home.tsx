import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Code2, Smartphone, TrendingUp, Users, CheckCircle2,
  ArrowRight, Zap, Shield, Globe, Star,
  ChevronRight, Briefcase, Award, Clock, BookOpen, BrainCircuit, GraduationCap
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/herobg.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import appDevImg from "@/assets/app-dev.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import recruitmentImg from "@/assets/recruitment.jpg";

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
    title: "Web & App Development",
    desc: "Master modern frameworks like React, Node.js, and build scalable web applications from scratch.",
    color: "from-indigo-500/10 to-blue-600/10",
    iconColor: "text-indigo-600",
    img: webDevImg,
    tag: "Most Popular",
  },
  {
    icon: BrainCircuit,
    title: "AI & Prompt Engineering",
    desc: "Dive into generative AI, learn prompt engineering, and build AI-powered solutions.",
    color: "from-purple-500/10 to-fuchsia-500/10",
    iconColor: "text-purple-600",
    img: appDevImg,
    tag: "Trending",
  },
  {
    icon: Users,
    title: "Recruitment Training",
    desc: "Learn end-to-end talent acquisition, interview strategies, and HR tech tools.",
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
    img: recruitmentImg,
  },
  {
    icon: Briefcase,
    title: "Internship Programs",
    desc: "Get hands-on experience with real-world projects and mentorship from industry experts.",
    color: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600",
    img: digitalMarketingImg,
  },
];

const benefits = [
  {
    icon: Award,
    title: "Industry-Recognized Certification",
    desc: "Earn certificates that top employers value and trust globally.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    desc: "Learn directly from seasoned professionals and industry veterans.",
  },
  {
    icon: Briefcase,
    title: "Career Acceleration",
    desc: "Dedicated career support, resume building, and interview preparation.",
  },
  {
    icon: Globe,
    title: "Flexible Learning",
    desc: "Access courses anytime, anywhere with our hybrid learning modules.",
  },
];

const stats = [
  { value: "10k+", label: "Students Enrolled" },
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Expert Mentors" },
  { value: "200+", label: "Hiring Partners" },
];

const Home = () => {
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [isMetricsVisible, setIsMetricsVisible] = useState(false);

  useEffect(() => {
    const section = metricsRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMetricsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-24 overflow-hidden flex items-center min-h-[90vh]">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 z-0" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-white font-black text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-up-delay-1 drop-shadow-lg">
                Accelerate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Career Growth
                </span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl mt-6 leading-relaxed animate-fade-up-delay-2 max-w-lg font-medium">
                Master Web Development, AI & Prompt Engineering, and Recruitment Training with industry experts.
              </p>
              <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
                <Link to="/register" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-1 flex items-center gap-2">
                  Start Learning Now <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                  Explore Programs
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-12 animate-fade-up-delay-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 relative">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 font-medium text-sm">Joined by 10,000+ students</p>
                </div>
              </div>
            </div>

            {/* Right: Floating UI Elements */}
            <div className="relative hidden lg:flex justify-center items-center h-[500px]">
              {/* Main floating card */}
              <div className="animate-float absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl w-80 z-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-inner">
                    <BookOpen size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Active Courses</p>
                    <p className="text-blue-200 text-sm font-medium">Updated Weekly</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full bg-blue-400 w-3/4 rounded-full" />
                  </div>
                  <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full bg-purple-400 w-1/2 rounded-full" />
                  </div>
                  <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-5/6 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative Blur Orbs */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative z-20 -mt-12 container max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 flex flex-wrap justify-around items-center gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <AnimatedSection delay={i * 100}>
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Courses / Programs Section ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Popular Programs</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Unlock Your Potential</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Industry-aligned programs designed to give you the practical skills needed to thrive in today's tech landscape.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, i) => (
              <AnimatedSection delay={i * 100} key={program.title}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-100 h-full flex flex-col hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img src={program.img} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    {program.tag && (
                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {program.tag}
                      </span>
                    )}
                    <div className={`absolute -bottom-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-xl z-10 border border-slate-50`}>
                      <program.icon size={24} className={program.iconColor} />
                    </div>
                  </div>
                  <div className="pt-10 pb-8 px-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{program.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{program.desc}</p>
                    <Link to="/register" className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                      Enroll Now <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Learn With Us & Benefits ─── */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-purple-600 bg-purple-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Transform Your Career Trajectory</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                We bridge the gap between academic learning and industry requirements. Our student-focused approach ensures you get the mentorship and practical experience needed to stand out.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <AnimatedSection delay={i * 100} key={benefit.title}>
                    <div className="flex gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <benefit.icon size={24} className="text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div ref={metricsRef} className="bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[60px]" />

                <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Career Growth Outcomes</h3>

                <div className="space-y-8 relative z-10">
                  {[
                    { label: "Salary Hike Post-Course", value: 85, color: "bg-indigo-500" },
                    { label: "Practical Implementation", value: 95, color: "bg-purple-500" },
                    { label: "Interview Success Rate", value: 92, color: "bg-cyan-500" },
                    { label: "Student Satisfaction", value: 98, color: "bg-emerald-500" },
                  ].map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-3">
                        <span className="text-white/90 font-medium text-sm">{metric.label}</span>
                        <span className="text-white font-bold">{metric.value}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${metric.color} shadow-[0_0_10px_currentColor]`}
                          style={{
                            width: isMetricsVisible ? `${metric.value}%` : "0%",
                            transition: `width 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative z-10">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm font-medium leading-relaxed italic mb-4">
                    "The AI & Prompt Engineering course completely changed my career path. I landed a role as an AI Integration Specialist within weeks of completion."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center font-bold text-white text-sm shadow-inner">
                      A
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Ananya S.</p>
                      <p className="text-white/60 text-xs">Alumni, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Hiring Partners ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">Our Alumni Work At</h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Gradients for smooth fade out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            <div className="flex gap-12 animate-scroll whitespace-nowrap items-center">
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div key={i} className="flex items-center justify-center min-w-[160px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Modern Call To Action ─── */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('@/assets/herobg.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />

        <AnimatedSection>
          <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-white/10 rounded-3xl mx-auto flex items-center justify-center backdrop-blur-md border border-white/20 mb-8 rotate-3 shadow-2xl">
              <Zap size={32} className="text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Skills?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto">
              Join thousands of learners accelerating their careers with our industry-leading programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link to="/register" className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Enroll Now <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                Contact Counselor
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
