import mixpanel from 'mixpanel-browser';

/**
 * Mixpanel is a business analytics service that tracks user interactions with web and mobile applications and provides tools for targeted communication with them.
 * @see https://mixpanel.com/
 * @todo Add Mixpanel token to .env.local
 * @example <caption>How to use Mixpanel</caption>
 * @returns {void}
 */
if (!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
	throw new Error('MIXPANEL_TOKEN is not defined');
}

mixpanel.init(
	process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
	{
		debug: false,
		track_pageview: true,
		persistence: 'localStorage',
		ignore_dnt: true,
	},
);

export default mixpanel;
