<template>
  <div>
    <main class="ml-0 sm:ml-80">
      <!-- <Header :isOpen="isOpen" @openNav="openNav" /> -->
      <AsideBar :isOpen="isOpen" @toggleMain="toggleMain" />

      <slot />
      <Footer />
    </main>
  </div>
</template>
<script setup>
const isOpen = false;
const isChat = useState(() => false);
const toggleMain = (event) => {
  isChat.value = event;
};
</script>
