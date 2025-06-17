import { storyblokEditable } from "@storyblok/react/rsc";
export const dynamic = "force-dynamic";
export default function Feature({ blok }) {
return (
	<div className="feature" {...storyblokEditable(blok)}>
		<span>{blok.name}</span>
	</div>
);
}