import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }) {
return (
	<div className="teaser" {...storyblokEditable(blok)}>
		<h2>{blok.headline}</h2>
	</div>
);
}