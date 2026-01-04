import { ExternalLink, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { PoliticalIssue } from '../utils/politicalData';

interface IssueDetailPanelProps {
  issue: PoliticalIssue;
  onGenerateBuzz: () => void;
  onBack?: () => void;
}

export function IssueDetailPanel({ issue, onGenerateBuzz, onBack }: IssueDetailPanelProps) {
  return (
    <div className="h-full overflow-y-auto">
      {/* Mobile Back Button */}
      {onBack && (
        <div className="lg:hidden sticky top-0 z-20 bg-white border-b-2 border-gray-200 px-4 py-3">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-black hover:text-primary transition-colors"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Issues
          </motion.button>
        </div>
      )}

      {/* Hero Image Section */}
      <motion.div
        key={issue.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[21/9] overflow-hidden bg-gray-100 mb-6"
      >
        <img
          src={issue.imageUrl}
          alt={issue.title}
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        />
        {/* Halftone overlay */}
        <div className="absolute inset-0 halftone-overlay" />
        
        {/* Large yellow accent shape */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary transform rotate-12 translate-x-20 translate-y-20" />
        
        {/* Category badge with playful rotation */}
        <div className="absolute top-6 left-6 transform -rotate-3">
          <span className="inline-block px-4 py-2 bg-primary text-black font-black uppercase text-sm border-2 border-black shadow-lg">
            {issue.category}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-6">
        {/* Title with handwritten accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 handwritten text-6xl text-primary opacity-20 -rotate-12">
            !
          </div>
          <h2 className="text-3xl font-black text-black leading-tight mb-3 relative z-10">
            {issue.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {issue.description}
          </p>
        </motion.div>

        {/* Generate Buzz CTA - Prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-primary/20 transform -rotate-1" />
          <motion.button
            onClick={onGenerateBuzz}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full py-4 bg-primary text-black font-black text-lg uppercase tracking-wide border-2 border-black hover:bg-black hover:text-primary transition-all flex items-center justify-center gap-3 shadow-lg group"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-pulse" />
            Generate Buzz
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <span className="handwritten text-2xl text-black absolute -right-8 -bottom-8 rotate-12">
            do it!
          </span>
        </motion.div>

        {/* Articles Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-bold text-black mb-4 flex items-center gap-2"
          >
            <span className="handwritten text-3xl text-primary">sources</span>
            <span className="text-sm text-gray-500 font-normal">
              ({issue.articles.length} articles)
            </span>
          </motion.h3>

          <div className="space-y-4">
            {issue.articles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-white border-2 border-gray-200 p-4 hover:border-black transition-all hover-lift"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1 group-hover/link:text-black transition-colors" />
                    <div className="flex-1">
                      <h4 className="font-bold text-black group-hover/link:text-primary transition-colors mb-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                        {article.source}
                      </p>
                    </div>
                  </div>
                </a>
                
                {/* Pull quote */}
                <div className="mt-3 pl-4 border-l-4 border-primary/30 bg-gray-50 p-3">
                  <p className="text-sm text-gray-700 italic">
                    "{article.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center py-6">
          <div className="w-24 h-1 bg-primary transform -rotate-1" />
        </div>
      </div>
    </div>
  );
}