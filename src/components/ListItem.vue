<template>
  <tr class="list-item">
    <td>{{user.id}}</td>
    <td>{{user.first_name}}</td>
    <td>{{user.last_name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.quiz_id}}</td>
    <td>{{user.time}}</td>
    <td>{{user.result}}</td>
    <td>{{user.created_at}}</td>
  </tr>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

