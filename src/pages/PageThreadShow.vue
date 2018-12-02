<template>
  <div class="col-large push-top">

    <h1>
      {{ thread.title }}
      <router-link
        :to="{name: 'ThreadEdit', id: this.id}"
        class="btn-green btn-small"
        tag="button"
      >
        Edit Thread
      </router-link>
    </h1>
    <p>
      By <a href="#" class="link-unstyled">name</a>, <AppDate :timestamp="thread.publishedAt"/>
    </p>
    <PostList :posts="posts"/>
    <PostEditor
      :threadId="id"
    />
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  components: {
    PostList,
    PostEditor
  },

  props: {
    id: {
      required: true,
      type: String
    }
  },

  computed: {
    thread () {
      return this.$store.state.threads[this.id]
    },

    posts () {
      const postsIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postsIds.includes(post['.key']))
    }
  }
}
</script>
