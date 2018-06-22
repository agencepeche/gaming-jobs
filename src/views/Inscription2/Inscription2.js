import Profile from '@/components/Profile/Profile.vue'
import Header from '@/components/Inscription/Header/Header.vue'

export default {
  name: 'Inscription2',
  components: {
    Profile,
    Header
  },
  mounted() {
    if (sessionStorage.getItem('skills') === null) {
      this.$router.push('/')
    }else {
      alert(sessionStorage.getItem('skills'))
    }
  }
}
