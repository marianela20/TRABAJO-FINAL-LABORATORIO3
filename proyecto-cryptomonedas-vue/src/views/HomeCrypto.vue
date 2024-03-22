<template>
    <div>
      <CompraCrypto></CompraCrypto>
      
    </div>
    <nav>
     
    <router-link to="/about">About</router-link>
  </nav>
</template>



<script>
import CompraCrypto from '@/components/CompraCrypto.vue'
export default {
    name: "HomeCrypro",
    components: {
     CompraCrypto
    }
}
</script>

<style>

</style>
