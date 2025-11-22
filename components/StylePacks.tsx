'use client';

const packs = [
  "Timeless Hamptons", "Dark Moody Luxe", "California Casual", "Japandi Serenity",
  "2026 Organic Modern", "Quiet Luxury", "Coastal Grandmother", "New Mediterranean",
  "Warm Minimalism", "Biophilic Jungle"
];

export default function StylePacks() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-bold text-center mb-12">Or choose a signature style</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {packs.map((style) => (
          <button key={style} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <p className="text-lg font-medium">{style}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
