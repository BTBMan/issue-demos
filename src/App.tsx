import { defineComponent } from 'vue';
import VueEasyLightBox from './components/VueEasyLightBox';
import { Button } from 'ant-design-vue';

export default defineComponent({
  setup() {
    return () => (
      <div class='page'>
        <VueEasyLightBox
          onClose={() => {
            console.log('object');
          }}
          onAbc={() => {
            //
          }}
        />
        <Button
          onAbc={() => {
            // ant组件的没有问题
          }}
        >
          button
        </Button>
      </div>
    );
  },
});
