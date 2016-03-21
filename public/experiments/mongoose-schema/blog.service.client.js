(function() {
    angular
        .module("MongooseSchemaApp")
        .factory("BlogService", BlogService);

    function BlogService($http) {
        var api = {
            postBlog: postBlog
        };
        return api;

        function postBlog(blog) {
            $http.post("/api/experiments/mongoose-schema/blog", blog);
        }
    }
})();