import Header from '@/components/Inscription/Header/Header.vue'

export default {
  name: 'Skills',
  data () {
    return {
      selected:[]
    }
  },
  components: {
    Header
  },
  props: {

  },
  methods: {
    doSomething (number) {
      if (this.selected.includes(number)) {
        const item_to_remove = this.selected.indexOf(number)
        this.selected.splice(item_to_remove,1)
      }else {
        this.selected.push(number)
      }
      console.log(this.selected);
      document.querySelector(`.skill[data-card="${number}"]`).classList.toggle('active')
    },
    submitForm () {
      sessionStorage.setItem('skills', this.selected)
      this.$router.push('inscription/profil')
    }
  }
}
