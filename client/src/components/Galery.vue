<template lang="html">
  <div>
    <div class="ui container">
      <div class="ui card" v-for="gambarZ in gallery">
        <!-- {{gambarZ}} -->
        <div class="image">
          <img :src="gambarZ.gambar" :alt="gambarZ.desc">
        </div>
        <div class="content">
          <a class="header">{{gambarZ.nama}}</a>
          <div class="meta">
            <span class="date">{{gambarZ.tanggal}}</span>
          </div>
          <div class="description">
            {{gambarZ.description}}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            22 Friends
          </a>
        </div>
        <div class="extra content">
          <!-- <a>
            <button type="button" @click="postFb(gambarZ)">Post FB</button>
          </a> -->
            <button type="button">
              <social-sharing
              url="https://vuejs.org/"
              title="gambarZ.description"
              inline-template>
                <div>
                  <network network="facebook">
                    <i class="fa fa-facebook"></i> Share Facebook
                  </network>
                </div>
              </social-sharing>
            </button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      gallery: [
      {nama: 'saya', tanggal: '12-aug-2017', description: 'Kristy is an art director living in New York.', gambar: 'https://id.pinterest.com/pin/267893877817460663/'},
      {nama: 'saya', tanggal: '12-aug-2017', description: 'Kristy is an art director living in New York.', gambar: 'https://id.pinterest.com/pin/267893877817460663/'},
      {nama: 'saya', tanggal: '12-aug-2017', description: 'Kristy is an art director living in New York.', gambar: 'https://id.pinterest.com/pin/267893877817460663/'}
      ]
    }
  },
  methods: {
    // postFb (a) {
    //   axios.post('http://localhost:3000/api/postfb', {
    //     status: a
    //   }).then(response => {
    //     console.log('=====', response)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<style lang="css">
</style>
