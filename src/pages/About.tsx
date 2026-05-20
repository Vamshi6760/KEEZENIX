import { Link } from "react-router-dom";
import {
  Target, Eye, Users, Globe, Lightbulb, Shield, Award,
  ArrowRight, CheckCircle2, Zap, Heart, TrendingUp, BookOpen, GraduationCap, MonitorPlay
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutOfficeImg from "@/assets/about-office.jpg";
import techBgImg from "@/assets/tech-bg.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";

const teamImages = [team2, team3, team4, team3];

const values = [
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    desc: "We foster an environment where curiosity thrives and learning never stops, adapting to the latest tech trends.",
  },
  {
    icon: Heart,
    title: "Student-First",
    desc: "Every course, module, and mentorship session is designed with the student's success as the primary goal.",
  },
  {
    icon: TrendingUp,
    title: "Career-Oriented",
    desc: "We focus on practical skills that directly translate to employability and career advancement.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Building a strong network of learners, alumni, and industry professionals to support mutual growth.",
  },
  {
    icon: Globe,
    title: "Accessible Education",
    desc: "Making high-quality tech education accessible to learners everywhere through hybrid models.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    desc: "Maintaining the highest standards in our curriculum, vetted by industry experts.",
  },
];

const team = [
  { name: "Keesara Srikanth Reddy", role: "Co-Founder | Director - HR", initial: "KS" },
];

const About = () => {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      {/* ─── Page Hero ─── */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('@/assets/herobg.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/90 to-purple-900/90" />
        
        {/* Decorative Orbs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]" />
        
        <AnimatedSection>
          <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 border border-white/20 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <BookOpen size={16} /> Our Story
            </span>
            <h1 className="text-white font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-md">
              Empowering the Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Generation of Innovators</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              We are a modern EdTech platform dedicated to bridging the skills gap and preparing students for the dynamic world of technology and business.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Company Intro ─── */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Redefining Tech Education
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                Keezenix Global was founded with a clear vision — to provide accessible, high-quality education that directly aligns with industry demands. We recognized that traditional learning models often leave students unprepared for modern technical challenges.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                Today, we offer comprehensive programs in Web Development, AI & Prompt Engineering, and Recruitment Training, combining theoretical foundations with intensive practical application and mentorship.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Students", value: "10k+" },
                  { label: "Mentors", value: "50+" },
                  { label: "Programs", value: "15+" },
                  { label: "Partners", value: "200+" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
                    <p className="text-3xl font-black text-indigo-600 mb-1">{item.value}</p>
                    <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <img src={aboutOfficeImg} alt="Students learning" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <MonitorPlay size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Interactive Learning</p>
                        <p className="text-white/80 text-sm">Real-world projects & assignments</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative background blob */}
                <div className="absolute top-10 -right-10 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-[2.5rem] -z-10 rotate-3" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-purple-600 bg-purple-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Our Direction</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Mission & Vision</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="rounded-[2rem] p-10 h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] transition-colors group-hover:bg-indigo-100 -z-0" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                  <Target size={30} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-medium relative z-10">
                  To democratize access to elite tech education by providing affordable, industry-relevant courses that transform dedicated learners into highly sought-after professionals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-[2rem] p-10 h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[100px] transition-colors group-hover:bg-purple-100 -z-0" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                  <Eye size={30} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-medium relative z-10">
                  To be the global catalyst for career transformation, recognized as the premier EdTech platform that continuously adapts to the future of work and technology.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Our Principles</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Core Values</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                The beliefs that guide our curriculum, mentorship, and platform development.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 80}>
                <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 transition-colors duration-300">
                    <value.icon size={26} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership / Mentors Team ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Expert Mentors</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Learn from the Best</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Our programs are led by industry veterans who bring real-world experience to the classroom.
              </p>
            </div>
          </AnimatedSection>

          {/* Mentors Showcase Grid */}
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
              {teamImages.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden shadow-lg border border-white relative group">
                  <img src={img} alt={`Mentor ${i + 1}`} className="w-full h-56 object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">Industry Expert</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Key Leadership */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100}>
                <div className="text-center group bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all">
                  <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-white font-bold text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-indigo-500 to-purple-600">
                    {member.initial}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{member.name}</h4>
                  <p className="text-indigo-600 font-semibold text-xs uppercase tracking-wide">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Modern CTA ─── */}
      <section className="py-24 relative overflow-hidden bg-indigo-950">
        <div className="absolute inset-0 bg-[url('@/assets/tech-bg.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-900/90" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />

        <AnimatedSection>
          <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="w-20 h-20 bg-white/10 rounded-full mx-auto flex items-center justify-center backdrop-blur-md border border-white/20 mb-8 shadow-2xl">
              <GraduationCap size={36} className="text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Start Your Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Journey Today</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto">
              Join our vibrant community of learners and take the first step towards a successful career in tech.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link to="/register" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
