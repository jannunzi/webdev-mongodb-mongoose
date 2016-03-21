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
            console.log(blog);
        }
    }
})();