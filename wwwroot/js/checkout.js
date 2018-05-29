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
            alert(JSON.stringify(this.customer));
        }
    }
})