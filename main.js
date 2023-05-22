const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Equipacio 22/23',
            brand: 'FCB',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool','20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/primera_equipacio.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/segona_equipacio.jpg', quantity: 0 },
             ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})