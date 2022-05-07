<template>
  <div style="justify-content: center" class="row">
    <div class="contact">
      <div class="contact-description">
        <h1 class="contact-header">Get in touch</h1>
        <p>
          Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast
          reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs
          boom gunwalls booty jury mast fore.
        </p>
      </div>
      <div class="card contact-card">
        <h2 style="margin: 0">Contact Form</h2>
        <div class="row">
          <div class="col-6 col-md-12 pr-1 p-0">
            <CustomFormInput :required="true" title="Name" />
          </div>
          <div class="col-6 col-md-12 pl-1 p-0">
            <CustomFormInput :required="true" title="Email Address" />
          </div>
          <div class="col-12">
            <CustomFormTextArea :required="true" title="Message" />
          </div>
        </div>
        <div style="text-align: end" class="form-input">
          <button class="btn w-sm-100">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomFormInput from "../components/CustomFormInput.vue";
import CustomFormTextArea from "../components/CustomFormTextArea.vue";
export default {
  name: "ContactPage",
  components: {
    CustomFormInput,
    CustomFormTextArea,
  },
};
</script>