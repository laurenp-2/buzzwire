import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { PoliticalIssue } from '../utils/politicalData';

interface IssueListItemProps {
  issue: PoliticalIssue;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

export function IssueListItem({ issue, isSelected, onClick, index }: IssueListItemProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-5 border-2 transition-all group relative overflow-hidden ${
        isSelected
          ? 'bg-primary border-black shadow-lg'
          : 'bg-white border-gray-200 hover:border-black'
      }`}
    >
      {/* Yellow accent corner - playful diagonal */}
      {!isSelected && (
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-primary/20 transform rotate-45 translate-x-10 -translate-y-10"
          whileHover={{ translateX: 8, translateY: -8 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Selected indicator with pulse animation */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-2 right-2 w-3 h-3 bg-black rounded-full"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-black rounded-full"
          />
        </motion.div>
      )}

      <div className="relative z-10">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
            isSelected ? 'bg-black text-primary' : 'bg-gray-100 text-black'
          }`}>
            {issue.category}
          </span>
          {index === 0 && (
            <div className="flex items-center gap-1 text-xs font-bold text-black">
              <TrendingUp className="w-3 h-3" />
              <span>Hot</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-bold mb-2 leading-tight ${
          isSelected ? 'text-black' : 'text-black group-hover:text-black'
        }`}>
          {issue.title}
        </h3>

        {/* Article count */}
        <div className="flex items-center justify-between">
          <span className={`text-sm ${
            isSelected ? 'text-black/70' : 'text-gray-600'
          }`}>
            {issue.articles.length} articles
          </span>
          <ArrowRight className={`w-5 h-5 transition-transform ${
            isSelected 
              ? 'text-black' 
              : 'text-gray-400 group-hover:text-black group-hover:translate-x-1'
          }`} />
        </div>
      </div>
    </motion.button>
  );
}