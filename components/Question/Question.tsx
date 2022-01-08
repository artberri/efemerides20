import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export const Question = forwardRef<
  HTMLParagraphElement,
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  return (
    <p ref={ref} className="text-primary pb-4" {...props}>
      {children}
    </p>
  );
});

Question.displayName = "Question";