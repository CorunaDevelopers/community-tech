<template>
  <section id="cover">
    <div class="wrap container-fluid">
      <div class="row">
        <div class="col-xs-12 content-wrapper">
          <div class="content">
            <img
              :src="texts.coverSection.logo.main_src"
              :alt="texts.coverSection.logo.alt "
              class="logo"
            >
            <h1>
              {{ texts.coverSection.title }}
            </h1>

            <h2>
              {{ texts.coverSection.description }}
            </h2>

            <NextEvent v-if="nextEvents.length > 0" :next-events="nextEvents"/>

            <div class="down-wrapper">
              <a v-scroll-to="'#grupos'" href="#" class="down">
                <i class="fa fa-chevron-down"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NextEvent from "./NextEvent";
export default {
  name: "CoverSection",
  components: {
    NextEvent
  },
  props: {
    nextEvents: {
      type: [Array],
      required: false,
      default: () => []
    },
    texts: {
      type: Object,
      default:() => ({
        "coverSection": {
              title: "",
              description: "",
              logo: {
                  src: "",
                  alt: ""
                }
            }
        })
      }
  }
};
</script>
