<template>
  <div class="container">
    <header>Exchange Rates Widget</header>
    <main>
      <converter :title="title" />
    </main>
    <footer>&copy; Copyright {{ new Date().getFullYear() }}</footer>
  </div>
</template>

<script>
import Converter from "./components/Converter.vue";
export default {
  name: "App",
  components: {
    Converter,
  },
  data() {
    return {
      title: "Exchange Rates",
    };
  },
};
</script>

<style lang="scss">
$primary: #6893d3;

$main-font: Arial, "Helvetica Neue", Helvetica, sans-serif;

html,
body {
  margin: 0;
  padding: 0;
  font-family: $main-font;
  font-size: 14px;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header,
footer {
  padding: 15px 30px;
  background: $primary;
}
main {
  flex: 1;
}
</style>
