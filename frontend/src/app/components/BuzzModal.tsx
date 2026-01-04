import { X, Phone, Mail, Calendar, Share2, DollarSign, Vote, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { PoliticalIssue, CivicAction } from '../utils/politicalData';

interface BuzzModalProps {
  issue: PoliticalIssue;
  actions: CivicAction[];
  onClose: () => void;
}

const iconMap = {
  call: Phone,
  email: Mail,
  attend: Calendar,
  share: Share2,
  donate: DollarSign,
  vote: Vote
};

export function BuzzModal({ issue, actions, onClose }: BuzzModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="w-full max-w-4xl max-h-[90vh] bg-white border-2 border-black shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex items-start justify-between p-6 border-b-2 border-black bg-primary">
          {/* Playful corner accent */}
          <div className="absolute top-0 right-20 w-32 h-32 bg-black transform rotate-45 -translate-y-16" />
          
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">⚡</span>
              <h2 className="text-3xl font-black text-black">
                Let's Make Noise!
              </h2>
            </div>
            <p className="text-black/80 font-semibold">
              {issue.title}
            </p>
            <span className="handwritten text-2xl text-black/50 absolute -bottom-4 right-0">
              you got this
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="relative z-10 p-2 hover:bg-black hover:text-primary transition-colors border-2 border-black bg-white rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-yellow-50 border-l-4 border-primary p-4"
          >
            <p className="text-black text-sm leading-relaxed">
              <span className="font-bold">Real talk:</span> Political change happens when people like you take action. 
              These aren't just suggestions—they're actual moves that work. Pick one (or all!) and do it today. 🔥
            </p>
          </motion.div>

          {/* Action Items */}
          <div className="grid gap-4">
            {actions.map((action, idx) => {
              const Icon = iconMap[action.type];
              const colors = [
                'border-black',
                'border-gray-300',
                'border-black',
                'border-gray-300',
              ];
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className={`bg-white border-2 ${colors[idx % colors.length]} p-5 hover:shadow-lg transition-all hover-lift relative overflow-hidden`}
                >
                  {/* Decorative yellow accent */}
                  {idx % 2 === 0 && (
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 transform rotate-45 translate-x-10 -translate-y-10" />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 bg-primary border-2 border-black flex-shrink-0 rounded-lg">
                        <Icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-black text-lg mb-1">
                          {action.title}
                        </h3>
                        <p className="text-gray-600">
                          {action.description}
                        </p>
                      </div>
                    </div>

                    {action.actionText && (
                      <div className="relative mt-4">
                        <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded font-mono text-sm text-gray-800">
                          <pre className="whitespace-pre-wrap font-mono">
                            {action.actionText}
                          </pre>
                        </div>
                        <button
                          onClick={() => handleCopy(action.actionText!, idx)}
                          className="absolute top-3 right-3 p-2 bg-primary text-black hover:bg-black hover:text-primary transition-colors border-2 border-black rounded"
                          title="Copy to clipboard"
                        >
                          {copiedIndex === idx ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    )}

                    {action.link && (
                      <a
                        href={action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-black text-white font-bold hover:bg-primary hover:text-black transition-all border-2 border-black rounded-full"
                      >
                        Open Resource →
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-t-2 border-gray-200 pt-6 text-center"
          >
            <div className="inline-block relative">
              <p className="text-gray-600">
                <span className="font-bold text-black">Remember:</span> Democracy isn't a spectator sport. 
                Your voice = your power. 💪
              </p>
              <span className="handwritten text-4xl text-primary absolute -right-12 -top-6 rotate-12">
                ✨
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}