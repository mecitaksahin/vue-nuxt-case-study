<template>
  <div>
    <Cta /> <!-- CTA Component -->
    <Header /> <!-- Header Component -->
    <Users /> <!-- Header Component -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue' // Header componentini çağırıyoruz
import Cta from '@/components/Cta.vue' // CTA componentini çağırıyoruz
import Users from '@/components/Users.vue' // CTA componentini çağırıyoruz

export default {
  components: {
    Cta, // CTA bileşenini kullanılabilir hale getiriyoruz,
    Header, // Header bileşenini kullanılabilir hale getiriyoruz,
    Users // Users bileşenini kullanılabilir hale getiriyoruz,

  }
}
</script>

<style scoped>
/* index.vue için stil kuralları */
</style>
