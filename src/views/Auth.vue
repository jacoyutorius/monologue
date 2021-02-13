<template>
  <section>
    <amplify-authenticator>
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
      >
      </amplify-sign-up>
      <amplify-sign-in slot="sign-in" username-alias="email"></amplify-sign-in>
    </amplify-authenticator>
  </section>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      unsubscribeAuth: undefined,
      formFields: [
        {
          type: "email",
          label: "Custom email Label",
          placeholder: "custom email placeholder",
          required: true,
        },
        {
          type: "password",
          label: "Custom Password Label",
          placeholder: "custom password placeholder",
          required: true,
        },
      ],
    };
  }
};
</script>
