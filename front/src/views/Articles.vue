<template>
  <div id="Articles">
      {{ articles }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api";
import { ArticlesGetResponse } from "@/api/Articles";

interface ArticlesData {
     articles: ArticlesGetResponse|null;
    }

export default defineComponent({
    name: "Articles",
    data () {
        const data: ArticlesData = {
            articles: null,
        };
        return data;
    },
    mounted () {
        setTimeout(() => {
            api().Articles.get()
                .then(res => {
                    this.articles = res.data;
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }, 1000);
    },
    components: {
    },
});
</script>
