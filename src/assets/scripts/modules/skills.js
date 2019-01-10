import viewObserver from "./viewObserver.js";
import Vue from 'vue';

const skills = () => {

  Vue.directive('animate', {
    inserted: (element, binding) => {
      let val = binding.value;

      const animatedCircle = element.querySelector('.skill__circle_above');
      const dashArray = parseInt(getComputedStyle(animatedCircle).getPropertyValue("stroke-dasharray"));
      const percent = dashArray * (val / 100);
      function inViewAction() {
        if (viewObserver(element)) {
          animatedCircle.style.strokeDasharray = percent + dashArray;
        }
      }
      inViewAction();
      window.addEventListener('scroll', () => inViewAction());
    }
  });

  const skill = {
    template: "#skill",
    props: {
      skillName: String,
      skillPercents: Number
    }
  }

  const skillsRow = {
    template: "#skills-row",
    components: {
      skill
    },
    props: {
      skill: Object
    }
  };

  new Vue({
    el: "#skills-container",
    components: {
      skillsRow
    },
    data: {
      skills: {}
    },
    created() {
      const data = require("../../../data/skills.json");
      this.skills = data;
    },
    template: "#skills-list"
  });
};

export default skills