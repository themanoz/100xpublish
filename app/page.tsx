import React from "react";
import {
  Upload,
  Play,
  CheckCircle,
  Youtube,
  ArrowRight,
  Video,
  Users,
  Shield,
  Zap,
  Check,
  Star,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen gradient-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Zap className="w-8 h-8 text-purple-400 relative" />
            </div>
            <span className="text-2xl font-extrabold gradient-text">100xPublish</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Testimonials
            </a>
            <button className="glass-card px-6 py-2 text-purple-300 hover:text-white rounded-full transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-purple-500/50 font-semibold">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
          <span className="text-purple-400 font-semibold text-lg mb-4 block">
            YouTube Content Management Platform
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight relative text-balance text-shadow">
            Transform Your Content
            <span className="gradient-text block"> Into a 100x Empire</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            The ultimate collaboration hub where creators and channel owners
            unite. Upload, review, and scale your YouTube content with
            enterprise-grade tools.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 glow-animation">
              <span>Launch Your Empire</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="glass-card px-8 py-4 text-white rounded-full text-lg font-semibold hover:bg-zinc-800/50 transition-all duration-300 group">
              <span className="flex items-center gap-2">
                See How It Works
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-8">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=32&h=32",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=32&h=32",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=32&h=32",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
              ))}
            </div>
            <p className="text-zinc-400">
              <span className="text-white font-semibold">2,500+</span> creators
              scaling their content
            </p>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl"></div>
        <div className="container mx-auto px-6 py-24 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-16">
            Built for Content
            <span className="gradient-text"> Domination</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8 text-purple-400" />,
                title: "Rapid Upload Engine",
                description:
                  "Upload entire series in seconds. Our AI-powered engine handles the heavy lifting while you focus on creating.",
              },
              {
                icon: <Users className="w-8 h-8 text-purple-400" />,
                title: "Team Amplification",
                description:
                  "Scale your team effortlessly. Collaborate with editors, reviewers, and managers in one unified workspace.",
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Fortress Security",
                description:
                  "Bank-grade protection for your content. Advanced access controls, audit logs, and encrypted storage.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:bg-zinc-800/50 transition-all duration-500 transform hover:-translate-y-1 group"
              >
                <div className="bg-purple-500/10 rounded-lg w-fit p-3 mb-6 group-hover:scale-110 transition-transform duration-500 relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Streamline Your
              <span className="gradient-text block"> Content Empire</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Upload className="w-6 h-6" />,
                  title: "Intelligent Upload",
                  description:
                    "Drop entire series at once. Our AI categorizes and processes everything automatically.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Smart Review System",
                  description:
                    "Automated quality checks and collaborative review tools ensure perfection.",
                },
                {
                  icon: <Youtube className="w-6 h-6" />,
                  title: "Strategic Publishing",
                  description:
                    "AI-powered scheduling finds the perfect time to maximize your audience engagement.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="bg-purple-500/20 rounded-lg p-3 text-purple-400 group-hover:scale-110 transition-transform duration-300 relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative floating-animation">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl transform -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Video publishing workflow"
                className="rounded-2xl shadow-2xl relative transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-6">
            Pricing for Every
            <span className="gradient-text"> Empire Stage</span>
          </h2>
          <p className="text-center text-zinc-400 text-lg mb-16 max-w-2xl mx-auto">
            Choose the perfect plan to fuel your content empire. All plans
            include our core features to help you scale.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Creator",
                price: "49",
                description: "Perfect for emerging content empires",
                features: [
                  "Up to 50 videos/month",
                  "2 team members",
                  "Basic analytics dashboard",
                  "Email support",
                  "Standard processing speed",
                ],
              },
              {
                name: "Empire",
                price: "99",
                description: "For rapidly growing channels",
                features: [
                  "Up to 200 videos/month",
                  "5 team members",
                  "Advanced analytics & insights",
                  "Priority support",
                  "Custom workflows",
                  "2x processing speed",
                ],
                popular: true,
              },
              {
                name: "Network",
                price: "299",
                description: "For content networks & agencies",
                features: [
                  "Unlimited videos",
                  "Unlimited team members",
                  "AI-powered insights",
                  "24/7 dedicated support",
                  "Custom integrations",
                  "5x processing speed",
                  "SLA guarantee",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 relative ${
                  plan.popular ? "border-purple-500/50 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-400 ml-2">/month</span>
                </div>
                <p className="text-zinc-400 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-zinc-300">
                      <Check className="w-5 h-5 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "border border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                  }`}
                >
                  Start Building
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-6">
          Trusted by Content
          <span className="gradient-text"> Emperors</span>
        </h2>
        <p className="text-center text-zinc-400 text-lg mb-16 max-w-2xl mx-auto">
          Join the ranks of successful content creators who've transformed their
          channels with FlowX.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Rivera",
              role: "1M+ Subscribers",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100",
              quote:
                "FlowX revolutionized our content game. We're now publishing daily videos with half the team size. The automation is simply mind-blowing.",
            },
            {
              name: "Sarah Chen",
              role: "Content Network Director",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100",
              quote:
                "Managing 5 channels was chaos before FlowX. Now it's a breeze. The workflow automation and review system are pure gold.",
            },
            {
              name: "Marcus Johnson",
              role: "YouTube Strategist",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
              quote:
                "The analytics and AI insights have doubled our growth rate. FlowX isn't just a tool, it's your secret weapon for YouTube domination.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 relative group hover:bg-zinc-800/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 right-8 text-purple-500/20 transform scale-150">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <p className="text-zinc-300 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Build Your
              <span className="gradient-text"> Content Empire?</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Join the ranks of elite creators who are scaling their YouTube
              presence with FlowX. Start your journey to content mastery today.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 glow-animation">
                <span>Begin Your Empire</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="glass-card px-8 py-4 text-white rounded-full text-lg font-bold hover:bg-zinc-800/50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="w-6 h-6 text-purple-400" />
              <span className="text-white font-bold">FlowX</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-zinc-400 text-sm mt-4 md:mt-0">
              © 2025 FlowX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
