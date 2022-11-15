<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Home from "../components/Home.vue";

const route = useRoute();

const isHomePage = computed(() => {
  return route.path === "/";
});
</script>
<template>
  <Layout>
    <template #page>
      <!-- <Home v-if="isHomePage" /> -->
    </template>
  </Layout>
</template>
