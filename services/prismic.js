import Prismic from 'prismic-javascript';
import Dom from 'prismic-dom';

const apiEndpoint = 'https://skydev.prismic.io/api/v2';
const githubGistRegex = /https:\/\/gist.github.com\/.*\/.*\w+/;

export default {

    getWorks(req) {
        return Prismic.getApi(apiEndpoint, {req}).then(api => {
            return api.query(Prismic.Predicates.at('document.type', 'work'));
        }).then(response => {
            return new Promise(resolve => {
                resolve(response.results.map(work => ({
                    workId: work.id,
                    title: work.data.title,
                    thumbnail: work.data.thumbnail.small.url
                })));
            });
        });
    },

    getPosts(req) {
        return Prismic.getApi(apiEndpoint, {req}).then(api => {
            return api.query(Prismic.Predicates.at('document.type', 'blog_post'));
        }).then(response => {
            return new Promise(resolve => {
                resolve(response.results.map(doc => ({
                    postId: doc.id,
                    slug: doc.slugs[0],
                    title: doc.data.title[0].text,
                    thumbnail: doc.data.thumbnail.url,
                    pubDate: (new Date(doc.last_publication_date)).toLocaleDateString(),
                    author: doc.data.author
                })));
            });
        });
    },
    
    getPost(req, id) {
        return Prismic.getApi(apiEndpoint, {req}).then(api => {
            return api.getByID(id);
        }).then (doc => {
            return new Promise(resolve => {
                resolve ({
                    id: doc.id,
                    title: doc.data.title[0].text,
                    subtitle: doc.data.subtitle,
                    author: doc.data.author,
                    thumbnail: doc.data.thumbnail.url,
                    content: Dom.RichText.asHtml(doc.data.article, null, (element, content) => {
                        if (element.type === 'paragraph') {
                            if (element.text.indexOf('https://gist.github.com/') === 0) {
                                return `<script src="${element.text}.js"></script>`;
                            }
                        }

                        return null;
                    }),
                    tags: doc.tags,
                });
            });
        });
    }
};