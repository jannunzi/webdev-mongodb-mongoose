(function() {
    angular
        .module("MongooseSchemaApp")
        .controller("MongooseSchemaController", mongooseSchemaController);

    function mongooseSchemaController() {

        var vm = this;

        vm.post = post;

        function post(blog) {
            console.log(blog);
        }
    }
})();