<template>
  <div>
    <div class="title-div">
      <h1 class="title center">Analysis of the speeches</h1>
    </div>
    <section>
      <div>
        <FourthCorpus />
        <FifthCorpus />
      </div>
    </section>
  </div>
</template>

<script>
import FourthCorpus from "@/components/Graphs/FourthCorpus.vue";
import FifthCorpus from "@/components/Graphs/FifthCorpus.vue";

export default {
  name: "Analysis",
  components: {
    FourthCorpus,
    FifthCorpus,
  },
};
</script>

<style scoped>
.title-div {
  margin: 3% 0 3% 0;
}

.title {
  text-transform: uppercase;
}
</style>