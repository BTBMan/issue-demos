import { defineComponent } from 'vue';

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
