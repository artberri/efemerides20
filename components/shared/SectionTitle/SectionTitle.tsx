import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react"

export const SectionTitle = forwardRef<
	HTMLParagraphElement,
	DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
>(({ children, ...props }, ref) => {
	return (
		<p ref={ref} className="pb-4 text-primary" {...props}>
			{children}
		</p>
	)
})

SectionTitle.displayName = "SectionTitle"
