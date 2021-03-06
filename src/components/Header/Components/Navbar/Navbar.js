export default {
  name: 'Navbar',
  props: {
  },
  data () {
    return {
      scrolled: (window.innerWidth > 1024) ? require('@/assets/logo-blanc.png') : require('@/assets/logo.png'),
      isscrolled: false
    }
  },
  methods: {
    handleScroll () {
       const scrolled = window.scrollY > 60
       this.scrolled = (scrolled || window.innerWidth <= 1024) ? require('@/assets/logo.png') : require('@/assets/logo-blanc.png')
       this.isscrolled = scrolled
    },
    doSomething () {
      document.querySelector('#nav .content').classList.toggle('flex')
      document.querySelector('body').classList.toggle('overflow-hidden')
    },
    openInscriptionModal () {
      document.querySelector('#modal-inscription').classList.add('flex')
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
