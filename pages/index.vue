<template>
  <div class="wrapped bg-[#353636] w-full">
    <div class="homepage-1 flex justify-center items-center h-screen">
      <img
        class="homepage-img-1 rounded-[50px] w-[175px] h-[48px] object-cover hover:w-[80%] hover:h-[85%] transition-all duration-1000 ease-in-out"
        src="../assets/img/homepage.png" alt="">
    </div>

    <div class="header flex justify-center items-center">
      <div class="bg-[#1E1E1E] w-[85%] h-[80px] rounded-[40px] flex justify-between items-center ">
        <div class="flex justify-start items-center">
          <button>
            <svg class="relative left-4 w-20 h-14 text-white-800 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
          <h1 class="font-staat text-[40px] text-white font-bold m-[5%]">KANTIN</h1>
        </div>
        <NuxtLink to="login">
          <button
            class="bg-[#ededed] rounded-[40px] w-[160px] h-[60px] m-3 text-[20px] font-ubuntu font-[800] hover:bg-[transparent] hover:text-white duration-700 ease-in-out">
            Log in
          </button>
        </NuxtLink>
      </div>
    </div>

    <h1 class="text-white text-[30px] font-staat font-bold relative py-[1%] mx-[10%]">
      <NuxtLink to="/">
        HOMEPAGE/
      </NuxtLink>
    </h1>

    <div class="bg-[#FFFFFF, 0.4 w-100vwh h-[40%]">
      <img src="" alt="">
    </div>
  </div>
</template>
<style scoped></style>