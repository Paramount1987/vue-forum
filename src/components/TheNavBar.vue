<template>
  <header class="header" id="header">
    <router-link
      :to="{name: 'Home'}"
      class="logo"
    >
      <img src="../assets/img/vueschool-logo.svg" alt="">
    </router-link>

    <ul>
      <li class="navber-user">
        <router-link :to="{name: 'Profile'}">
          <img
            class="avatar-small"
            :src="user.avatar"
            alt=""
          >
          <span>
            {{user.name}}
            <img class="icon-profile" src="../assets/img/arrow-profile.svg" alt="">
          </span>
        </router-link>
      </li>
    </ul>

  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'user': 'authUser'
    })
  }
}
</script>
