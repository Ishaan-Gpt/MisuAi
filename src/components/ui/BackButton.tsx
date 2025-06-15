
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  to?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ label = "Back to Dashboard", to = "/dashboard" }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="flex items-center gap-2 px-4 py-2 bg-slate-900/70 rounded-lg text-purple-300 hover:bg-purple-600/30 transition-colors mb-6 font-semibold shadow animate-fade-in"
      aria-label={label}
    >
      <ArrowLeft className="w-5 h-5" />
      {label}
    </button>
  );
};
