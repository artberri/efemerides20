import Script from "next/script"
import { Fragment } from "react"

export const AddThis = (): JSX.Element => {
	return (
		<Fragment>
			<Script
				strategy="lazyOnload"
				id="addthis-script"
				src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-597f3f4cd029203f"
				onReady={() => {
					window.addthis.update("share", "url", window.location.href)
					window.addthis.update("share", "title", window.document.title)
				}}
			/>
		</Fragment>
	)
}
