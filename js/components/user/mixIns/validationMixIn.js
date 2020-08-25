export const validationRules = {
    methods: {
        validateUserInput(inputType, e) {
            console.log(inputType)
            switch (inputType) {
                case "name":
                    this.validateInput(this.rules.name, e.target)
                    break
                case "email":
                    this.validateInput(this.rules.email, e.target)
                    break
                case "pass":
                    this.validateInput(this.rules.pass, e.target)
                    break
                case 'url':
                    this.validateInput(this.rules.url, e.target)
                    break
            }
        },
        validateInput(rule, el) {
            // console.log(rule)
            const test = rule.test(el.value)
            console.log(test,el)
            if (!test) {
                el.classList.add("wrong")
                el.classList.remove("correct")
            } else {
                el.classList.remove("wrong")
                el.classList.add("correct")
            }
            return test
        }
    },
    data() {
        return {
            rules: {
                name: /^[\w]{3,}$/g,
                email: /^([\w]{2,})@([\w]+)\.([a-z]+)$/g,
                pass: /[;:!@#$%\^&*()_\+=-\?/>\.<,\/\\]{1,}/,
                url: /^(https?):\/\/www\.([\w\.]+)\.([\w\.]+)$/i
            }
        }
    }
}