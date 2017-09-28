<template lang="html">
  <div class="ui container">
    <form class="ui form">
      <div class="field">
        <label>Description</label>
        <textarea></textarea>
      </div>
      <div class="field">
        <label>Masukan gambar</label>
        <input name="gambar" placeholder="masukan gambar" type="file">
      </div>
      <div>
        <div class="ui checkbox">
          <input tabindex="0" class="hidden" type="checkbox">
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
