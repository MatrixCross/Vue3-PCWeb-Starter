import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: props => {
    return () => {
      return <h1>{props.msg}</h1>
    }
  },
})
