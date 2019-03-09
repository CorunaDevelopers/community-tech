<template>
  <section id="cover">
    <div class="wrap container-fluid">
      <div class="row">
        <div class="col-xs-12 content-wrapper">
          <div class="content">
            <img
              :src="texts.logo.src"
              :alt="texts.logo.alt "
              class="logo"
            >
            <h1>
              {{ texts.title }}
            </h1>

            <h2>
              {{ texts.description }}
            </h2>

            <no-ssr>
              <VigotechNextEvent
                v-if="nextEvents.length > 0"
                :next-events="nextEvents"
              />
            </no-ssr>

            <div class="down-wrapper">
              <a
                v-scroll-to="'#grupos'"
                href="#"
                class="down"
              >
                <i class="fa fa-chevron-down" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VigotechNextEvent from "./VigotechNextEvent";
  export default {
    name: 'CoverSection',
    components: {
      VigotechNextEvent
    },
    props: {
      nextEvents: {
        type: [Array],
        required: false,
        default: () => {return []}
      },
      texts: { 
        type: Object,
        default:() => ({
                title: "",
                description: "",
                logo: {
                    src: "",
                    alt: ""
                  }
              })
        }
    }
  }
</script>
