export default {
  name: 'ModalInscription',
  data () {
    return {
      errors:[],
      name:null,
      firstname:null,
      mail:null,
      password:null
    }
  },
  methods:{
    checkForm (e) {
      if(this.name && this.firstname && this.mail && this.password) {
        sessionStorage.setItem('name',this.name)
        sessionStorage.setItem('firstname',this.firstname)
        sessionStorage.setItem('mail',this.mail)
        sessionStorage.setItem('password',this.password)
        this.errors = []
        this.closeModal()
        this.$router.push("/inscription")
      }else {
        if(!this.name) this.errors.push("Le nom est obligatoire")
        if(!this.firstname) this.errors.push("Le prénom est obligatoire")
        if(!this.mail) this.errors.push("Le mail est obligatoire")
        if(!this.password) this.errors.push("Le mot de passe est obligatoire")
      }

      // e.preventDefault()
    },
    closeModal () {
      this.$refs.modalInscription.classList.remove('flex')
    }
  }
}
