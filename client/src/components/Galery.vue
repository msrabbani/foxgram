<template lang="html">
  <div>
    <div class="ui container">
      <div class="ui card" v-for="gambarZ in gallery">
        <div class="image">
          <img src="../assets/logo.png">
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
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      gallery: [
      {nama:'saya', tanggal:'12-aug-2017', description:'Kristy is an art director living in New York.', gambar:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimuanv68fWAhXLKY8KHY6pBwcQjRwIBw&url=http%3A%2F%2Fwww.ciaobellabody.com%2F20-agnes-monica-hairstyles%2F&psig=AFQjCNGT6HECU2sUN2zUYfdMoS85IfCNiQ&ust=1506686802170706'},
      {nama:'saya', tanggal:'12-aug-2017', description:'Kristy is an art director living in New York.', gambar:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimuanv68fWAhXLKY8KHY6pBwcQjRwIBw&url=http%3A%2F%2Fwww.ciaobellabody.com%2F20-agnes-monica-hairstyles%2F&psig=AFQjCNGT6HECU2sUN2zUYfdMoS85IfCNiQ&ust=1506686802170706'},
      {nama:'saya', tanggal:'12-aug-2017', description:'Kristy is an art director living in New York.', gambar:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimuanv68fWAhXLKY8KHY6pBwcQjRwIBw&url=http%3A%2F%2Fwww.ciaobellabody.com%2F20-agnes-monica-hairstyles%2F&psig=AFQjCNGT6HECU2sUN2zUYfdMoS85IfCNiQ&ust=1506686802170706'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
