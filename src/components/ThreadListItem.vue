<template>
  <div class="thread">

    <div>
      <p>
        <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
          {{thread.title}}
        </router-link>
      </p>
      <p>
        By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt"/>.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{repliesCount}} replies
      </p>
      <img src="" alt="" class="avatar-medium">

      <!-- <div>
        <p class="text-small">
          <a href="#">Bruce Wayne</a>
        </p>
        <p class="text-small text-faded">2 hours ago</p>
      </div> -->

    </div>

  </div>
</template>

<script>
import {countObjectProperties} from '@/utils'

export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },

  computed: {
    repliesCount () {
      return countObjectProperties(this.thread.posts) - 1
    },

    user () {
      return this.$store.state.users[this.thread.userId]
    }
  }
}
</script>
