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
  justify-content: center;

  @extend .container;

  > article {
    width: 44%;
    text-align: center;
    padding-right: 2.4rem;

    > img {
      width: 80%;
      max-width: 410px !important;
    }
  }

  > main {
    width: 42%;
  }

  @media only screen and (max-width: 722px) {
    padding: 1.4rem 1rem;
    flex-direction: column;
    justify-content: flex-start;

    > main,
    > article {
      width: 100%;
      padding-right: 0;

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
