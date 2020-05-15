const path = require(`path`) ;

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/blogPost.js');

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        html
                        id
                        frontmatter{
                            title
                            path
                            date
                            author
                        }
                    }
                }
            }
        }
    `).then(res => {
        if(res.errors){
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}
