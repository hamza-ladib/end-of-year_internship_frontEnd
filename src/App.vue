

<template>

<router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
     
</template>

<script >

</script>

<style >
.route-enter-from {
  opacity: 0;
  transform: translateX(300px);
}
.route-enter-active {
  transition: all 0.4s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

.route-leave-active {
  transition: all 0.4s ease-in;
}
</style>
