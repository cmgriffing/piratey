exports.config = {
  projectRoot: './src',
  projectName: 'piratey',
  outDir: './dist/static',
  routes: {
    '/news/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './news'
      }
    },
    '/media/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './media'
      }
    }
  }
};
