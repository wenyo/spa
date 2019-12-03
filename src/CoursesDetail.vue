<template>
    <div>
        <header ref='header'>
            <router-link to='/courses' class="back"><i class="fas fa-arrow-left"></i></router-link>
            <div class='imgBox2'>
                <img :src="course.img">
            </div>
        </header>
        <div class='coursInfo'>
            <div class="title">{{course.title}}</div>
            <p>{{course.detail}}</p>
        </div>
    </div>
</template>

<script>
import vCourses from './vCourses.js';

export default {
    data(){
        return{
            vCourses,
            index: (this.$route.params.id - 1),
            screenWidth: window.innerWidth,
            maxWidth: 1030
        }
    },
    mounted(){
        this.watchScreenWidth();
    },
    computed:{
        course(){
            return this.vCourses[this.index];
        },
        bImgClass(){
            return this.screenWidth >= this.maxWidth;
        }
    },
    methods:{
        watchScreenWidth(){
            window.addEventListener('resize', () => {
                this.screenWidth = window.innerWidth;
            });
        }
    }
}
</script>

<style  lang='scss' scoped>
    @import '../scss/variable';

    header{
        background: $color-sec;
    }
    .imgBox2{
        width: 50vw;
        height: 60vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        img{
            max-height: 100%;
            width: auto;
            margin-left: 160px;
        }
    }
    .imgWidth{
        width: 100vw;
    }
    .imgHeight{
        height: 100vh;
    }
    .coursInfo{
        position: absolute;
        top: 40vh;
        left: 10vw;
        background: $color-thir;
        width: 50vw;
        padding: 5vh 3vw;
    }
    .title{
        display: inline-block;
        margin-bottom: 30px;
        color: $color-master;
        letter-spacing: .2em;
        background-repeat: no-repeat;
        // background-image: linear-gradient(to top, $color-four 20%, $color-five 20%);
    }
    .back{
        position: absolute;
        left: 30px;
        top: 30px;
        font-size: $font-thir;
        color: $color-master;
        cursor: pointer;
        padding: 5px;
        border-radius: 27px;
        transition: all .3s;
        &:hover{
            color: $color-sec;
            background: $color-master;
        }
    }
</style>