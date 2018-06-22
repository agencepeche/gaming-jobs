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
    checkForm:function(e) {
      if(this.name && this.firstname && this.mail && this.password) return true
      this.errors = []
      if(!this.name) this.errors.push("Le nom est obligatoire")
      if(!this.firstname) this.errors.push("Le prénom est obligatoire")
      if(!this.mail) this.errors.push("Le mail est obligatoire")
      if(!this.password) this.errors.push("Le mot de passe est obligatoire")
      e.preventDefault()
    },
    closeModal () {
      document.querySelector('#modal-inscription').classList.remove('flex')
    }
  }
}
