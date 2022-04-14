<template>
    <div>
        <h1>{{getTitle}}</h1>
        <p>{{getContent}}</p>
    </div>
</template>

<script>
export default {
    name: 'PageView',
    computed: {
        getTitle: function() {
            return this.$store.state.postList[this.$route.params.id-1].title
        },
        getContent: function() {
            return this.$store.state.postList[this.$route.params.id-1].content
        }
    }
}
</script>