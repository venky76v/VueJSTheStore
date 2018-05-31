Vue.use(VeeValidate);

var vm = new Vue({
    el: "#checkout",
    data: {
        customer: {
            name: "",
            phone: "",
            address: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                cityTown: "",
                stateProvince: "",
                postalCode: "",
                country: ""
            }
        }
    },
    methods: {
        onSave: function () {
            this.$validator.validateAll()
                .then(function (result) {
                    if (result) {
                        // Call API to save data to dabatase
                    }
                })

        }
    }
})