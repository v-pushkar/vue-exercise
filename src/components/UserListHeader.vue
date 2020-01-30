<template>
  <tr>
    <th align="left" class="sorter">
      {{ user.id }}<SorterLink v-on:click.native="$emit('sotrList', 'id')" />
    </th>
    <th align="left" class="sorter">{{ user.first_name }}</th>
    <th align="left" class="sorter">{{ user.last_name }}</th>
    <th align="left" class="sorter">{{ user.email }}</th>
    <th align="left" class="sorter">{{ user.phone }}</th>
    <th align="left" class="sorter">
      {{ user.quiz_id
      }}<SorterLink v-on:click.native="$emit('sotrList', 'quiz_id')" />
    </th>
    <th align="left" class="sorter">{{ user.time }}</th>
    <th align="left" class="sorter">
      {{ user.result
      }}<SorterLink v-on:click.native="$emit('sotrList', 'result')" />
    </th>
    <th align="left" class="sorter">{{ user.created_at }}</th>
  </tr>
</template>
<script>
import SorterLink from "@/components/SorterLink";
export default {
  components: {
    SorterLink
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
