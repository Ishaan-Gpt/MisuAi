
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Zap, Target, TrendingUp, Users, Instagram, Linkedin, Twitter } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface AgentDeployModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AgentDeployModal: React.FC<AgentDeployModalProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    agentName: '',
    persona: 'personal-brand',
    platforms: [] as string[],
    goals: 'engagement'
  });

  const personas = [
    { id: 'personal-brand', name: 'Personal Brand', description: 'Build your personal influence', icon: Users },
    { id: 'growth-marketer', name: 'Growth Marketer', description: 'Drive business growth', icon: TrendingUp },
    { id: 'ai-influencer', name: 'AI Influencer', description: 'Tech-focused content', icon: Brain },
    { id: 'enterprise', name: 'Enterprise', description: 'Corporate presence', icon: Target }
  ];

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-400' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'text-sky-400' }
  ];

  const handlePlatformToggle = (platformId: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platformId)
        ? prev.platforms.filter(p => p !== platformId)
        : [...prev.platforms, platformId]
    }));
  };

  const handleDeploy = () => {
    if (!formData.agentName || formData.platforms.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // ---- Add deployment info to localStorage ----
    const newDeployment = {
      ...formData,
      createdAt: Date.now()
    };
    const prev = localStorage.getItem("deployedAgents");
    const parsed = prev ? JSON.parse(prev) : [];
    parsed.push(newDeployment);
    localStorage.setItem("deployedAgents", JSON.stringify(parsed));
    window.dispatchEvent(new Event("storage")); // Manually trigger update for other tabs

    toast({
      title: "🚀 Agent Deployed Successfully!",
      description: `${formData.agentName} is now active on ${formData.platforms.length} platform(s). You'll see results within 24 hours.`
    });

    setStep(1);
    setFormData({ agentName: '', persona: 'personal-brand', platforms: [], goals: 'engagement' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Brain className="w-6 h-6 mr-2 text-blue-400" />
            Deploy Your AI Agent
          </DialogTitle>
          <DialogDescription>
            Configure your autonomous AI agent in 3 simple steps
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= num ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > num ? 'bg-blue-600' : 'bg-gray-700'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Agent Configuration</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="agentName" className="text-gray-300">Agent Name *</Label>
                <Input
                  id="agentName"
                  placeholder="e.g., Marketing Maverick, Content Creator Pro"
                  value={formData.agentName}
                  onChange={(e) => setFormData(prev => ({ ...prev, agentName: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-gray-300 mb-3 block">Choose Agent Persona</Label>
                <div className="grid grid-cols-2 gap-3">
                  {personas.map((persona) => {
                    const Icon = persona.icon;
                    return (
                      <div
                        key={persona.id}
                        onClick={() => setFormData(prev => ({ ...prev, persona: persona.id }))}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.persona === persona.id
                            ? 'border-blue-500 bg-blue-600/20'
                            : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-blue-400 mb-2" />
                        <h4 className="font-medium text-white">{persona.name}</h4>
                        <p className="text-sm text-gray-400">{persona.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Button onClick={() => setStep(2)} className="w-full">
              Next: Select Platforms
            </Button>
          </div>
        )}

        {/* Step 2: Platform Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Platform Selection</h3>
            
            <div>
              <Label className="text-gray-300 mb-3 block">Where should your AI agent operate? *</Label>
              <div className="space-y-3">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  const isSelected = formData.platforms.includes(platform.id);
                  return (
                    <div
                      key={platform.id}
                      onClick={() => handlePlatformToggle(platform.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all flex items-center ${
                        isSelected
                          ? 'border-blue-500 bg-blue-600/20'
                          : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mr-3 ${platform.color}`} />
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{platform.name}</h4>
                        <p className="text-sm text-gray-400">Deploy AI agent on {platform.name}</p>
                      </div>
                      <div className={`w-4 h-4 rounded border-2 ${
                        isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-600'
                      }`}>
                        {isSelected && <Zap className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="flex-1" disabled={formData.platforms.length === 0}>
                Next: Deploy
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Final Review */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Ready to Deploy</h3>
            
            <div className="bg-gray-800/50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="text-blue-400 font-medium">Agent Name</h4>
                <p className="text-white">{formData.agentName}</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium">Persona</h4>
                <p className="text-white">{personas.find(p => p.id === formData.persona)?.name}</p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium">Platforms</h4>
                <div className="flex gap-2 mt-1">
                  {formData.platforms.map(platformId => {
                    const platform = platforms.find(p => p.id === platformId);
                    const Icon = platform?.icon;
                    return (
                      <div key={platformId} className="flex items-center bg-gray-700 rounded px-2 py-1">
                        {Icon && <Icon className={`w-4 h-4 mr-1 ${platform.color}`} />}
                        <span className="text-sm text-white">{platform?.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">What happens next?</h4>
              <ul className="text-sm text-green-300 space-y-1">
                <li>• AI agent starts analyzing your niche and audience</li>
                <li>• Content generation begins within 30 minutes</li>
                <li>• First posts go live within 24 hours</li>
                <li>• You'll receive real-time performance updates</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Back
              </Button>
              <Button onClick={handleDeploy} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                🚀 Deploy Agent
              </Button>
            </div>
          </div>
        )}

        <DialogClose asChild>
          <Button variant="secondary" className="w-full mt-4">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDeployModal;
