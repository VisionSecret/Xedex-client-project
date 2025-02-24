// components/FeatureCard.jsx
export default function FeatureCard({ title, children, icon }) {
  return (
    <div className="relative group overflow-hidden rounded-tl-3xl rounded-br-3xl border border-[#0AA8AF] bg-gradient-to-br from-blue-900/70 to-purple-900/60 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
      {/* Icon & Title Container */}
      <div className="mb-8 flex items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-4 text-3xl">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-gray-300">{children}</p>
      </div>
    </div>
  );
}
