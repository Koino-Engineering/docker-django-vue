<template>
    <div id="ArticleList" class="article-list-card">
        <div v-if="articles">
            <div id="container" class="article-list-flex-container">
                <ArticleListItem
                v-for="article in articles.results"
                :key="article.id"
                :article="article"
                />
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<style lang="scss">
.article-list-card {
    margin:8px;
    padding:8px;
    background-color: #f9f9f9;
    box-shadow :2px 2px 2px rgba(0,0,0,0.4);
}

.article-list-flex-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api";
import { ArticlesGetResponse } from "@/api/Articles";
import ArticleListItem from "@/components/ArticleListItem.vue";

interface ArticleListData {
     articles: ArticlesGetResponse|null;
    }

export default defineComponent({
    name: "ArticleList",
    data () {
        const data: ArticleListData = {
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
        ArticleListItem,
    },
});
</script>
