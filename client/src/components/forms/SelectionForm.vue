<template>
  <div>
    <form class="contact-form" @submit="changeParty">
      <div class="form-group">
        <label for="party">Select Party:</label>
        <select v-model="selectedParty">
          <option disabled value="">Please select one</option>
          <option v-for="party in parties" :key="item" :value="item">
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
      parties: ["Democrat", "Republican"],
      selectedParty: null,
    };
  },
  methods: {
    // ...mapActions("data", ["submitActionToDatabase"]),
    changeParty() {
      console.log("workd");
      // const payload = {
      //   action_id: this.actionID,
      //   user_id: this.userObject["id"],
      //   recruit_action: this.selectedValueRecruitAction,
      //   action_number: this.actionNumber,
      //   NOA: this.NOA,
      //   Authority: this.Authority,
      //   Processor_ieNumber: this.userObject["ieNumber"],
      //   Date_Receieved: this.Date_Receieved,
      //   Returned: this.selectedValueReturned,
      //   Keyed: this.selectedValueKeyed,
      //   Applied: this.selectedValueApplied,
      // };
      // this.submitActionToDatabase({ payload });
    },
  },
};
</script>
	
