import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PoliticalHeader } from "./components/PoliticalHeader";
import { IssueListItem } from "./components/IssueListItem";
import { IssueDetailPanel } from "./components/IssueDetailPanel";
import { BuzzModal } from "./components/BuzzModal";
import { CategoryFilter } from "./components/CategoryFilter";
import {
  mockPoliticalIssues,
  PoliticalIssue,
  generateCivicActions,
} from "./utils/politicalData";
import { fetchPoliticalBriefings } from "./utils/api";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function App() {
  const [issues, setIssues] = useState<PoliticalIssue[]>(mockPoliticalIssues);
  const [selectedIssue, setSelectedIssue] = useState<PoliticalIssue>(
    mockPoliticalIssues[0]
  );
  const [showBuzzModal, setShowBuzzModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load real briefings on mount
  useEffect(() => {
    async function loadBriefings() {
      setIsLoading(true);
      setError(null);
      try {
        const briefings = await fetchPoliticalBriefings();
        if (briefings.length > 0) {
          setIssues(briefings);
          setSelectedIssue(briefings[0]);
        }
      } catch (err) {
        console.error("Failed to load briefings, using mock data:", err);
        setError("Using sample data - backend unavailable");
        // Keep using mock data on error
      } finally {
        setIsLoading(false);
      }
    }

    loadBriefings();
  }, []);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(issues.map((issue) => issue.category));
    return Array.from(cats).sort();
  }, [issues]);

  // Filter issues by category
  const filteredIssues = useMemo(() => {
    if (!selectedCategory) return issues;
    return issues.filter((issue) => issue.category === selectedCategory);
  }, [selectedCategory, issues]);

  const handleGenerateBuzz = () => {
    setShowBuzzModal(true);
  };

  const handleSelectIssue = (issue: PoliticalIssue) => {
    setSelectedIssue(issue);
    if (!isDesktop) {
      setMobileView("detail");
    }
  };

  const handleBackToList = () => {
    setMobileView("list");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PoliticalHeader />

      {/* Hero Section */}
      <div className="bg-white border-b-2 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary transform rotate-45 translate-x-48 -translate-y-48" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-primary border-2 border-black text-black font-bold text-sm mb-4 transform -rotate-1">
              REAL ISSUES. REAL ACTION.
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-tight mb-4">
              Stop scrolling.
              <br />
              <span className="relative inline-block">
                Start making
                <span className="handwritten text-7xl text-primary absolute -right-20 -top-4 rotate-12">
                  noise
                </span>
              </span>
              <span className="text-primary">.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              We cut through the BS and show you what matters. Then we tell you
              exactly how to make your voice heard. No fluff. Just action.
            </p>

            {/* Error/Loading indicator */}
            {error && (
              <div className="mt-4 px-4 py-2 bg-yellow-50 border-2 border-yellow-400 text-yellow-800 text-sm">
                ⚠️ {error}
              </div>
            )}
            {isLoading && (
              <div className="mt-4 text-gray-600">
                Loading real-time issues...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rest of your component stays the same... */}
      {/* Main Split Panel Layout */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        {/* Left Panel - Issue List */}
        <AnimatePresence mode="wait">
          {(mobileView === "list" || isDesktop) && (
            <motion.div
              key="list-panel"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:w-[400px] xl:w-[450px] lg:border-r-2 border-gray-200 bg-white overflow-hidden flex flex-col w-full"
            >
              <div className="p-6 border-b-2 border-gray-200">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <h3 className="text-2xl font-black text-black">
                    Current Issues
                  </h3>
                  <motion.span
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="handwritten text-3xl text-primary"
                  >
                    ⚡
                  </motion.span>
                </motion.div>
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredIssues.map((issue, idx) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <IssueListItem
                      issue={issue}
                      isSelected={selectedIssue.id === issue.id}
                      onClick={() => handleSelectIssue(issue)}
                      index={idx}
                    />
                  </motion.div>
                ))}

                {filteredIssues.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <p>No issues in this category yet.</p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t-2 border-gray-200 bg-gray-50">
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-2">
                    Selected:{" "}
                    <span className="font-bold text-black">
                      {selectedIssue.title}
                    </span>
                  </p>
                  <button
                    onClick={handleGenerateBuzz}
                    className="w-full py-3 bg-primary text-black font-black uppercase tracking-wide border-2 border-black hover:bg-black hover:text-primary transition-all flex items-center justify-center gap-2 group"
                  >
                    Take Action
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Panel - Issue Details */}
        <AnimatePresence mode="wait">
          {(mobileView === "detail" || isDesktop) && (
            <motion.div
              key="detail-panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 bg-white w-full"
            >
              {selectedIssue ? (
                <IssueDetailPanel
                  issue={selectedIssue}
                  onGenerateBuzz={handleGenerateBuzz}
                  onBack={handleBackToList}
                />
              ) : (
                <div className="h-full flex items-center justify-center p-12 text-center">
                  <div>
                    <span className="text-6xl mb-4 block">👈</span>
                    <p className="text-gray-500">
                      Select an issue to get started
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Buzz Modal */}
      <AnimatePresence>
        {showBuzzModal && selectedIssue && (
          <BuzzModal
            issue={selectedIssue}
            actions={generateCivicActions(selectedIssue)}
            onClose={() => setShowBuzzModal(false)}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black text-white py-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary transform -rotate-12 -translate-x-32 translate-y-32" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="font-bold mb-1">
            BuzzWire — Your voice is your power. Use it.
          </p>
          <p className="text-sm text-gray-400">
            Built for Gen Z. By people who give a damn.
          </p>
        </div>
      </footer>
    </div>
  );
}
