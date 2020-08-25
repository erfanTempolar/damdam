export const validationRules = {
    methods: {
        validateUserInput(inputType, e) {
            console.log(inputType)
            if(inputType=="name"){
                return this.validateInput(this.rules.name, e.target)
            }else if(inputType=='email')
            {
                return this.validateInput(this.rules.email, e.target)
            }else if(inputType=="pass")
            {
                return this.validateInput(this.rules.pass, e.target)
            }else if(inputType=="url")
            {
                return this.validateInput(this.rules.url, e.target)
            }
        },
        validateInput(rule, el) {
            // console.log(rule)
            let test=null
            console.log(el.value)
            if(el.value==''){
                test=false
            }
            else{
                test = rule.test(el.value.trim())
            }
            
            console.log(test,el,el.value.trim())
            if (test) {
                el.classList.remove("wrong")
                el.classList.add("correct")
            } else {            
                el.classList.add("wrong")
                el.classList.remove("correct")
            }
            return test
        }
    },
    data() {
        return {
            rules: {
                name: /^[\w]{3,}$/g,
                email: /^([\w\.]{2,})@([\w]+)\.([a-z]+)$/,
                pass: /[;:!@#$%\^&*()_\+=-\?/>\.<,\/\\]{1,}/,
                url: /^(https?):\/\/www\.([\w\.]+)\.([\w\.]+)$/i
            }
        }
    }
}