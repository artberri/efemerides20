import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react"

export const Title = forwardRef<
	HTMLHeadingElement,
	DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>(({ children, ...props }, ref) => {
	return (
		<h1
			ref={ref}
			className="pb-4 font-heading text-3xl sm:text-4xl lg:text-5xl"
			{...props}
		>
			{children}
		</h1>
	)
})

Title.displayName = "Title"
