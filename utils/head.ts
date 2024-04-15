export const setPage = (
  path: string,
  title: string,
  description: string,
  website: boolean = false,
) => {
  useHead({
    title: `CP(g): ${title || ''}`,
    meta: [
      { name: 'description', content: description },
      { name: 'og:title', content: title },
      { name: 'og:type', content: website ? 'website' : 'article' },
      { name: 'og:url', content: `https://center-ping.pages.dev${path}` },
      { name: 'og:site_name', content: 'Center Pin(g)' },
      { name: 'og:image', content: 'https://center-ping.pages.dev/ogp.png' },
      { name: 'twitter:card', content: 'summary' },
    ],
    script: [
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3152944921325337',
        crossorigin: 'anonymous',
      },
    ],
  });
};
