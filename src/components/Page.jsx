import {
storyblokEditable,
StoryblokServerComponent,
} from '@storyblok/react/rsc';
//export const dynamic = "force-dynamic";
export default function Page({ blok }) {
	console.log("I am here ",blok)
return (
	<main>
		{blok.body.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);
}