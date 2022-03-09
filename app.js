const app = new Vue({
  el: '#app',
  data: {
    count: 0,
    anyString: ""
  },
  methods: {
    increments(x) {
      if (this.count <= 10 && this.count >= 0 && this.count + x > -1 && this.count + x < 11) {
        this.count = this.count + x;
      }
    }
  }
})