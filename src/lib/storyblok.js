import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

console.log("Hello, starting the website prevview? ", process.env.STORYBLOK_IS_PREVIEW)

console.log(process.env)

export const getStoryblokApi = storyblokInit({
accessToken: process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
bridge: process.env.STORYBLOK_IS_PREVIEW === 'true' ? true : false,
use: [apiPlugin],
components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser
},
apiOptions: {
	region: 'eu',
},
});