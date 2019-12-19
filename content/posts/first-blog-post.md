---
title: Gridsome
slug: gridsome-1
description: A blog that will help me retain what I have learned
date: 2019/12/19
---

In my first blog post, I will share what I have learned in the process of setting up this Gridsome blog post. The main purpose of this blog is to help improve my retention of what I am learning.

Gridsome is a framework that uses Vue and GraphQl to build quick apps and I used Gridsome to build this blog. It is open source so is free to use.

I had an issue installing Gridsome globally using npm becasuse it wouldn't install the json dependencies but the dependencies installed using yarn.

I created the blog site after installing Gridsome globally by using "Gridsome create (name of site)". Then I changed directories to the site I created. To build the site I use "gridsome develop". I then followed a blog tutorial on how to set up the blog with the plugin from Gridsome - "@gridsome/source-filesystem". This plugin transforms files into content that can be fetched with GraphQL in your components.

Another concept I have learned is what a slug is. Not a nasty worm but it is a URL slug. It is the exact address of a specfic page or website. It is usually at the end part of the url.

One more concept I have learned is about metaInfo. Gridsome incorporates Vue Meta to populate <head>. MetaInfo is a function and should written like the example I am including.

```
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
```

"a component’s data option must be a function, so that each instance can maintain an independent copy of the returned data object.
If Vue didn’t have this rule, clicking on one button would affect the data of all other instances."
From Vuejs.org
Reusing Components and data must be a function
