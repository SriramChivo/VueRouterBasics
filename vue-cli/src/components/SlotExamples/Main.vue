<template>
  <div>
    <div class="container">
      <div class="mt-4 mb-2">
        <button class="btn btn-primary btn-sm mx-2" @click="selectedComponent='quotes'">Show Quotes</button>
        <button class="btn btn-primary btn-sm mx-2" @click="selectedComponent='author'">Show Author</button>
        <button class="btn btn-primary btn-sm mx-2" @click="selectedComponent='books'">Show Books</button>
      </div>
      {{selectedComponent}}
    </div>
    <hr />
    <keep-alive>
      <component :is="selectedComponent">
        <h5 class="text-center" slot="quotes">Quotes</h5>
        <h5 class="text-center" slot="EndQuotes">Quotes End</h5>
        <h5 class="text-center" slot="author">Author</h5>
        <h5 class="text-center" slot="Endauthor">Author End</h5>
        <h5 class="text-center" slot="books">books</h5>
        <h5 class="text-center" slot="Endbooks">books End</h5>
      </component>
    </keep-alive>

    <!-- <quotes>
      <h5 class="text-center" slot="quotes">Quotes</h5>
      <h5 class="text-center" slot="EndQuotes">Quotes End</h5>
    </quotes>-->
    <!--  <hr />
    <author>
      <h5 class="text-center" slot="author">Author</h5>
      <h5 class="text-center" slot="Endauthor">Author End</h5>
    </author>
    <hr />
    <books>
      <h5 class="text-center" slot="books">books</h5>
      <h5 class="text-center" slot="Endbooks">books End</h5>
    </books>-->
  </div>
</template>
<script>
import quotes from "./Quotes.vue";
import author from "./Author.vue";
import books from "./books.vue";
export default {
  data() {
    return {
      selectedComponent: "quotes",
    };
  },
  components: {
    author,
    quotes,
    books,
  },
};
</script>