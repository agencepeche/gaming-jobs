import Confirmation from '@/components/Confirmation/Confirmation.vue'
import Header from '@/components/Inscription/Header/Header.vue'

export default {
  name: 'Succeed',
  components: {
    Confirmation,
    Header
  },
  mounted() {
    if (sessionStorage.getItem('experiences_range') === null) {
      this.$router.push('/')
    }
  }
}
