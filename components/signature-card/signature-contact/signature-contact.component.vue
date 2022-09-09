<template>
  <table id="signature-contact" width="100%">
    <tr>
      <td align="right">
        <img src="https://i.ibb.co/7QLy7g5/corner.png" />
      </td>
    </tr>

    <tr>
      <td align="right">
        <table>
          <tr>
            <td align="center" width="100%">
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
      <td align="right">
        <a href="https://www.cbyk.com.br" id="link">www.cbyk.com.br</a>
      </td>
    </tr>
  </table>
</template>

<script src="./signature-contact.component.ts" lang="ts"></script>
<style src="./signature-contact.component.scss" lang="scss" scoped></style>
