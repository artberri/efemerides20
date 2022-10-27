import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from "react"

export const FooterLink = forwardRef<
	HTMLAnchorElement,
	DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>(({ children, ...props }, ref) => {
	return (
		<a ref={ref} className="text-gray-600 underline" {...props}>
			{children}
		</a>
	)
})

FooterLink.displayName = "FooterLink"
