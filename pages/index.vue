<script setup>
import { gsap } from 'gsap';

onMounted(() => {

  gsap.from(".homepage-1", {
    opacity: 0,
    y: 0,
    duration: 3
  });
})


function showSidebar() {
  gsap.to(".showSidebar", {
    left: 0,
    ease: 'power1.inOut',
    duration: 1,
    delay: 0
  })
}

function hideSidebar() {
  gsap.to(".showSidebar", {
    left: '-100%',
    ease: 'power1.inOut',
    duration: 1,
    delay: 0
  })
}
</script>

<template>
  <div>
    <NuxtLink to="/login">Login</NuxtLink>
  </div>
</template>
<style scoped>
/* .wrapper {
  background-image: url('@/assets/img/catalogue-bg.png');
  background-size: cover;
  background-repeat: repeat-y
} */

.carousel-wrapper {
  height: 300px;
  position: relative;
  width: 300px;
}

.carousel-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px 50px;
  opacity: 0;
  transition: all 0.8s ease-in-out;
}

.arrow {
  border: solid rgba(39, 39, 39, 0.8);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;
}


.light {
  color: white;
}

@media (max-width: 480px) {

  .arrow,
  .light .arrow {
    background-size: 10px;
    background-position: 10px 50%;
  }
}


/*Select every element*/
[id^="item"] {
  display: none;
}

.item-1 {
  z-index: 2;
  opacity: 1;
  background-image: url("assets/img/salad-buah-homepage.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.item-2 {
  background-image: url("assets/img/sosis.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.item-3 {
  background-image: url("assets/img/nasi-kuning.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}

.item-4 {
  background-image: url("assets/img/dumpling.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}



*:target~.item-1 {
  opacity: 0;
}

#item-1:target~.item-1 {
  opacity: 1;
}

#item-2:target~.item-2,
#item-3:target~.item-3,
#item-4:target~.item-4 {
  z-index: 3;
  opacity: 1;
}

.shadowFull:hover {
  box-shadow: 0px 0px 10px 1px #d1d1d1;
}
</style>