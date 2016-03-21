(function() {
    angular
        .module("MongooseSchemaApp")
        .controller("BlogPostController", BlogPostController);

    function BlogPostController(BlogService) {

        var vm = this;

        vm.postBlog = postBlog;

        function postBlog(blog) {
            BlogService.postBlog(blog);
        }
    }
})();