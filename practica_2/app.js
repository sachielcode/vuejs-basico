new Vue({
	el: '#app',

	data() {
		return {
			courses: [],
			title: '',
			time: '',
		};
	},

	computed: {
		totalTime() {
      let sum = 0;
      this.courses.forEach(element => {
        sum += parseInt(element.time);
      });
			return sum;
		},
	},

	methods: {
		saveCourse() {
			this.courses.push({ title: this.title, time: this.time });
			console.log(this.courses);
		},
	},
});
