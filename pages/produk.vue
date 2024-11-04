<script setup>
const isHidden = ref(true)
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from(".Sidebar", {
    opacity: 0,
    y: -100,
    duration: 1
  });
})

function showSidebar() {
  isHidden.value = !isHidden.value
}

</script>


<template>
  <div class="wrapper w-[100%] min-h-screen">
    <!-- Navbar -->
    <div class="flex justify-center ">
      <nav class="Sidebar flex justify-between bg-[#1E1E1E] rounded-full items-center fixed w-[100%] h-[10%] ">
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
        <div class="fixed h-[100vh] top-0 left-0 bg-[#3F3F3F] flex z-50 w-[40%] ps-14"
          :class="{ 'left-[-50%]': isHidden }">
          <span class="ham" @click="showSidebar">
            <svg class="w-12 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </span>
          <div class="List_sidebar text-white">
            <NuxtLink to="">
              <p>HOMEPAGE ></p>
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
              class=" w-[100%] h-[100%] text-[16px] font-ubuntu font-[800] hover:bg-[transparent] text-white duration-700 ease-in-out flex items-center">
              <svg class=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>Cart
            </button>
          </NuxtLink>
        </div>

        <NuxtLink class="w-[10%]" to="login">
          <button
            class="bg-[#ededed] rounded-[40px]  w-[8vw] h-[6vh] text-[18px] font-ubuntu font-[800] hover:bg-[transparent] hover:text-white duration-700 ease-in-out">
            Log in
          </button>
        </NuxtLink>

      </nav>
    </div>

    <div class="flex justify-center mt-[10%] w-[100%] h-[40vh]">
      <div class="catalogue-img flex justify-center w-[80%] h-[100%] pt-[10%] rounded-[4vh]">
      </div>
    </div>


    <h1 class="text-white text-[25px] font-staat font-bold mx-[10%] mt-[5%]">
      HOMEPAGE/ CATALOGUE
    </h1>


    <form>
      <div class="flex justify-center items-center mb-12">
        <div class="relative w-[85%]">
          <input type="search" id="search-dropdown" class=" p-2.5 w-full text-sm  rounded-lg outline-none"
            placeholder="Search" required />
          <button type="submit"
            class=" absolute top-0 end-0 w-[5%] px-5 h-full text-sm font-medium text-white bg-black rounded-e-lg border border-blue-700 hover:bg-gray-300 duration-700">
            <svg class="w-4 h-4 flex justify-center items-center " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </form>


    <div class="grid grid-cols-3 justify-center gap-10 w-[90%] place-items-end ">
      <div v-for="(c, i) in [...Array(105).keys()]"
        class="w-[70%] h-[100%] grid grid-cols-2 my-4 rounded-lg bg-white text-center shadow-[0_5px_5px_5px_rgba(000,000,000,0.7)]">
        <div class="w-full h-full text-center">
          {{ i }}
          <p class="relative text-left left-2 font-bold">Product</p>
          <p class="relative text-left left-2 text-red-600 font-bold">RP.5000</p>
          <button
            class=" rounded-[7px] top-6 bg-[#2C2C2C] text-sm p-1 text-white hover:bg-gray-300 hover:border-[1px] hover:border-gray-700 hover:text-black duration-700 relative w-[90%] h-[21%] font-inter font-medium">
            add to cart
          </button>
        </div>

        <div class="flex justify-center items-center">
          <img class="w-[80%] h-[70%]" src="../assets/img/salad-buah-homepage.png">
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-image: url('@/assets/img/catalogue-bg.png');
  background-size: contain;
  background-repeat: repeat-y;
}

.catalogue-img {
  background-image: url('@/assets/img/catalogue-header.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat
}
</style>