import Vue from 'vue';
import blogNavMenu from  "./blogNavMenu.js";
const blogList = () => {
  new Vue({
      el: '#blog',
      filters: {
          correctDate(val) {
              let date = new Date(val).toLocaleString('ru',{year: 'numeric', month: 'long', day: 'numeric'});
            return date;
          }
      },
      data: {
          posts: {}
      },
      created() {
          const data = require('../../../data/articles.json');
          this.posts=data;
      },
      mounted() {
        this.$nextTick()
        .then(() => {
          blogNavMenu();
        })
    }
  })
}

export default blogList