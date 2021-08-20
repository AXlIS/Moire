<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="good.img" srcset="img/product-1@2x.jpg 2x" alt="Название товара">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ good.title }}
      </a>
    </h3>

    <span class="catalog__price">
              {{ good.price }} ₽
            </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA" checked="">
          <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
          <span class="colors__value" style="background-color: #8BE000;">
                  </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
          <span class="colors__value" style="background-color: #222;">
                  </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "GoodItem",
  props: ['good'],
  components: {}
})
</script>

<style scoped>

</style>
