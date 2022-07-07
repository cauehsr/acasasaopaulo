var Checkout = {

    methods: {


        cep: function() {
            // 
        },

        init: function() {
            this.cep();

            $(window).on('hashchange', function() {
                Checkout.methods.steps();
            });

        },
        init_ajax: function() {}
    },
    ajax: function() {
        return this.methods.init_ajax()
    },
    mounted: function() {
        return this.methods.init()
    }
};

$(document).ready(function() {
   
});