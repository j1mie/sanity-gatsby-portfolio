export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f78674cae6fb2567defa6eb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-df85yzmq',
                  apiId: 'c048e181-5b09-4cf4-925f-37c2c8c95d16'
                },
                {
                  buildHookId: '5f78674cd04d181f819513e1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mbp3bxwc',
                  apiId: '49818855-e9d9-4add-ab8b-1be0472bd9ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/j1mie/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mbp3bxwc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
