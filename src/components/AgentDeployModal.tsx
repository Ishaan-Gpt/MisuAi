
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AgentDeployModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const AgentDeployModal: React.FC<AgentDeployModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Deploy Your AI Agent</DialogTitle>
          <DialogDescription>
            This is a demo onboarding flow. Imagine configuring your first agent for LinkedIn, IG, or Twitter!
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <label className="block text-sm font-medium text-gray-300 mb-1">Agent Persona</label>
          <select className="w-full rounded-md border border-gray-700 bg-gray-900 text-white p-2">
            <option>Personal Brand</option>
            <option>Growth Marketer</option>
            <option>AI Influencer</option>
            <option>Enterprise Team</option>
          </select>
          <label className="block text-sm font-medium text-gray-300 mb-1 mt-4">Platform</label>
          <select className="w-full rounded-md border border-gray-700 bg-gray-900 text-white p-2">
            <option>LinkedIn</option>
            <option>Instagram</option>
            <option>TikTok</option>
            <option>Twitter</option>
          </select>
          <Button className="w-full mt-6">Simulate Agent Deployment 🚀</Button>
        </div>
        <DialogClose asChild>
          <Button variant="secondary" className="w-full mt-2">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default AgentDeployModal;
