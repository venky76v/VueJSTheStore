var vm = new Vue({
    el: "#index-page",
    data: {
        appName: "Product List",
        today: new Date(),
        error: "",
        products: [],
        isBusy: false
    },
    methods: {
        onBuy: function (product) {
            alert("Buying : " + product.name);
        },
        addProduct: function () {
            this.products.push({
                imageUrl: "/images/noimage.png",
                name: "Hello",
                brand: "None of your business",
                price: 1.00,
                category: "Temp products",
                onSale: true
            })
        },
        onSort: function (by) {
            this.products = _.sortBy(this.products, by);
        }
    },
    mounted: function () {
        // Call the API
        this.error = "";
        this.isBusy = true;
        axios.get("/api/products")
            .then(function (res) {
                this.products = res.data.results;
                this.isBusy = false;
            }.bind(this))
            .catch(function () {
                this.error = "Could not load products...";
                this.isBusy = true;
            }.bind(this));
    }
});