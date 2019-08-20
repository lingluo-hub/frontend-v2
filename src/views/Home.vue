<template>
  <v-container
    fluid
    grid-list-sm
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <Intro
          class="home-card"
          data-aos="fade"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <Contact
          class="home-card"
          data-aos="fade"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <Contribute
          class="home-card"
          data-aos="fade"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <Donate
          class="home-card"
          data-aos="fade"
        />
      </v-col>

      <v-col
        cols="4"
        md="4"
      >
        <v-card
          class="mx-auto bkop-light"
          data-aos="fade"
        >
          <v-card-title>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <span class="cursor-pointer">
                <v-chip
                  class="ma-2"
                  color="primary"
                  text-color="white"
                  @click="goToPage('AboutMembers')"
                >
                  团队成员
                  <v-icon right>
                    mdi-share
                  </v-icon>
                </v-chip>
              </span>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col
        cols="4"
        md="4"
      >
        <v-card
          class="mx-auto bkop-light"
          data-aos="fade"
        >
          <v-card-title>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <span class="cursor-pointer">
                <v-chip
                  class="ma-2"
                  color="primary"
                  text-color="white"
                  @click="goToPage('AboutChangelog')"
                >
                  更新日志
                  <v-icon right>
                    mdi-share
                  </v-icon>
                </v-chip>
              </span>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col
        cols="4"
        md="4"
      >
        <v-card
          class="mx-auto bkop-light"
          data-aos="fade"
        >
          <v-card-title>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <span class="cursor-pointer">
                <v-chip
                  class="ma-2"
                  color="primary"
                  text-color="white"
                  @click="goToPage('AboutLinks')"
                >
                  友情链接
                  <v-icon right>
                    mdi-share
                  </v-icon>
                </v-chip>
              </span>
            </v-row>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Contact from "@/views/About/Contact";
import Contribute from "@/views/About/Contribute";
import Donate from "@/views/About/Donate";
import Intro from "@/views/About/Intro";
export default {
  name: "Home",
  components: { Contact, Contribute, Donate, Intro },
  data: () => ({}),
  methods: {
    goToPage(name) {
      this.$router.push({ name: name })
    }
  }
};
</script>

<style scoped>
.home-card {
  height: 100%;
}
</style>