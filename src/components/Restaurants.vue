<template>
  <div class="restaurants">
    <table>
      <thead>
      <tr>
      <th>Restaurant Name</th>
      <th>Yelp Rating</th>
      <th>Yelp Review Count</th>
      <th>Yelp Link</th>
      </thead>
      <tbody>
      <tr v-for="detail in details">
      <td>{{ detail.name }}</td>
      <td>{{ detail.stars }}</td>
      <td>{{ detail.count }}</td>
      <td><a href="{{ detail.url }}" target="_blank">Link</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { details } from './details.json';

export default {
  data() {
    return {
      details
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
