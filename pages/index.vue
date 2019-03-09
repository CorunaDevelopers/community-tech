<template>
  <div>
    <CoverSection :next-events="nextEvents" :texts="texts" class="page-section"/>
    <MembersSection :members-structure="membersStructure" class="page-section"/>
    <CalendarSection class="page-section red-bg"/>

    <DocsSection class="page-section"/>
    <VideosSection :members-structure="membersStructure" class="page-section red-bg"/>
    <ConversationSection class="page-section"/>
  </div>
</template>

<script>
import MembersSection from "../components/MembersSection";
import CoverSection from "../components/CoverSection";
import CalendarSection from "../components/CalendarSection";
import ConversationSection from "../components/ConversationSection";
import VideosSection from "../components/VideosSection";
import StructureStatic from "../static/members";
import DocsSection from "../components/DocsSection";

var Config = require('../static/custom/config');
var Texts = require(`../static/custom/${Config.city}.json`);

export default {
  components: {
    DocsSection,
    VideosSection,
    ConversationSection,
    CoverSection,
    MembersSection,
    CalendarSection
  },
  data() {
    return {
      membersStructure: {
        members: {}
      },
      docs: []
    };
  },
  computed: {
    membersStructureStore() {
      // Need separate Store value from data value, because of SSR.
      // asyncData copy values to data and don'y allow to use computed directly
      return this.$store.state.membersStructure;
    },
    nextEventGroup() {
      return this.$store.getters.nextEventGroup;
      s;
    },
    nextEvents() {
      return this.$store.getters.nextEvents;
    },
    texts() {
      return Texts.coverSection
    }
  },
  watch: {
    membersStructureStore(newValue, oldValue) {
      // Need separate Store value from data value, because of SSR.
      // asyncData copy values to data and don'y allow to use computed directly
      this.membersStructure = newValue;
    }
  },
  mounted() {
    this.$store.dispatch("loadData");

    if ($nuxt.$route.hash) {
      this.scrollToHash();
    }
  },
  async asyncData(context) {
    return {
      membersStructure: StructureStatic
    };
  },
  methods: {
    scrollToHash() {
      var hash = $nuxt.$route.hash;
      this.$nextTick(() => {
        this.$scrollTo(hash, 500);
      });
    }
  }
};
</script>
