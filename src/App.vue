<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-for="(book, index) in bookList" :key="index" cols="12" md="4">
          <v-card>
            <v-card-title>{{ book.title }}</v-card-title>
            <v-card-subtitle>{{ book.author }}</v-card-subtitle>
            <v-card-text>{{ book.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="showDetails(index)">Show Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-for="(tutorial, index) in dataTutorials" :key="index" cols="12" md="4">
          <v-card>
            <v-card-title>Buku {{ tutorial.title }}</v-card-title>
            <v-card-subtitle>{{ tutorial.title }}</v-card-subtitle>
            <v-card-text>{{ tutorial.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="showDetails(index)">Show Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import {fetchTutorialData} from '@/services/apiservice';
import axios from 'axios';

export default {
  data() {
    return {
      bookList: [
        {
          title: "Book 1",
          author: "Author 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          title: "Book 2",
          author: "Author 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        // Add more books as needed
      ],
      dataTutorials: null,
    };
  },
  methods: {
    showDetails(index) {
      // Implement logic to show details for the selected book
      console.log("Showing details for book:", this.bookList[index]);
    } ,
    async fetchData() {
      this.dataTutorials = await fetchTutorialData();
    }
  },
  
  async created() {
    await this.fetchData()
    console.log("dataTutorials",this.dataTutorials)
    console.log("dataTutorials",this.dataTutorials[0]['id'])

  },
};
</script>

<style>
/* Add custom styles as needed */
</style>
