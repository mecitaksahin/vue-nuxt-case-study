<template>
    <div>
        <Cta /> <!-- CTA Component -->
        <Header /> <!-- Header Component -->
        <Report /> <!-- Report Component -->

    </div>
</template>
  
<script>
import Header from '@/components/Header.vue' // Header componentini çağırıyoruz
import Cta from '@/components/Cta.vue' // CTA componentini çağırıyoruz
import Report from '@/components/Reports.vue' // Reports componentini çağırıyoruz

export default {
    components: {
        Cta, // CTA bileşenini kullanılabilir hale getiriyoruz,
        Header,// Header bileşenini kullanılabilir hale getiriyoruz,
        Report,// Report bileşenini kullanılabilir hale getiriyoruz,

    }
}
</script>