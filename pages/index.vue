<template>
  <div class="main">
    <div class="banner has-background-warning">
      <div class="wrapper">
        <div class="rows">
          <div class="columns">
            <div class="column px-6">
              <h1 class="cursiv-title has-text-dark">OTends</h1>
              <p class="has-text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div class="column has-text-centered">
              <img
                src="../assets/imgs/robot-main.png"
                width="90%"
                alt="robot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="next z-index-1"></div>

    <div class="wrapper mt-6 z-index-1">
      <div class="row">
        <div class="columns">
          <div class="column has-text-centered">
            <img src="../assets/imgs/incubator.png" width="90%" alt="stats" />
          </div>
          <div class="column has-text-left">
            <div class="wrapper">
              <h2 class="has-text-white">
                Incuba tus datos,<br />Cuando maduren, decide
              </h2>
              <div class="has-text-left">
                <p class="has-text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <a href="#" class="button is-warning full-w mt-5">Aprender más</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="has-background-warning">
      <div class="wrapper">
        <div class="row">
          <div class="columns">
            <div class="column has-text-left">
              <div class="wrapper">
                <h2 class="has-text-dark">
                  Observa las tendencias<br />del mercado
                </h2>
                <p class="has-text-dark">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <a href="#" class="button is-dark full-w mt-3"></a>
              </div>
            </div>
            <div class="column has-text-centered">
              <img
                src="../assets/imgs/decision-robot.png"
                width="90%"
                alt="profts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper mt-6">
      <div class="row">
        <div class="columns">
          <div class="column has-text-centered">
            <img src="../assets/imgs/automatic.png" width="100%" alt="stats" />
          </div>
          <div class="column has-text-left">
            <div class="wrapper">
              <h2 class="has-text-white">
                Mejora tu negocio<br />administra tu dinero
              </h2>
              <p class="has-text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <a href="#" class="button is-warning full-w mt-3"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}

.banner {
  height: 100vh;
  overflow: hidden;
  .rows {
    padding-top: 10%;
  }

  h1 {
    margin-top: 20%;
    font-size: 600%;
  }

  button {
    font-size: 22px;
  }
}

.next {
  width: 100%;
  height: 20px;
  background-color: #1a1a1a;
}

.wrapper {
  padding-bottom: 5%;
  h2 {
    font-size: 40px;
    margin-top: 10%;
  }
}
</style>