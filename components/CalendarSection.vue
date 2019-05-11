<template>
  <section id="calendar">
    <div class="wrap container-fluid">
      <div class="row">
        <div class="col-xs-12 content-wrapper">
          <h2
            v-sticky
            :z-index="100"
            :sticky-top="100"
            class="section-title"
          >
            <div>
              Calendario
            </div>
          </h2>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              src="gcalendar/gcal.html"
              style="border: 0"
              class="embed-responsive-item"
              frameborder="0"
              scrolling="no" />
          </div>
          <span class="view-more">
            <a
              href="https://calendar.google.com/calendar/ical/corunadevelopers%40gmail.com/public/basic.ics"
              class="btn btn-white"
            >
              Preme aquí para acceder no formato iCal
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CalendarSection',
    computed: {
      baseUrl () {
        return process.env.baseUrl
      }
    }
  }
</script>
