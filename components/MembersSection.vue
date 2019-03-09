<template>
  <section id="grupos" class="wrap container-fluid">
    <h2 v-sticky :z-index="100" :sticky-top="100" class="section-title">
      <div>Os grupos</div>
    </h2>
    <member-list :members="membersStructure.members || {}"/>
  </section>
</template>

<script>
import MemberList from "./MemberList";

export default {
  name: "MembersSection",
  components: {
    MemberList
  },
  props: {
    membersStructure: {
      type: [Object],
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

