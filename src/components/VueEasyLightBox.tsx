import { defineComponent } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox'; // 这样引入会有问题 请看App.tsx文件
// import VueEasyLightbox from 'vue-easy-lightbox/dist/vue-easy-lightbox.es5.common.min.js'; // 这么引入就没有问题 并在module.d.ts里指定的类型是any

export default defineComponent({
  emits: ['close'],
  setup(_props, { emit }) {
    return () => (
      <div class='vue-easy-lightbox-demo'>
        <button
          onClick={() => {
            emit('close');
          }}
        >
          Click me
        </button>
      </div>
    );
  },
});
