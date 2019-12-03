<template>
    <header class="course">
        <div class="title">COURSE</div>
        <ul class='courseInfo'>
            <li v-for='course in vCourses' :key='course.id'>
                <router-link :to='`/courses/${course.id}`'>
                    <div class='imgBox'>
                        <img :src='course.img'>
                    </div>
                    <div>{{course.title}}</div>
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script>
import vCourses from './vCourses.js';

export default {
    data(){
        return{
            vCourses,
        }
    }
}
</script>

<style  lang='scss'>
    @import '../scss/variable';

    .course{
        background: none;
        background-color: $color-master; 
        flex-direction: column;
        padding-top: 5vh;
    }

    .courseInfo{
        display: flex;
        flex-direction: row;
        li{
            margin: 30px 20px;
        }
        div{
            color: $color-sec;
            font-size: $font-sec;
            text-align: center;
            margin: 20px 0;
        }
    }
    .imgBox{
        width: 25vw;
        height: 50vh;
        overflow: hidden;
        position: relative;
        transition: all .3s;
        cursor: pointer;
        img{
            position: absolute;
            left: -120px;
            max-height: 100%;
        }
        &:hover{
            box-shadow: 0 0 10px $color-thir;
        }
    }
</style>