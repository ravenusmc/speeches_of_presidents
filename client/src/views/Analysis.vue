<template>
  <div>
    <div class="title-div">
      <h1 class="title center">Analysis of the speeches</h1>
    </div>
    <section>
      <div class='initial-graph-area'>
        <FourthCorpus />
        <FifthCorpus />
        <SixthCorpus />
      </div>
    </section>
  </div>
</template>

<script>
import FourthCorpus from "@/components/Graphs/FourthCorpus.vue";
import FifthCorpus from "@/components/Graphs/FifthCorpus.vue";
import SixthCorpus from "@/components/Graphs/SixthCorpus.vue";

export default {
  name: "Analysis",
  components: {
    FourthCorpus,
    FifthCorpus,
    SixthCorpus,
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

.initial-graph-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>