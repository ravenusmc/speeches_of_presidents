<template>
  <div>
    <GraphCard
      :typeOne="typeOne"
      :data="MasterGraphSentiment"
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
    ...mapGetters("data", ["MasterGraphSentiment"]),
  },
  data() {
    return {
      typeOne: "ColumnChart",
      chartOptionsOne: {
        title: "Main Grap",
        legend: { position: "top" },
        colors: ["#3b3b6d"],
        height: 630,
        width: 950,
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
