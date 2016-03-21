(function() {
    angular
        .module("MongooseSchemaApp")
        .factory("MongooseSchemaService", mongooseSchemaService);

    function mongooseSchemaService() {
        var api = {
            post: post
        };
        return api;

        function post(blog) {
            console.log(blog);
        }
    }
})();