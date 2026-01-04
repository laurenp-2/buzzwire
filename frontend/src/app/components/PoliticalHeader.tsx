import { Zap } from 'lucide-react';

export function PoliticalHeader() {
  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transform -rotate-12">
                <Zap className="w-7 h-7 text-black" fill="black" strokeWidth={0} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black text-black tracking-tight">
                BuzzWire
              </h1>
              <p className="text-xs text-black/60 font-medium">Get informed. Take action.</p>
            </div>
          </div>
          
          <div className="hidden sm:block">
            <div className="relative inline-block">
              <span className="handwritten text-3xl text-black absolute -top-6 -right-4 rotate-12">
                now!
              </span>
              <button className="px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-black hover:text-primary transition-all transform hover:scale-105 active:scale-95 border-2 border-black">
                Make Noise
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
