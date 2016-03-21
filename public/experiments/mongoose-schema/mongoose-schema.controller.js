(function() {
    angular
        .module("MongooseSchemaApp")
        .controller("MongooseSchemaController", mongooseSchemaController);

    function mongooseSchemaController(MongooseSchemaService) {

        var vm = this;

        vm.postBlog = postBlog;

        function postBlog(blog) {
            MongooseSchemaService.postBlog(blog);
        }
    }
})();