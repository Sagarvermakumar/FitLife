import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Heading({ title, subtitle, className }: HeadingProps) {
  return (
    <div className={cn("text-center mb-12 px-4 sm:px-0", className)}>
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl font-headline pb-2",
          // Darker purple gradient: left lighter, right darker
          "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700",
          "drop-shadow-md"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
