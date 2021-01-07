<template>
    <div id="ArticleListItem" class="article-list-item">
        <div class="article-list-item-inner">
            <div>
                <h2>{{ article.title }}</h2>
            </div>
            <div>
                <p>
                    {{ article.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.article-list-item {
    padding:8px;
    width:100%;
    box-sizing: border-box;
    @media screen and (min-width:480px) {
        width:calc(100% / 3)
    }
    @media screen and (min-width:1024px) {
        width:25%
    }
}

.article-list-item-inner {
    width:100%;
    box-shadow:2px 2px 2px rgba(0,0,0,0.4);
}
.article-list-item-title {
    width: 100%;
    display: flex;
    padding: 8px;
}

.article-list-item-description {
    width: 100%;
    display: flex;
    padding: 8px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Article } from "@/api/types";

export default defineComponent({
    name: "ArticleListItem",
    props: {
        article: Article,
    },
});
</script>
