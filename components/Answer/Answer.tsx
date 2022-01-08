import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export const Answer = forwardRef<
  HTMLParagraphElement,
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  return (
    <p ref={ref} className="pb-4" {...props}>
      {children}
    </p>
  );
});

Answer.displayName = "Answer";
