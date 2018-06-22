import Skills from '@/components/Skills/Skills.vue'
import Header from '@/components/Inscription/Header/Header.vue'


export default {
  name: 'Inscription1',
  components: {
    Skills,
    Header
  },
  mounted() {
    if (sessionStorage.getItem('name') === null || sessionStorage.getItem('firstname') === null || sessionStorage.getItem('mail') === null || sessionStorage.getItem('password') === null) {
      this.$router.push('/')
    }
  }
}
