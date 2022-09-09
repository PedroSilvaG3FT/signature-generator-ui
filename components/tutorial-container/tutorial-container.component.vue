<template>
  <section id="tutorial-container" class="animate__animated animate__fadeIn">
    <h1>Como colocar no e-mail?</h1>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }}- {{ item }}
      </li>
    </ul>

    <button @click="handleClickClose">Entendi</button>
  </section>
</template>

<script src="./tutorial-container.component.ts" lang="ts"></script>
<style src="./tutorial-container.component.scss" lang="scss" scoped></style>
