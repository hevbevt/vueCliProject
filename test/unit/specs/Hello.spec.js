import Vue from 'vue';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const HelloComponent = new Constructor().$mount();
    const clickEvent = new window.Event('click');
    const button = HelloComponent.$el.querySelector('button');
    button.dispatchEvent(clickEvent);
    HelloComponent._watcher.run();
    expect(HelloComponent.$el.querySelector('.hello span').textContent)
      .to.equal('Hello Travis');
  });
});
