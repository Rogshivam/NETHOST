interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  text = 'Video Thumbnail',
  className = '',
}: PlaceholderImageProps) {
  const colors = [
    'bg-blue-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-red-600',
    'bg-orange-600',
    'bg-yellow-600',
    'bg-green-600',
    'bg-teal-600',
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`${randomColor} flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <span className="text-white text-lg font-medium">{text}</span>
    </div>
  );
} 