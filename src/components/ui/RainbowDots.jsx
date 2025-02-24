// components/RainbowDots.jsx
export default function RainbowDots() {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex gap-4 sm:gap-6 md:gap-2 animate-float">
          {[
            "bg-red-500",
            "bg-orange-500",
            "bg-yellow-500",
            "bg-green-500",
            "bg-blue-500",
            "bg-purple-500",
          ].map((color, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${color} animate-pulse`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
