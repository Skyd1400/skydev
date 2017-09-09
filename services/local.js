export default {
    getPosts() {
        return new Promise(resolve => {
            resolve([{
                title: "NextJS : Yon gid pou demare",
                thumbnail: './static/img/blog1.jpg',
                pubDate: '20 january 2017',
                author: 'Skydev'
            }]);
        });
    }
}