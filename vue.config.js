module.exports = {
    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'

    // EXAMPLE
    // https://www.example.com/project/v1.1/index.html
    // baseUrl becomes /project/v1.1/ 
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://agencepeche.github.io/gaming-jobs/' : './',

    // where to output built files
    outputDir: 'docs',
}