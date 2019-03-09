<template>
  <div>
    <PageHeader title="Charlas en video"/>

    <section id="videos">
      <div class="wrap container-fluid">
        <div class="row">
          <div class="col-xs-12 content-wrapper">
            <div class="section-content section-content-center">
              <section v-for="(group, groupkey) in videosByGroup" :key="groupkey" class="group">
                <header class="group-header">
                  <div class="logo-wrapper">
                    <img :src="group.logo" :alt="group.name" class="member-logo">
                  </div>
                  <div class="header-content">
                    <h2>{{ group.name }}</h2>
                  </div>
                </header>

                <div class="row">
                  <article
                    v-for="(video, key) in group.videolist"
                    :key="key"
                    class="col-xs-12 col-sm-6 col-md-4 video"
                  >
                    <VideoPlayer :video="video" :prefer-external="true" :show-titles="true"/>
                  </article>
                </div>

                <a
                  v-for="(videoSource, key) in group.videos"
                  v-if="videoSource.type == 'youtube'"
                  :key="key"
                  :href="`https://www.youtube.com/channel/${videoSource.channel_id}`"
                  class="btn"
                >Ver todos os videos do grupo</a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import StructureStatic from "../static/members-generated";
import VideoPlayer from "../components/VideoPlayer";

export default {
  components: {
    VideoPlayer,
    PageHeader
  },
  data() {
    return {
      membersStructure: {
        members: {}
      }
    };
  },
  computed: {
    videosByGroup() {
      const groups = [];

      for (let groupKey in this.membersStructure.members) {
        let group = this.membersStructure.members[groupKey];
        const videos = [];

        for (let videoKey in group.videolist) {
          let video = group.videolist[videoKey];
          videos[video.pubDate] = video;
        }

        //Sort by pubdate
        const videosSortedByDate = {};
        Object.keys(videos)
          .sort()
          .reverse()
          .forEach(function(key) {
            videosSortedByDate[key] = videos[key];
          });

        if (Object.keys(videosSortedByDate).length > 0) {
          group.videolist = videosSortedByDate;
          groups.push(group);
        }
      }
      return groups;
    }
  },
  mounted() {},
  async asyncData(context) {
    // let { data } = await context.$axios.get(process.env.MEMBERS_SOURCE_GENERATED_FILE)
    const data = StructureStatic;
    return {
      membersStructure: data
    };
  }
};
</script>
