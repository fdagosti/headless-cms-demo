import { getStoryblokApi } from "@/lib/storyblok";
export const dynamic = "force-dynamic";
export default function StoryblokProvider({ children }) {
getStoryblokApi();
return children;
}