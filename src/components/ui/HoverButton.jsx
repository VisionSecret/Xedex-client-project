// components/HoverButton.jsx

export default function HoverButton({
  text,
  fromColor = 'from-purple-600',
  toColor = 'to-blue-500',
  size = 'md',
  className = '',
  ...rest
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <div className={`group relative inline-block ${className}`}>
      <div 
        className={`absolute inset-0 h-full w-full rounded-full bg-gradient-to-r ${fromColor} ${toColor} transition-all duration-500 group-hover:bg-gradient-to-l`}
      />
      
      <button
        {...rest}
        className={`relative z-10 rounded-full ${sizeClasses[size]} font-bold text-white transition-all duration-300 ${fromColor} ${toColor} group-hover:${toColor.split(' ')[0]} group-hover:${fromColor.split(' ')[0]}`}
      >
        <span className="relative z-20">{text}</span>
      </button>
    </div>
  );
}