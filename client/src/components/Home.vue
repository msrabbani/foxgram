<template lang="html">
<div class="">
  <navbar/>
  <galery/>
  <formz/>
</div>
</template>

<script>
import Form from '@/components/Form.vue'
import Navbar from '@/components/Navbar.vue'
import Galery from '@/components/Galery.vue'

export default {
  components: {
    'formz': Form,
    'navbar': Navbar,
    'Galery': Galery
  },
  data () {
    return {
      gallery: [
      {nama: 'saya', tanggal: '12-aug-2017', description: 'Kristy is an art director living in New York.', gambar: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimuanv68fWAhXLKY8KHY6pBwcQjRwIBw&url=http%3A%2F%2Fwww.ciaobellabody.com%2F20-agnes-monica-hairstyles%2F&psig=AFQjCNGT6HECU2sUN2zUYfdMoS85IfCNiQ&ust=1506686802170706'},
      {nama: 'saya', tanggal: '12-aug-2017', description: 'Kristy is an art director living in New York.', gambar: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimuanv68fWAhXLKY8KHY6pBwcQjRwIBw&url=http%3A%2F%2Fwww.ciaobellabody.com%2F20-agnes-monica-hairstyles%2F&psig=AFQjCNGT6HECU2sUN2zUYfdMoS85IfCNiQ&ust=1506686802170706'},
      {nama: 'saya', tanggal: '12-aug-2017', description: 'Kristy is an art director living in New York.', gambar: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwimuanv68fWAhXLKY8KHY6pBwcQjRwIBw&url=http%3A%2F%2Fwww.ciaobellabody.com%2F20-agnes-monica-hairstyles%2F&psig=AFQjCNGT6HECU2sUN2zUYfdMoS85IfCNiQ&ust=1506686802170706'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
