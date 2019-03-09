<template>
  <div class="member-list row">
    <member
      v-for="(member, key) in members"
      :member="member"
      :key="key"
      :next-event="member.nextEvent"
      show-next-event
      class="col-xs-6 col-sm-4 col-md-3"
    />
  </div>
</template>

<script>
import Member from "./Member";
export default {
  name: "MemberList",
  components: {
    Member
  },
  props: {
    members: {
      type: [Array, Object],
      required: true
    }
  }
};
</script>
