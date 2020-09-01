<template>
    <div id="fliped" class='lax' data-lax-preset="spin fadeInOut">
        <div id="flipedWrapper">
            <card
                class='cardInFlipcCard'
                title="تضمین کیفیت"
                img="/images/cup.png"
                descs="تضمین کیفیت تمامی محصولات"
            ></card>
            <card 
                class='cardInFlipcCard'
                title="گارانتی تضمینی"
                img="/images/shield.png"
                descs="گارانتی تمام محصولا 10 ساله"
            ></card>
            <card
                class='cardInFlipcCard'
                title="گارانتی تضمینی"
                img="/images/shield.png"
                descs="گارانتی تمام محصولا 10 ساله"
            ></card>
            <card
                class='cardInFlipcCard'
                title="گارانتی تضمینی"
                img="/images/cup.png"
                descs="گارانتی تمام محصولا 10 ساله"
            ></card>
            <card 
                class='cardInFlipcCard'
                title="گارانتی تضمینی"
                img="/images/cup.png"
                descs="گارانتی تمام محصولا 10 ساله"
            ></card>
            <card
                class='cardInFlipcCard'
                title="گارانتی تضمینی"
                img="/images/shield.png"
                descs="گارانتی تمام محصولا 10 ساله"
            ></card>
        </div>
    </div>

</template>

<script>
    import card from './card.vue'

    export default{
        components:{
            card
        }
    }
</script>

<style scoped>
    #flipedWrapper{
        max-width:1200px;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    #fliped{
        width:100%;
        display:flex;
        justify-content: center;
        margin-top:50px;
        background:#222;
    }
</style>