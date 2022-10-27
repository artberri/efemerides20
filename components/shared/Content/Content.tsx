import { ReactNode } from "react"

export interface ContentProps {
	children: ReactNode
}

export const Content = ({ children }: ContentProps): JSX.Element => {
	return <div className="mx-auto max-w-6xl px-4">{children}</div>
}
