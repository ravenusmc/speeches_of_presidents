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
    https://github.com/ravenusmc/work_data_entry_tool/blob/main/client/src/components/actionForms/ActionsForm.vue
  </div>
</template>

<script>
// Allow user to select president based on party
export default {
  name: "SelectionForm",
  data() {
    return {
      parties: ["Democratic", "Republican"],
      selectedParty: null,
    };
  },
  methods: {
    // ...mapActions("data", ["submitActionToDatabase"]),
    changeParty() {
      const payload = {
        party: this.selectedParty,
      };
      // this.submitActionToDatabase({ payload });
    },
  },
};
</script>
	
