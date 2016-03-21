(function() {
    angular
        .module("MongooseSchemaApp")
        .controller("MongooseSchemaController", mongooseSchemaController);

    function mongooseSchemaController(MongooseSchemaService) {

        var vm = this;

        vm.post = post;

        function post(blog) {
            MongooseSchemaService.post(blog);
        }
    }
})();