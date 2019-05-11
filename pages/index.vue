<template>
  <div>
    <CoverSection :next-events="nextEvents" :texts="texts" class="page-section"/>
    <MembersSection :members-structure="membersStructure" class="page-section"/>
    <CalendarSection class="page-section red-bg"/>

    <DocsSection class="page-section"/>
    <VideosSection :members-structure="membersStructure" class="page-section red-bg"/>
    <ConversationSection :texts="texts" class="page-section"/>
    <FriendsSection
      v-if="Object.keys(vigotechFriends).length > 0"
      :friends="vigotechFriends"
      class="page-section red-bg"
    />
  </div>
</template>

<script>
import MembersSection from "../components/MembersSection";
import CoverSection from "../components/CoverSection";
import CalendarSection from "../components/CalendarSection";
import ConversationSection from "../components/ConversationSection";
import VideosSection from "../components/VideosSection";
import DocsSection from "../components/DocsSection";
import FriendsSection from '../components/FriendsSection'

var Config = require('../config');
var Texts = require(`../static/communities/${Config.city}.json`);
var StructureStatic = require(`../static/members/${Config.city}/members.json`);

export default {
  components: {
    DocsSection,
    VideosSection,
    ConversationSection,
    CoverSection,
    MembersSection,
    CalendarSection,
    FriendsSection
  },
  data() {
    return {
      docs: [],
      nextEventsStatic: []
    };
  },
  computed: {
    membersStructure() {
      return this.$store.state.membersStructure;
    },
    nextEventGroup() {
      return this.$store.getters.nextEventGroup;
    },
    nextEvents() {
      return this.$store.getters.nextEvents;
    },
    vigotechFriends() {
      return this.$store.state.friends;
    },
    texts() {
      return Texts;
    }
  },
  mounted() {

    if ($nuxt.$route.hash) {
      this.scrollToHash();
    }
  },
  serverPrefetch () {
    return this.fetchData()
  },
  methods: {
    fetchData () {
      this.$store.dispatch('loadData');
      return this.$store.dispatch('loadFriends');
    },
    scrollToHash() {
      var hash = $nuxt.$route.hash;
      this.$nextTick(() => {
        this.$scrollTo(hash, 500);
      });
    }
  }
};
</script>
