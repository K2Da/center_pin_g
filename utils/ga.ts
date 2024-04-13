export const setPage = (
  path: string,
  title: string,
  description: string,
  website?: boolean = false,
) => {
  if (title && process.client) gaView(title);
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
        src: 'https://kit.fontawesome.com/fb58e9e936.js',
        crossorigin: 'anonymous',
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-KQ7HCNR2RZ',
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'G-KQ7HCNR2RZ');",
      },
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3152944921325337',
        crossorigin: 'anonymous',
      },
    ],
  });
};

export const gaView = (title: string): void => {
  // eslint-disable-next-line
  // @ts-ignore
  gtag('set', 'page_path', window.location.pathname);
  // eslint-disable-next-line
  // @ts-ignore
  gtag('set', 'page_title', `CP(g): ${title}`);
  // eslint-disable-next-line
  // @ts-ignore
  gtag('event', 'page_view');
};
