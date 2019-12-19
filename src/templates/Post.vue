<template>
  <Layout>
    <br />
    <g-link to="/" class="link">Home</g-link>
    <div class="post-title">
      <h1>{{ $page.post.title }}</h1>
      <p class="post-date">{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
    </div>
    <div class="post-content">
      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query> 
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    content
    date
    timeToRead
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description
        }
      ]
    };
  }
};
</script>

<style>
pre {
  overflow: scroll;
}
</style>