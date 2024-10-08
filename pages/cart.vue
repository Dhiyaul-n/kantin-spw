<template>
  <div class="wrapper">

    <div class="grid grid-cols-2 lg:grid-cols-4 justify-end place-items-center">
      <div v-for="(c, i) in 100" class="flip-card">
        <div class="flip-card-inner relative w-[300px] h-32">
          <div class="grid grid-cols-2 flip-card-front p-0">

            <div class="text-sm"">
              <p class=" title">nama product</p>
              <p>harga product</p>
            </div>

            <div class="">
              <img class="w-40" src="../assets/img/salad-buah-homepage.png" alt="">

            </div>

          </div>


          <div class="flip-card-back">
            <button class="bg-white text-black hover:bg-transparent duration-700 rounded-lg" @click="flipCardFront">add
              to cart</button>
            <p class="title">BACK</p>
          </div>
        </div>
      </div>
      <!-- <div class="relative" v-for="(c, i) in 100">
        <UCard class="card">
          <div class="card-inner">
            <div class="card-front">
              <div class="p-4">
                <div>
                  <p>Produk</p>
                  <p>Rp.10000</p>
                </div>
                <div><button class="bg-green-500 p-3 rounded">Add to Cart</button></div>
              </div>
              <div class="">
                <UIcon name="i-heroicons-information-circle"
                  class="absolute top-1 right-1 w-5 h-5 info-icon cursor-pointer" @mouseover="hover = true"
                  @mouseleave="hover = false" />
                <img src="" alt="Placeholder">
              </div>
            </div>
            <div class="card-back">
              b
            </div>
          </div>
        </UCard>
      </div> -->
    </div>

  </div>
</template>

<script setup>
import { gsap } from 'gsap';

function flipCardBack() {
  gsap.to('.flip-card-back', {
    rotateY: 0,
  })
  gsap.to('.flip-card-front', {
    rotateY: -180
  })
}
function flipCardFront() {
  gsap.to('.flip-card-back', {
    rotateY: 180,
  })
  gsap.to('.flip-card-front', {
    rotateY: 0
  })
}
</script>

<style>
/* From Uiverse.io by joe-watson-sbf */
.flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  /* position: relative; */
  /* width: 100%;
  height: 100%; */
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* 
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  } */

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 3px solid #f7b945;
  border-radius: 1rem;
}

.flip-card-front {
  background-color: white;
  color: black;
}

.flip-card-back {
  background-color: rgb(163, 163, 163, 0.5);
  color: white;
  transform: rotateY(180deg);
}
</style>