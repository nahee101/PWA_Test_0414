<template>
  <div class="home">
    <table>
      <tr><!--첫 번째 행-->
        <td>번호</td>
        <td>제목</td>
        <td>클릭 횟수(조회수)</td>
      </tr>
      <tr
        v-for = "post in $store.state.postList"
        :key = "post.id">
        <td>
          {{post.id}}
        </td>
        <td @click = "$router.push('/post/'+ post.id)">
            <p @click = "addViews">
              {{post.title}}
            </p>
        </td>
        <td>
          {{$store.state.views}}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    addViews: function() {
      this.$store.commit('addViews')
      this.$router.push('`/post/${post.id}`');
    }
  }
}
</script>
