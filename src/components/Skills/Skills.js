import Header from '@/components/Inscription/Header/Header.vue'

export default {
  name: 'Skills',
  components: {
    Header
  },
  props: {

  },
  methods: {
    doSomething (number) {
      document.querySelector(`.skill[data-card="${number}"]`).classList.toggle('active')
    }
  }
}
