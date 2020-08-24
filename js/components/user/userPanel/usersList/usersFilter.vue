<template>
    <div id="usersSearch">
        <div class="searchBarBtn">
            <button class='done'>فیلتر مشتریان</button>
        </div>
            <div class="searchBarItems">
                <div class="searchPrice">
                    <label class='title' for="">بر اساس قیمت</label>
                    <div class="choices">
                        <div class="choicesWrapper">
                            <div class="singleChoice">
                                
                                <input type="radio" name='price' value='most' id="">
                                <label for="">کمترین</label>
                            </div>
                            <div class="singleChoice">
                                
                                <input type="radio" name='price' value='least' id="">
                                <label for="">بیشترین</label>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="searchPrice">
                    <label class='title' for="">بر اساس زمان</label>
                    <div class="choices">
                        <div class="choicesWrapper">
                            <div class="singleChoice">
                                
                                <input type="radio" name='time' value='oldest' id="">
                                <label for="">قدیمی ترین</label>
                            </div>
                            <div class="singleChoice">
                                
                                <input type="radio" name='time' value='newest' id="">
                                <label for="">جدیدترین</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

</template>


<style scoped>
    .searchBarItems{
    }
    .title{
        background: rgb(50, 25, 189);
        color:white;
        font-size:15pt;
        padding:10px;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
    }
    .choices{
        margin-top:10px;
    }
    #usersSearch{
        margin-top:20px;
    }
    .searchPrice{
        display:flex;
        flex-direction:column;
        align-items: flex-end;
        flex-wrap: wrap;
        margin-top:10px;
    }
    .choicesWrapper{
        display:flex
    }
    .singleChoice{
        display:flex;
        align-items: center;
    }

</style>
