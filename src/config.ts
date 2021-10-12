export const ENABLE_EVENTS_BANNER = process.env.ENABLE_EVENTS_BANNER == 'true';
export const API_URL = process.env.API_URL ?? '';
export const GITHUB_GALLERY_URL =
  process.env.GITHUB_GALLERY_URL ??
  'https://api.github.com/repos/uccnetsoc/wiki/contents/gallery';
export const GITHUB_PAST_EVENTS_GALLERY_URL =
  process.env.GITHUB_PAST_EVENTS_GALLERY_URL ??
  'https://api.github.com/repos/uccnetsoc/wiki/contents/events';
