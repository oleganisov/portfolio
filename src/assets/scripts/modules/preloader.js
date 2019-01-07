import Vue from "vue";
const preloader = () =>{
new Vue({
  el: "#preloader-container",
  data: {
    percent: 50,
    loadFlag: false
  },
  computed: {
    animatedNumber() {
      return this.percent.toFixed(0);
    }
  },
  template: "#preloader"
})
};

export default preloader;