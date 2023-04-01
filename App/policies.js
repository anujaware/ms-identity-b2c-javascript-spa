/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi",
        editProfile: "B2C_1_edit_profile",
      resetPassword: "B2C_1_passwordreset1",
    },
    authorities: {
        signUpSignIn: {
            authority: "https://joshsft.b2clogin.com/joshsft.onmicrosoft.com/B2C_1_susi",
        },
        editProfile: {
            authority: "https://joshsft.b2clogin.com/joshsft.onmicrosoft.com/B2C_1_edit_profile",
        },
        resetPassword: {
            authority: "https://joshsft.b2clogin.com/joshsft.onmicrosoft.com/B2C_1_passwordreset1"
        }
    },
    authorityDomain: "joshsft.b2clogin.com"
}
