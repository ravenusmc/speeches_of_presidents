<template>
  <div>
    <GraphCard
      :typeOne="typeOne"
      :data="fourth_party_corpus_sentiment"
      :options="chartOptionsOne"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GraphCard from "@/components/Graphs/GraphCard.vue";

export default {
  name: "ActionsByCount",
  components: {
    GraphCard,
  },
  computed: {
    ...mapGetters("data", ["fourth_party_corpus_sentiment"]),
  },
  data() {
    return {
      typeOne: "ColumnChart",
      chartOptionsOne: {
        title: "Fourth Corpus",
        legend: { position: "top" },
        colors: ["#3b3b6d"],
        height: 500,
        width: 648,
        vAxes: {
          0: { title: "Sentiment" },
        },
        hAxes: {
          0: { title: "President" },
        },
        animation: {
          duration: 1000,
          easing: "linear",
        },
        vAxis: {
          viewWindow: {
            min: 0,
          },
        },
      },
    };
  },
};
</script>
