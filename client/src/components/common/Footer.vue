<template>
  <div>
    <footer>
      <div class="footer_fix">
        <h2 class="footerTitle font">
          Copyright &copy; 2023 Double Sun Productions<br />
        </h2>
        <div class="icon-div">
          <a href="https://twitter.com/mcuddy7">
            <fa-icon :icon="['fas', 'hashtag']" size="3x" />
          </a>
          <a href="https://codingsaga.wordpress.com/">
            <fa-icon class="test" :icon="['fas', 'pencil-alt']" size="3x" />
          </a>
          <a href="https://github.com/ravenusmc">
            <fa-icon :icon="['fas', 'code-branch']" size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/mcuddy1/">
            <fa-icon :icon="['fas', 'network-wired']" size="3x" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #343a40;
  height: 300px;
}
.footer_fix {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding-top: 50px;
}
.footerTitle {
  color: white;
  font-weight: bolder;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
}
.icon-div {
  margin-top: 20px;
}
a {
  padding: 10px;
  color: white;
}
</style>