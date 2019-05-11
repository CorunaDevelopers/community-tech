<template>
  <section id="docs">
    <div class="wrap container-fluid">
      <div class="row">
        <div class="col-xs-12 content-wrapper">
          <h2 v-sticky :z-index="100" :sticky-top="100" class="section-title">
            <div>Documentos</div>
          </h2>

          <div class="section-content section-content-center">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col">
                <a :href="texts.globals.manifest" class="btn btn-block btn-lg">Manifiesto</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col">
                <a
                  :href="texts.globals.code_of_conduct"
                  class="btn btn-block btn-lg"
                >Código de conducta</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col">
                <a
                  :href="texts.globals.entry_conditions"
                  class="btn btn-block btn-lg"
                >Cóndicions de entrada</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col">
                <a
                  :href="texts.globals.slack.code_of_conduct"
                  class="btn btn-block btn-lg"
                >Código de conducta en Slack</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import docs from '../docs'
export default {
  name: "DocsSection",
  props: {
    texts: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
