// @ is an alias to /src
import Articles from '@/components/Articles/Articles.vue'
import Interviews from '@/components/Interviews/Interviews.vue'
import Jobs from '@/components/Jobs/Jobs.vue'
import Recruiters from '@/components/Recruiters/Recruiters.vue'
import Research from '@/components/Research/Research.vue'
import About from '@/components/About/About.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'home',
    components: {
        Articles,
        Interviews,
        Jobs,
        Recruiters,
        Research,
        About,
        Footer
    }
}
