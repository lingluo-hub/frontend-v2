<template>
  <v-card class="mx-auto bkop-light">
    <v-card-title>
      <div><del>用户量激增，服务器月费上涨，企鹅数据的运营陷入了危机。站长红白为了保护喜爱的企鹅数据而决定...</del></div>
    </v-card-title>

    <v-card-title>
      <div>
        随着访问量的增加，目前的小水管服务器已经有些不堪重负了。如果各位刀客塔能捐助一些
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span
              style="border-bottom:1px dashed #ccc;"
              v-on="on"
            >服务器费用</span>
          </template>
          pocky、阿噗噜派也可
        </v-tooltip>
        ，我们将不胜感激!
      </div>
    </v-card-title>

    <v-card-title>
      <v-row>
        <v-col
          cols="6"
          md="6"
        >
          <v-card class="transparent pa-4">
            <v-img
              src="https://penguin-stats.s3-ap-southeast-1.amazonaws.com/alipay.png"
              alt="支付宝二维码"
            />

            <v-card-title primary-title>
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                支付宝
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col
          cols="6"
          md="6"
        >
          <v-card class="transparent pa-4">
            <v-img
              src="https://penguin-stats.s3-ap-southeast-1.amazonaws.com/wechat.png"
              alt="微信支付二维码"
            />

            <v-card-title primary-title>
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                微信支付
              </v-row>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Donate"
};
</script>
