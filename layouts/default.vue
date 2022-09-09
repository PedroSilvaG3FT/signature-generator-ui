<template>
  <section id="default">
    <article class="animate__animated animate__fadeInLeft">
      <img src="assets/images/logo-white.png" alt="CBYK" />
      <h4>Assinatura de e-mail</h4>
    </article>

    <main>
      <slot />
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import "/styles/global.scss";

#default {
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @extend .container;

  > article {
    width: 40%;
    text-align: center;
  }

  > main {
    width: 60%;
  }

  @media only screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: flex-start;

    > main,
    > article {
      width: 100%;

      > img {
        width: 150px;
      }
    }

    > article {
      margin-top: 3rem;
    }
  }
}
</style>
