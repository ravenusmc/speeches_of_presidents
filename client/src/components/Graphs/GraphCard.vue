<template>
  <div>
    <!-- <Modal
      :showModal="showModal"
      :modalTitle="modalTitle"
      @close-modal="update"
    /> -->
    <GChart
      :type="typeOne"
      :data="data"
      :options="options"
      :events="chartEvents"
      ref="gChart"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import Modal from "@/components/drilldown/Modal.vue";
import { GChart } from "vue-google-charts";

export default {
  name: "GraphCard",
  props: ["typeOne", "data", "options"],
  components: {
    // Modal,
    GChart,
  },
  data() {
    return {
      modalTitle: "",
      showModal: false,
      chartEvents: {
        select: () => {
          this.modalTitle = "Drill Down Data for ";
          const chart = this.$refs.gChart.chartObject;
          const selection = chart.getSelection()[0];
          let row = selection.row + 1;
          let actionNumber = this.data[row][0];
          const payload = {
            actionNumber,
          };
          this.fetchDrillDownDataForForm({ payload });
          this.showModal = true;
        },
      }, // End Chart Events
    };
  },
  methods: {
    ...mapActions('data', ['fetchDrillDownDataForForm']),
    update(close) {
      this.showModal = close;
    },
  }, // End of Methods
};
</script>

<style>
</style>