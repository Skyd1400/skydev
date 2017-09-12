export default {

    getPost(){
        return new Promise(resolve => {
            resolve({
                postId: 'fhakf',
                title: 'NextJS : Yon gid pou demare',
                thumbnail: '/static/img/blog1.jpg',
                pubDate: '20 january 2017',
                author: 'Skydev',
                content: '<h1>This is the Hash and the best forever</h1>',
                tags: ['React', 'JavaScript', 'Nextjs']
            });
        });
    },

    getPosts() {
        return new Promise(resolve => {
            resolve([{
                postId: 'fhakf',
                title: 'NextJS : Yon gid pou demare',
                thumbnail: '/static/img/blog1.jpg',
                pubDate: '20 january 2017',
                author: 'Skydev'
            }]);
        });
    },

    getWorks() {
        return new Promise(resolve => {
            resolve([{
                title: 'Domino',
                thumbnail: '/static/img/pf.jpg',
                workId: 'djfalfjl'
            }]);
        });
    }
};