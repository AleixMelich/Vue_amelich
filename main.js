const app = Vue.createApp({
    data() {
        return {
            product: 'Primera Equipacio FCB 22/23',
            image: './assets/images/primera_equipacio.jpg',
            inventory: 100,
            details: ['50% cotton', '30% wool','20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ]
        }
    }
})