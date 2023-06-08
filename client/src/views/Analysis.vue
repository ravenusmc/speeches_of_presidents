<template>
  <div>
    <div class="title-div">
      <h1 class="title center">Analysis of the speeches</h1>
    </div>
    <div class='form-area'>
      <SelectionForm/>
    </div>
    <section>
      <div class='main-graph'>
        <MasterGraph />
      </div>
      <div class='initial-graph-area'>
        <FourthCorpus />
        <FifthCorpus />
        <SixthCorpus />
      </div>
    </section>
  </div>
</template>

<script>
import SelectionForm from "@/components/forms/SelectionForm.vue";
import FourthCorpus from "@/components/Graphs/FourthCorpus.vue";
import FifthCorpus from "@/components/Graphs/FifthCorpus.vue";
import SixthCorpus from "@/components/Graphs/SixthCorpus.vue";
import MasterGraph from "@/components/Graphs/MasterGraph.vue";

export default {
  name: "Analysis",
  components: {
    SelectionForm,
    FourthCorpus,
    FifthCorpus,
    SixthCorpus,
    MasterGraph,
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

.form-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-graph {
  display: flex;
  justify-content: center;

}

.initial-graph-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>