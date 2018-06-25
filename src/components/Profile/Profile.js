import Skill from '@/components/Skills/Skill/Skill.vue'

export default {
  name: 'Profile',
  props: {

  },
  components: {
    Skill
  },
  data () {
    return {
      selected:[],
      skills: {},
      experiences_range: 1,
      skills_range:1
    }
  },
  mounted() {

    const skills = JSON.parse(sessionStorage.getItem('skills'))
    let array = []

    Object.keys(skills).map(function(index) {
      let value = {}
      value.number = skills[index]
      array.push(value)
    })
    this.skills = array

  },
  methods: {
    doSomething (className,number) {
      if (className === 'experiences') {
        this.experiences_range = number
      }else {
        this.skills_range = number
      }
    },
    submitForm () {
      sessionStorage.setItem('experiences_range', this.experiences_range)
      sessionStorage.setItem('skills_range', this.skills_range)
      this.$router.push('/inscription/confirmation')
    }
  }
}
