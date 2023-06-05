<template>
  <div>
    <form class="contact-form" @submit="changeParty">
      <div class="form-group">
        <label for="party">Select Party:</label>
        <select v-model="selectedParty">
          <option disabled value="">Please select one</option>
          <option v-for="party in parties" :key="party" :value="party">
            {{ party }}
          </option>
        </select>
      </div>
      <button
        @click.prevent="changeParty"
        type="submit"
        name="login"
        class="btn btn-primary button-fix"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SelectionForm",
  data() {
    return {
      parties: ["Democratic", "Republican"],
      selectedParty: null,
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
	
