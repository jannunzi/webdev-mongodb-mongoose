(function() {
    angular
        .module("MongooseSchemaApp")
        .factory("MongooseSchemaService", mongooseSchemaService);

    function mongooseSchemaService($http) {
        var api = {
            postBlog: postBlog
        };
        return api;

        function postBlog(blog) {
            $http.post("/api/experiments/mongoose-schema/blog", blog);
        }
    }
})();