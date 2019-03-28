module.exports = {
  title: 'Mauro Made It',
  themeConfig: {
    lastUpdated: 'Last updated',
    nav: [
      {
        text: 'Home',
        link: '/daily/03/27/airtable-tracker',
      },
      // { text: 'Projects', link: '/projects/tetris-progressive-web-app' },
      // { text: 'Tips & Tricks', link: '/tips/vuetify-rules-context' },
    ],
    sidebar: {
      '/projects/': [
        'tetris-progressive-web-app',
        'colorado-cannabis-tours',
      ],
      '/tips/': [
        'vuetify-rules-context',
      ],
      '/drafts/changelog/': [
        '19-03-13',
        '19-03-12',
        '19-03-11',
        '19-03-10',
        '19-03-09',
        '19-03-08',
        '19-03-07',
      ],
      '/drafts/': [
        ['changelog/19-03-13', 'Changelog'],
      ],
      '/': [
        {
          title: 'March',
          children: [
            {
              title: '27th',
              children: [
                'daily/03/27/airtable-tracker',
              ],
            },
            {
              title: '26th',
              children: [
                'daily/03/26/improv-like-convo',
              ],
            },
            {
              title: '25th',
              children: [
                'daily/03/25/palm-tree',
              ],
            },
            {
              title: '24th',
              children: [
                'daily/03/24/homemade-lara-bars',
                'daily/03/24/i-am-new',
              ],
            },
            {
              title: '23rd',
              children: [
                'daily/03/23/we-think-too-much',
              ],
            },
          ],
        },
        {
          title: 'Articles',
          children: [
            'old/power-of-instead',
          ],
        },
      ],
    },
  },
  ga: 'UA-116400276-1',
}
