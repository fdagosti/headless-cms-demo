import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import getSbVersion from '../../utils/getSbVersion';

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {
const { slug } = await params;

const fullSlug = slug ? slug.join('/') : 'home';

const storyblokApi = getStoryblokApi();

console.log("1. APIIIII ",storyblokApi)
console.log("2. APIIIII ",fullSlug, " ", getSbVersion())

let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
	version: getSbVersion,
	cv: Date.now(),
});

console.log("1. on main page API ",data.story.content.body)
console.log("2. on main page API ",data)
return <StoryblokStory story={data.story} />;
}