import { defineComponent } from 'vue';
import VueEasyLightBox from './components/VueEasyLightBox';
import { Button, Input } from 'ant-design-vue';

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
        <span
          {...{
            on: {
              click: () => {
                console.log('hahah span');
              },
            },
          }}
        >
          hahah
        </span>
        {/* 没有效果? why? */}
        <Input
          {...{
            on: {
              keyup: () => {
                console.log('aaaaaaa');
              },
            },
          }}
        />
      </div>
    );
  },
});
