export const setPage = (
  path: string,
  title?: string,
  description?: string,
  ogType?: string,
) => {
  if (title && process.client) gaView(title);
  const desc =
    description || 'ポケモンユナイトの大会結果などを収集、集計しているサイト';
  useHead({
    title: `CP(g): ${title || ''}`,
    meta: [
      { name: 'description', content: desc },
      { name: 'og:title', content: title },
      { name: 'og:type', content: ogType || 'article' },
      { name: 'og:url', content: `https://center-ping.pages.dev${path}` },
      { name: 'og:site_name', content: 'Center Pin(g)' },
      { name: 'og:image', content: 'https://center-ping.pages.dev/ogp.png' },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css',
      },
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
