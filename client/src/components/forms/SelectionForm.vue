<template>
  <div>
    <form class="contact-form" @change="changeParty">
      <div class="form-group">
        <label for="party">Select Party:</label>
        <select v-model="selectedParty">
          <option disabled value="">Please select one</option>
          <option v-for="party in parties" :key="party" :value="party">
            {{ party }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SelectionForm",
  data() {
    return {
      parties: ["Original Graphs","Democratic", "Republican"],
      selectedParty: "Original Graphs",
    };
  },
  methods: {
    ...mapActions("data", ["changeDynamicGraphs"]),
    changeParty() {
      const payload = {
        party: this.selectedParty,
      };
      this.changeDynamicGraphs({ payload });
    },
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
	
