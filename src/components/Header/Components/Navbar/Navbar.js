export default {
  name: 'Navbar',
  props: {
  },
  data () {
    return {
      scrolled: require('@/assets/logo-blanc.png'),
      isscrolled: false
    }
  },
  methods: {
    handleScroll () {
       const scrolled = window.scrollY > 60
       this.scrolled = scrolled ? require('@/assets/logo.png') : require('@/assets/logo-blanc.png')
       this.isscrolled = scrolled
    },
    doSomething () {
      document.querySelector('#nav .content').classList.toggle('flex')
      document.querySelector('body').classList.toggle('overflow-hidden')
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
