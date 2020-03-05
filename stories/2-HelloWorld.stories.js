import HelloWorld from '../src/components/HelloWorld.vue';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
};

export const Default = () => ({
  components: { HelloWorld },
  template: `
    <hello-world />
    test
  `,
});
