import Vue from 'vue';
import Restaurants from 'src/components/Restaurants';

describe('Restaurants.vue', () => {
  const vm = new Vue({
    template: '<div><restaurants></restaurants></div>',
    components: { Restaurants }
  }).$mount();

  it('should render row(s)', () => {
    vm.$el.querySelectorAll('.restaurants tbody > tr').length.should.be.above(0);
  });

  it('should render 4 columns', () => {
    vm.$el.querySelector('.restaurants tbody > tr').children.length.should.equal(4);
  });
});
