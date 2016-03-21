module.exports = function(app) {
    app.post("/api/experiments/mongoose-schema/blog", postBlog);

    function postBlog(req, res) {
        var blogPost = req.body;
        console.log(blogPost);
    }
}