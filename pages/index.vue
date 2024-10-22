<template>
  <div class="wrapped bg-[#484848] w-full h-full">
    <div class="homepage-1 flex justify-center items-center h-screen">
      <img
        class="homepage-img-1 shadow-[0_0px_20px_10px_rgba(000,000,000,1)] hover:shadow-none rounded-[50px] hover:rounded-[100px] w-[145px] h-[40px] object-cover hover:w-[80%] hover:h-[85%] transition-all duration-1000 ease-in-out"
        src="../assets/img/homepage.png" alt="">
    </div>

    <div class="header">
      <div class="bg-[#1E1E1E] w-screen h-[60px] flex justify-between items-center rounded-[50px] ">
        <div class="flex justify-start items-center">
          <button>
            <svg class="relative left-4 w-12 h-10 text-white-800 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
          <h1 class="font-staat text-[30px] text-white font-bold m-[5%]">KANTIN</h1>
          <img class="relative mx-1 w-12" src="../assets/img/logo-spw.png">
        </div>

        <div class="flex justify-center items-center">
          <button
            class=" w-[160px] h-[60px] m-3 mx-8 text-[20px] font-ubuntu font-[800] hover:bg-[transparent] text-white duration-700 ease-in-out relative start-1/4">
            <NuxtLink to="cart">
              <svg class="w-[90%] h-[50%] text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>
            </NuxtLink>
          </button>

          <NuxtLink to="login">
            <button
              class="bg-[#ededed] rounded-[40px] w-[160px] h-[40px] m-3 text-[18px] font-ubuntu font-[800] hover:bg-[transparent] hover:text-white duration-700 ease-in-out">
              Log in
            </button>
          </NuxtLink>
        </div>

      </div>
    </div>

    <h1 class="text-white text-[20px] font-staat font-bold relative py-[1%] mx-[10%]">
      <NuxtLink to="/">
        HOMEPAGE/
      </NuxtLink>
    </h1>

    <div class="bg-white/30 flex justify-center items-center w-[45%] h-[50vh] mx-[10%] rounded-[30px]">
      <img src="../assets/img/salad-buah-homepage.png" alt="" class="w-[40%] h-[60%] ">
    </div>
    <div
      class="bg-[#353636] w-[30%] h-[100%] rounded-[20px] relative left-[25%] justify-start shadow-[0_0px_200px_5px_rgba(255,255,255,0.3)]">
      <h1 class="text-center text-white text-[30px] font-quantico">Best seller</h1>
      <div class="grid grid-cols-4 relative left-[5px] mx-1">

        <div
          class="flex justify-center bg-white hover:bg-transparent duration-700 hover:border-[1px] hover:border-white rounded-[14px] w-[90%] relative items-center">
          <img class="w-[100%] h-[100%] scale-75" src="../assets/img/salad-buah-homepage.png">
        </div>

        <div
          class="flex justify-center bg-white hover:bg-transparent duration-700 hover:border-[1px] hover:border-white rounded-[14px] w-[90%] relative items-center">
          <img class="w-[100%] h-[100%] scale-75" src="../assets/img/salad-buah-homepage.png">
        </div>

        <div
          class="flex justify-center  bg-white hover:bg-transparent duration-700 hover:border-[1px] hover:border-white rounded-[14px] w-[90%] relative items-center">
          <img class="w-[100%] h-[100%] scale-75" src="../assets/img/salad-buah-homepage.png">
        </div>
        <button>
          <div
            class="flex justify-center bg-white hover:bg-transparent duration-700 hover:border-[1px] hover:border-white rounded-[14px] w-[90%] relative items-center">
            <img class="w-[100%] h-[100%] scale-75" src="../assets/img/salad-buah-homepage.png">
          </div>
        </button>
      </div>

      <div class="relative left-[35%] w-[100%] ">
        <NuxtLink to="/catalogue">
          <button
            class="bg-[#F7B945] hover:bg-transparent duration-200 hover:text-white hover:border-white text-center font-staat font-bold text-[10px] w-[30%] rounded-[15px] my-2 p-2">
            LIHAT SEMUA MENU
          </button>
        </NuxtLink>
      </div>


    </div>

  </div>
</template>
<style></style>