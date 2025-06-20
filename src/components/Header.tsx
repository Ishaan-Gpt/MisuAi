
import React, { useState } from 'react';
import { Menu, X, Brain, Zap, Users, Settings, BarChart3, User } from 'lucide-react';
import SignInModal from './SignInModal';
import AgentDeployModal from './AgentDeployModal';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [deployOpen, setDeployOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'AI Agents', icon: Zap, href: '#features' },
    { name: 'Platforms', icon: Users, href: '#platforms' },
    { name: 'Pricing', icon: BarChart3, href: '#pricing' },
    { name: 'Case Studies', icon: Settings, href: '#testimonials' }
  ];

  // Placeholder for user info/avatar
  const userInitial = "U";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">MisuAi</span>
                <span className="ml-2 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full font-medium">
                  PRO
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA Buttons + Profile */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              onClick={() => setSignInOpen(true)}
            >
              Sign In
            </button>
            <button
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => setDeployOpen(true)}
            >
              <span className="relative z-10">Deploy Agent</span>
            </button>
            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="ml-2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl focus:outline-none border border-purple-400 hover:ring-2 ring-purple-400 transition">
                  {/* Show initial or placeholder icon */}
                  <User className="w-6 h-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 min-w-[180px] mt-2">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/deployed-agents")}>
                  <Zap className="w-4 h-4 mr-2" /> Deployed Agents
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => alert("Signed out!")}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-b-lg">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  className="w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => {
                    setSignInOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </button>
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm mx-3 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                  onClick={() => {
                    setDeployOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Deploy Agent
                </button>
                {/* Profile option for mobile */}
                <button
                  className="w-full flex items-center text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/profile");
                  }}
                >
                  <User className="w-5 h-5 mr-3" />
                  Profile
                </button>
                <button
                  className="w-full flex items-center text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/settings");
                  }}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </button>
                <button
                  className="w-full flex items-center text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/deployed-agents");
                  }}
                >
                  <Zap className="w-5 h-5 mr-3" />
                  Deployed Agents
                </button>
                <button
                  className="w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    alert("Signed out!");
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
      <AgentDeployModal open={deployOpen} onOpenChange={setDeployOpen} />
    </header>
  );
};

export default Header;
