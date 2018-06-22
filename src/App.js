import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import ModalInscription from '@/components/ModalInscription/ModalInscription.vue'

export default {
  name: 'App',
  components: {
    Header,
    ModalInscription,
    Footer
  },
  props: {

  },
  watch: {
    $route () {
      window.scrollTo(0,0)
    }
  }
}
