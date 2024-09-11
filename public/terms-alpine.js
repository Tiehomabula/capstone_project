document.addEventListener("alpine:init", () => {
    Alpine.data('app', () => ({
        showTerms: true,
        showBiogasInputs: false,
        canContinue: false,
        digester: '',
        wasteVolume: null,
        showMessage: false,

        // Accept the terms
        agree() {
            this.canContinue = true;
            this.showTerms = false; // Hide terms and show biogas input form
            this.showBiogasInputs = true;
            alert('Thank you for accepting the terms.');
        },

        // Decline the terms
        disagree() {
            this.canContinue = false;
            alert('You must agree to the terms to continue.');
        },

        // Submit the biogas form
        submitForm() {
            if (this.digester && this.wasteVolume) {
                this.showMessage = true;
                console.log("Digester:", this.digester);
                console.log("Waste Volume:", this.wasteVolume, "kg");
            } else {
                alert("Please fill in all fields.");
            }
        }
    }));
});