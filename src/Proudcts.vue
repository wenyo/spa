<template>
    <div>
        <h1>
        proudcts 
        </h1>
        <div>{{id}}</div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // computed:{
    //     id(){
    //         return this.$route.params.id;
    //     }
    // }
}
</script>