import { cn } from "@/lib/utils";
const Wrapper = ({ children, className }) => {
  return (
    <div className={cn("mx-auto container p-4 xl:max-w-5xl", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
