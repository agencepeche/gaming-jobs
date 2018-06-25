export default {
  name: 'Confirmation',
  props: {

  },
  data () {
    return {
      lastname:sessionStorage.getItem('name'),
      firstname:sessionStorage.getItem('firstname')
    }
  },
  mounted() {
  }
}
