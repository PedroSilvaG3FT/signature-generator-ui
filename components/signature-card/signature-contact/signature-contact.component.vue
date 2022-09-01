<template>
  <table id="signature-contact">
    <tr>
      <td align="right">
        <img src="https://i.ibb.co/7QLy7g5/corner.png" />
      </td>
    </tr>

    <tr>
      <td>
        <table>
          <tr>
            <td align="center">
              <a
                v-for="(item, index) in items"
                :key="index"
                :href="item.link"
                :title="item.title"
              >
                <img :alt="item.title" :src="item.imageURL" />
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td align="center">
        <a href="https://www.cbyk.com.br">www.cbyk.com.br</a>
      </td>
    </tr>
  </table>
</template>

<script src="./signature-contact.component.ts" lang="ts"></script>
<style src="./signature-contact.component.scss" lang="scss" scoped></style>
