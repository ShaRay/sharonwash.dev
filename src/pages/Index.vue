<template>
  <Layout>
    <header class="header">
      <h1>Learning To Code Blog</h1>
      <p>My blog to help me retain what I have learned</p>
    </header>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PostList
  }
};
</script>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date 
        path
      }
    }
  }
}
</page-query>

<style scoped>
.header {
  text-align: center;
}
</style>
