import React, { useState } from 'react';
import { Menu, X, ChevronDown, Brain, Zap, Users } from 'lucide-react';
import SignInModal from './SignInModal';
import AgentDeployModal from './AgentDeployModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [deployOpen, setDeployOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="sp-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">MisuAi</span>
                <span className="ml-2 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full">
                  AGENT
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Zap className="w-4 h-4 mr-2" />
                  AI Agents
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Users className="w-4 h-4 mr-2" />
                  Platforms
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#pricing" className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                  Case Studies
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#" className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                Enterprise
              </a>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
              onClick={() => setSignInOpen(true)}
            >
              Sign In
            </button>
            <button
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              onClick={() => setDeployOpen(true)}
            >
              <span className="relative z-10">Deploy AI Agent</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
          <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
          <AgentDeployModal open={deployOpen} onOpenChange={setDeployOpen} />

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm border-t border-white/10">
              <a href="#" className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setDeployOpen(true)}>
                <Zap className="w-4 h-4 mr-2" />
                AI Agents
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors">
                <Users className="w-4 h-4 mr-2" />
                Platforms
              </a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors">
                Case Studies
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors">
                Enterprise
              </a>
              <div className="pt-4 pb-3 border-t border-white/10">
                <div className="flex flex-col space-y-2">
                  <button
                    className="text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors"
                    onClick={() => setSignInOpen(true)}
                  >
                    Sign In
                  </button>
                  <button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm mx-3 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
                    onClick={() => setDeployOpen(true)}
                  >
                    Deploy AI Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
