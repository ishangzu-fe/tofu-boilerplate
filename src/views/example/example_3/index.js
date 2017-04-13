import './index.scss';
import t from './index.html';

export default {
    name: 'example_3',

    template: t,

    data () {
        return {
            i: 0
        };
    },

    methods: {
        startTimer () {
            setInterval(() => {
                this.i++;
            }, 1000);
        }
    },

    mounted () {
        this.startTimer();
        debugger
    }
};
