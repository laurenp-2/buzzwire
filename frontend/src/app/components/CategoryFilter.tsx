interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="handwritten text-2xl text-black">filter by:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 font-bold text-sm tracking-wide transition-all rounded-full border-2 ${
            selectedCategory === null
              ? 'bg-primary text-black border-black shadow-md'
              : 'bg-white text-black border-gray-300 hover:border-black'
          }`}
        >
          All Issues
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 font-bold text-sm tracking-wide transition-all rounded-full border-2 ${
              selectedCategory === category
                ? 'bg-primary text-black border-black shadow-md'
                : 'bg-white text-black border-gray-300 hover:border-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
