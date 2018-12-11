<template>
  <header class="header" id="header">
    <router-link
      :to="{name: 'Home'}"
      class="logo"
    >
      <img src="../assets/img/vueschool-logo.svg" alt="">
    </router-link>

    <ul v-if="user">
      <li class="navbar-user">
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
        <li class="navbar-item">
          <a @click.prevent="$store.dispatch('signOut')">Sign Out</a>
        </li>
      </ul>
      <ul v-else>
        <li class="navbar-item">
          <router-link :to="{name: 'SignIn'}">Sign In</router-link>
        </li>
        <li class="navbar-item">
          <router-link :to="{name: 'Register'}">Register</router-link>
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
