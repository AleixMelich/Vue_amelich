const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Primera Equipacio FCB 22/23',
            image: './assets/images/primera_equipacio.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool','20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/primera_equipacio.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/segona_equipacio.jpg' },
             ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})