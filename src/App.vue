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

<style lang="scss" scope>
@import './main.scss';

header, footer {
  color: $--color-text-on-primary;
  background-color: $--color-primary;
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
