Vue.component('CoinDetail', {
	props: ['changePercent', 'title', 'img', 'name'],
  data(){
    return {
      showPrices: false,
    }

}, 
methods:{
		toggleShowPrices() {
			this.showPrices = !this.showPrices;
		},
}, 
template: `
		<div>
			
		<img 
		v-on:mouseover="toggleShowPrices" 
		v-on:mouseout="toggleShowPrices" 
		:src="img" 
		:alt="name" />
    <h1 :class="changePercent > 0 ? 'green' : 'red'">
				{{ title }}
				<span v-if="changePercent > 0">👍</span>
				<span v-else-if="changePercent < 0">👎</span>
				<span v-else>🤞</span>
				<!-- Estas estructuras son equivalentes pero pero con v-if los elementos no existen en el DOM -->
				<!-- En cambio con v-show si exiten pero con style=display: none -->
				<!-- Si es un elemento que cambie constantemente es mejor v-show para no hacer tanto cambio en el DOM -->
				<!-- <span v-show='changePercent > 0'>👍</span>
      <span v-show='changePercent < 0'>👎</span>
      <span v-show='changePercent == 0'>🤞</span> -->
				<span v-on:click="toggleShowPrices">{{ showPrices ? '🙈' : '🐵' }}</span>
			</h1>
		</div>
  `
})

new Vue({
	el: '#app',

	data() {
		return {
			name: 'Bitcoin',
			symbol: 'BTC',
			img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
			changePercent: 1,
			actualPrice: 8400,
			prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
			pricesWithDays: [
				{ day: 'Lunes', value: 8400 },
				{ day: 'Martes', value: 7900 },
				{ day: 'Miercoles', value: 8200 },
				{ day: 'Jueves', value: 9000 },
				{ day: 'Viernes', value: 9400 },
				{ day: 'Sabado', value: 10000 },
				{ day: 'Domingo', value: 10200 },
			],
			showPrices: false,
			color: 'f4f4f4',
			value: 0,
		};
	},

	computed: {
		title() {
			return `${this.name} - ${this.symbol}`;
		},

		convertedValue() {
			if (!this.value) {
				return 0;
			}

			return this.value / this.actualPrice;
		},
	},

	watch: {
		showPrices(newVal, oldVal) {
			console.log(newVal, oldVal);
		},
	},

	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices;

			this.color = this.color.split('').reverse().join('');
		},
	},
});
