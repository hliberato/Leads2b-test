<template>
  <div id="app">
    <el-container>
      <el-header height="auto">
        <Header />
      </el-header>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Header: () => import('./components/Header'),
    Footer: () => import('./components/Footer')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900');

* {
  font-family: 'Montserrat', sans-serif !important;
  box-sizing: border-box;
  outline: none;
}
body, html, #app, .el-container {
  height: 100%;
  margin: 0;
  padding: 0;
}
header, footer {
  color: #fff;
  background-color: #409EFF;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.el-form-item__error {
  left: initial !important;
  right: 0;
}
.el-main {
  padding: 20px 0 !important;
}
@media (max-width: 414px) {
  header {
    padding: 0 12px !important;
    h1 {
      font-size: 1.3rem !important;
    }
  }
  footer {
    height: 40px !important;
    font-size: .6rem;
    img {
      width: .6rem !important;
    }
  }
  .el-message-box {
    max-width: 90%;
  }
}

</style>
