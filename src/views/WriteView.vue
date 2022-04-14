<template>
  <div class = "write">
    <h1>글을 작성하는 공간입니다</h1>
    <input type="text" v-model = "title">
    <br>
    <textarea 
    cols="30" rows="10" v-model = "content">
    </textarea>
    <br>
    <button @click = "addMemo">완료</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addMemo: function() {
      const id = this.$store.state.postList.length+1;
      this.$store.state.postList.push(
        {
          id: id,
          title: this.title,
          content: this.content,
          views: 0
          }
      );
      this.$router.push('/');
    }
  }
}
</script>
