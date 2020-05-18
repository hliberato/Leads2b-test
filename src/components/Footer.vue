<template lang="html">
  <div>
    <a href="https://github.com/hliberato" target="_blank">
      <img src="../assets/github.svg">
      <span>Henrique Liberato</span>
    </a>
    © 2020
    No rights reserved ;D
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
img {
  width: 1rem;
  margin-right: 4px;
  vertical-align: text-top;
}
a {
  color: inherit;
  margin-right: 4px;
}
</style>
