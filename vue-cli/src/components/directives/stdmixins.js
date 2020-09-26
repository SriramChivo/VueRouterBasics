export const stdmxin = {
    data() {
        return {
            textMix: "This text is appeared from the mixins page"
        }
    },
    computed: {
        lengthMixComp() {
            return this.textMix + "{" + String(this.textMix.length) + "}"
        }
    },
}