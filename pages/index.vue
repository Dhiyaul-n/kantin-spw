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
  <div class="wrapper bg-gray-600 w-[100%] min-h-screen ">
    <div class="homepage-1 flex justify-center items-center h-screen scroll-smooth" id="section1">
      <img
        class="homepage-img-1 shadow-2xl hover:shadow-none rounded-[50px] hover:rounded-[100px] w-[145px] h-[40px] object-cover hover:w-[80%] hover:h-[85%] transition-all duration-1000 ease-in-out"
        src="../assets/img/homepage.png" alt="">
    </div>

    <div class="flex justify-center ">
      <nav class="Sidebar flex justify-between bg-[#1E1E1E] rounded-full items-center w-[90%] h-[10%] ">
        <div class="flex ml-[2vw] items-center">
          <span class="ham" @click="showSidebar">
            <svg class="w-12 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </span>
          <div class="Tilt_nav flex items-center">
            <p class="font-bold text-white text-[2rem]">KANTIN</p>
            <img class="h-10 p-2" src="@/assets/img/logo-spw.png" alt="Logo SPW">
          </div>
        </div>
        <div class="showSidebar fixed h-[100vh] top-0 bg-[] flex z-50 w-[40%] ps-14 bg-[#3F3F3F] left-[-100%]">
          <span class="ham" @click="hideSidebar">
            <svg class="w-12 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </span>
          <div class="List_sidebar text-white ">
            <NuxtLink to="">
              <p>Homepage ></p>
            </NuxtLink>
            <NuxtLink to="">
              <p>Cart</p>
            </NuxtLink>
            <NuxtLink to="">
              <p>Login</p>
            </NuxtLink>
            <NuxtLink to="">
              <p>Register</p>
            </NuxtLink>
            <NuxtLink to="">
              <p>Catalogue</p>
            </NuxtLink>
          </div>
        </div>

        <div class="relative left-[25vw] items-end">
          <NuxtLink to="cart">
            <button
              class=" h-[100%] text-[16px] font-ubuntu font-[800] hover:bg-[transparent] text-white duration-700 ease-in-out flex items-center">
              <svg class="  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>Cart
            </button>
          </NuxtLink>
        </div>

        <NuxtLink class="w-[10%]" to="login">
          <button
            class="bg-[#ededed] rounded-[40px]  w-[8vw] h-[20%] text-[18px] text-black font-ubuntu font-[800] hover:bg-[transparent] hover:text-white duration-700 ease-in-out">
            Log in
          </button>
        </NuxtLink>

      </nav>
    </div>

    <h1 class="text-white text-[20px] font-staat font-bold relative py-[1%] mx-[10%]">
      <NuxtLink to="/">
        HOMEPAGE/
      </NuxtLink>
    </h1>

    <div class="bg-white/30 flex justify-center items-center w-[45%] h-[50vh] mx-[10%] rounded-[30px]">

      <div class="carousel-wrapper flex justify-center items-center">
        <span id="item-1"></span>
        <span id="item-2"></span>
        <span id="item-3"></span>
        <span id="item-4"></span>

        <div class="carousel-item item-1 flex justify-center items-center">
        </div>

        <div class="carousel-item item-2 flex justify-center items-center">
        </div>

        <div class="carousel-item item-3 flex justify-center items-center">
        </div>

        <div class="carousel-item item-4 flex justify-center items-center">
        </div>

      </div>

    </div>


    <div
      class=" w-[30%] h-[100%] bg-white rounded-[20px] relative left-[25%] justify-start shadow-[0_0px_200px_5px_rgba(255,255,255,0.3)]">
      <h1 class="text-center text-[30px] text-[#333] font-quantico">Best seller</h1>
      <div class="grid grid-cols-4 relative gap-2 mx-1">

        <a href="#item-1">
          <div
            class="flex justify-center bg-transparent duration-700 shadowFull rounded-[14px] h-[10vh] w-[100%] relative items-center">
            <img class="w-[100%] h-[100%] scale-75" src="../assets/img/salad-buah-homepage.png">
          </div>
        </a>


        <a href="#item-2">
          <div
            class="flex justify-center bg-white duration-700 shadowFull rounded-[14px] h-[10vh] w-[100%] relative items-center">
            <img class="w-[100%] h-[100%] scale-75" src="../assets/img/sosis.png">
          </div>
        </a>


        <a href="#item-3">
          <div
            class="flex justify-center bg-white duration-700 shadowFull rounded-[14px] h-[10vh] w-[100%] relative items-center">
            <img class="w-[100%] h-[100%] scale-75" src="../assets/img/nasi-kuning.png">
          </div>
        </a>



        <a href="#item-4">
          <div
            class="flex justify-center bg-white duration-700 shadowFull rounded-[14px] h-[10vh] w-[100%] relative items-center">
            <img class="w-[70%] h-[70%] hover:w-[100%] hover:h-[100%] duration-700 ease-in-out "
              src="../assets/img/dumpling.png">
          </div>
        </a>

      </div>

      <div class="relative left-[35%] w-[100%] ">
        <NuxtLink to="/produk">
          <button
            class="bg-[#F7B945] hover:bg-transparent duration-200 hover:text-white hover:border-white text-center font-staat font-bold text-[10px] w-[30%] rounded-[15px] my-2 p-2">
            LIHAT SEMUA MENU
          </button>
        </NuxtLink>
      </div>


    </div>

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