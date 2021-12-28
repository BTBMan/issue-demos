import { defineComponent } from 'vue';
import VueEasyLightBox from './components/VueEasyLightBox';

export default defineComponent({
  setup() {
    return () => (
      <div class='page'>
        <VueEasyLightBox
          onClose={() => {
            console.log('object');
          }}
        />
      </div>
    );
  },
});
