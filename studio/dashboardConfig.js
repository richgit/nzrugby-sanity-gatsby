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
                  buildHookId: '5d06f9d063279f19371c5e11',
                  title: 'Sanity Studio',
                  name: 'nzrugby-sanity-gatsby-studio',
                  apiId: 'e3e4b3bc-594d-4c7e-bc03-5a9dd2c72897'
                },
                {
                  buildHookId: '5d06f9d0dcdb937aa4b04e44',
                  title: 'Portfolio Website',
                  name: 'nzrugby-sanity-gatsby',
                  apiId: '5784b568-911b-40e6-9ec6-42a64caf260c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richgit/nzrugby-sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nzrugby-sanity-gatsby.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
