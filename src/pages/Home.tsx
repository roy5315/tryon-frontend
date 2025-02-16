import React, { useState } from 'react';
import { 
  Sparkles, 
  Shirt, 
  Palette, 
  Users, 
  ChevronDown,
  ArrowRight,
  Mail
} from 'lucide-react';

function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80" 
            alt="Fashion Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-purple-300" />
            <span className="text-purple-300 font-light">AI-POWERED FASHION</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your Personal AI Stylist
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Experience the future of fashion with our AI-powered recommendation system.
            Get personalized outfit suggestions tailored to your unique style.
          </p>
          <a href="https://www.kolorsvirtual.com/">
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-purple-100 transition-colors">
            Get Started
          </button>
          </a>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Style Analysis</h3>
              <p className="text-gray-600">Our AI analyzes your preferences and style to create your unique fashion profile.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Shirt className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Outfit Generation</h3>
              <p className="text-gray-600">Advanced AI models generate personalized outfit recommendations just for you.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Style Evolution</h3>
              <p className="text-gray-600">Learn and evolve your style with AI-powered insights and recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Lookbook Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">AI-Generated Lookbook</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww`} 
                  alt={`Lookbook ${item}`}
                  className="w-full h-96 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Summer Collection</h3>
                    <button className="flex items-center gap-2 text-sm">
                      View Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
          <p className="text-gray-400 mb-8">
            Join our waitlist to be among the first to experience the future of fashion.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 DiFashion. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;