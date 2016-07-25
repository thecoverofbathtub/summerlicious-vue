<template>
  <div class="restaurants">
    <table>
      <thead>
      <tr>
      <th><a href="#" v-on:click="sortByProperty('name')">Restaurant Name</a></th>
      <th><a href="#" v-on:click="sortByProperty('stars')">Yelp Rating</a></th>
      <th><a href="#" v-on:click="sortByProperty('count')">Yelp Review Count</a></th>
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
      details,
      isPropertyDescending: {}
    };
  },
  methods: {
    sortByProperty(property) {
      const { details, isPropertyDescending } = this;
      isPropertyDescending[property] = !isPropertyDescending[property];
      details.sort((a, b) => {
        const pa = a[property], pb = b[property];
        return (isPropertyDescending[property] ? -1 : 1) * (pa === pb ? 0 : (pa < pb ? -1 : 1));
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
