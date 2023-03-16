<template>
  <div id="all" ref="container">
  <!-- This is now the root element  -->
  <nav role="navigation">
    <div id="menuToggle">

    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a @click="scrollToProjects"><li>Projects</li></a>
      <a @click="scrollToContact"><li>Contact</li></a>
      <a ><li>My CV</li></a>
    </ul>
    
  </div>
</nav>
        
  <div id="mainbody" v-if="true">
    <div id="aboutme">
      <p id="workProjects">I am Grzegorz FrontEnd Developer, <br> thanks to the knowledge of <br> the following technologies I create websites.</p>
    </div>
    <div id="technologies" data-aos="fade-right" data-aos-duration="900">
      <div id="container">
        <button class="btns" id="nodejsb"><font-awesome-icon icon="fa-brands fa-node" id="nodejsi" class="icons2"/></button>
        <button class="btns" id="html5b"><font-awesome-icon icon="fa-brands fa-html5" id="html5i" class="icons2"/></button>
        <button class="btns" id="cssb"><font-awesome-icon icon="fa-brands fa-css3" id="cssi" class="icons2"/></button>
        <button class="btns" id="vuejsb"><font-awesome-icon icon="fa-brands fa-vuejs" id="vuejsi" class="icons2"/></button>
        <button class="btns" id="mongodbb"><font-awesome-icon icon="fa-solid fa-database" id="mongodbi" class="icons2"/></button>
        <button class="btns" id="jsb"><font-awesome-icon icon="fa-brands fa-square-js" id="jsi" class="icons2"/></button>
      </div>
    </div>
    <div id="projects" data-aos="fade-right" data-aos-duration="1500">
      <p id="workProjects">Below are some examples from my projects...</p>
      <div id="containerCards">
        <div class="card" data-aos="flip-left" data-aos-duration="1000">
          <p id="projectTitle">Discord.js Bot</p>
          <hr> 
          <p id="projectDescription">Discord Bot that saves and displays chess profiles of users from platforms: chess.com and lichess.com</p>
          <a href="https://github.com/GrzegorzSiemieniec/bot" target="_blank"><button id="githubProject"><p id="in"><font-awesome-icon icon="fa-brands fa-github" class="iconsProjects"/> Github</p></button></a>
        </div>
        <div class="card" data-aos="flip-left" data-aos-duration="1000">
          <p id="projectTitle">Saving visits</p>
          <hr> 
          <p id="projectDescription">A simple website made in php, recording customer visits to the company in a database</p>
          <a href="https://github.com/GrzegorzSiemieniec/KsiegaGosci" target="_blank"><button id="githubProject"><p id="in"><font-awesome-icon icon="fa-brands fa-github" class="iconsProjects"/> Github</p></button></a>
        </div>
        <div class="card" data-aos="flip-left" data-aos-duration="1000">
          <p id="projectTitle">Lorem Ipsum</p>
          <hr> 
          <p id="projectDescription"></p>
          <a href="https://github.com/GrzegorzSiemieniec/bot" target="_blank"><button id="githubProject"><p id="in"><font-awesome-icon icon="fa-brands fa-github" class="iconsProjects"/> Github</p></button></a>
        </div>
        <div class="card" data-aos="flip-left" data-aos-duration="1000">
          <p id="projectTitle">Lorem Ipsum</p>
          <hr> 
          <p id="projectDescription"></p>
          <a href="https://github.com/GrzegorzSiemieniec/bot" target="_blank"><button id="githubProject"><p id="in"><font-awesome-icon icon="fa-brands fa-github" class="iconsProjects"/> Github</p></button></a>
        </div>
        <div class="card" data-aos="flip-left" data-aos-duration="1000">
          <p id="projectTitle">Lorem Ipsum</p>
          <hr> 
          <p id="projectDescription"></p>
          <a href="https://github.com/GrzegorzSiemieniec/bot" target="_blank"><button id="githubProject"><p id="in"><font-awesome-icon icon="fa-brands fa-github" class="iconsProjects"/> Github</p></button></a>
        </div>
      </div>
    </div>
  </div>
  <div id="contact" data-aos="fade-up" data-aos-duration="1000">
    <p id="work">Let's start working together.</p>
    <p id="mail">gsiemieniec@gmail.com</p>
    <a href="mailto:grzegorz021104@gmail.com"><button text @click="sendMail" class="btn" id="bc"><p>Contact me</p></button></a>

  </div>
  <div class="footer" id="footer">
      <button class="back-to-top" @click="scrollToTop"><font-awesome-icon icon="fa-solid fa-angle-up" /><br>Back to top</button>
      <p id="author">© 2023 Grzegorz Siemieniec
      <a href="https://www.linkedin.com/in/grzegorz-siemieniec-526539250/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" class="icons" @mouseover="hoveringButton1 = true" @mouseout="hoveringButton1 = false" :class="{ 'pulse': hoveringButton1 }"/></a>
      <a href="https://github.com/GrzegorzSiemieniec" target="_blank"> <font-awesome-icon icon="fa-brands fa-github" class="icons" @mouseover="hoveringButton2 = true" @mouseout="hoveringButton2 = false" :class="{ 'pulse': hoveringButton2 }"/></a></p>
  </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
/*eslint-disable */
export default {
  name: 'PortfolioList',
  props: {
    targetSelector: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      hoveringButton1: false,
      hoveringButton2: false,
      hoveringButton3: false,
      hoveringButton4: false,
      hoveringButton5: false
    };
  },
  created() {
    AOS.init();
    this.maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.addEventListener('scroll', this.handleScroll);
  
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrollHTML);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 0;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToProjects(){
      const element = document.getElementById('projects');
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
    scrollToContact(){
      const element = document.getElementById('contact');
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll2);
  }
}
/*eslint-disable */

</script>

<style>
  @import '../components/style.css';
</style>

<style scoped>
  @import '../components/bstyle.css';
</style>
