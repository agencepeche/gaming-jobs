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
      if (window.innerWidth <= 1024) {
        const mobile_navbar = document.querySelector('#nav ul')
        if (mobile_navbar.classList.contains('flex')) {
          mobile_navbar.classList.remove('flex')
        }
      }
    }
  }
}
