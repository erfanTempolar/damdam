<template>
    <div id="blog">
        <div id="blogWrapper">
            <consulate></consulate>
            
            <div class="blogPostWrapper">
                <single-post
                title="َشرینگ پک"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است . در این دستگاه سلفون و فیلم شیرینگ را با حرارت دادن جمع و بسته می‌کنند. به همین دلیل به این نوع عمل بسته بندی شیرینگ می‌گویند."
                img="/images/l30.jpg"
            ></single-post>
            <single-post
                title="َاب چسب"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است ."
                img="/images/abchasb.png"
            ></single-post>

            <single-post
                title="َاب چسب"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است ."
                img="/images/abchasb.png"
            ></single-post>
            <single-post
                title="َاب چسب"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است ."
                img="/images/abchasb.png"
            ></single-post>
            <single-post
                title="َاب چسب"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است ."
                img="/images/abchasb.png"
            ></single-post>
            <single-post
                title="َاب چسب"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است ."
                img="/images/abchasb.png"
            ></single-post>
            <single-post
                title="َاب چسب"
                descs="شیرینگ پک از کلمه انگلیسی شیرینک به معنای جمع شدن گرفته شده است ."
                img="/images/abchasb.png"
            ></single-post>
            </div>
        </div>
    </div>
</template>

<script>
    import singlePost from './singlePost.vue'
    import consulate from '../consulate/consulate.vue'
    export default{
        components:{
            singlePost,
            consulate
        },
        
        methods:{
            startValidation(type,e){
                    const  el=e.target
                    const parentNode=e.target.parentElement
                
                    const error=parentNode.nextElementSibling
                    if(el.id=="userPassword" && el.value.length<8)
                    {
                        error.style.visibility="visible"
                        el.classList.remove("correct")
                        el.classList.add("wrong")
                        return
                    }
                    const res=this.validateUserInput(type,e)                  
                    if(res){
                        error.style.visibility="hidden"
                        return
                    }
                    error.style.visibility="visible"
                }
            }
        }
    
</script>


<style scoped>

#blog{
    margin-top:60px;
    margin-bottom:50px;
    width:100%
}
.blogPostWrapper{
    display:flex;
    width:95%;
    flex-wrap:wrap;
    margin:auto;
    justify-content: center;
    max-width:1500px;
}

.title p{
    color:rgb(236,57,68)
}

</style>