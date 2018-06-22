
export default {
  name: 'Skills',
  props: {

  },
  methods: {
    doSomething (className,number) {
      document.querySelectorAll(`.profile-${className} .choice`).forEach( (item) => {
        item.classList.remove('active')
      })
      document.querySelector(`.profile-${className} .choice[data-choice="${number}"]`).classList.add('active')
    }
  }
}
