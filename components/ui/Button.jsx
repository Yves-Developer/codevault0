import { cn } from "@/lib/utils"; // Helper to merge class names

const buttonVariants = {
  default: "bg-primary text-white shadow hover:shadow-[0_0_2rem_#2ecc7152]",
  outline:
    "bg-[#2ecc710a] text-gray-100 shadow-[inset_0_-6px_10px_rgba(46,204,113,0.08)] border-[0.5px] border-primary hover:bg-primary/10",
  ghost: "text-primary hover:bg-primary/10",
  blur: "bg-[#ededf029] text-gray-100 hover:shadow-[0_0_2rem_#2ecc7152]",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9 flex items-center justify-center",
};

const Button = ({
  variant = "default",
  size = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
