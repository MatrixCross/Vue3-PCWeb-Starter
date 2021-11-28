import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldTsx from '@/components/HelloWorld'

describe('HelloWorld component test', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorldTsx, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
