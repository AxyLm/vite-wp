<script lang="ts">
  import { defineComponent, h } from 'vue';
  export default defineComponent({
    name: 'MomentCard',
    props: {
      mode: {
        default: 'cover',
      },
    },
    render() {
      return h(
        'div',
        {
          class: 'moment-card',
        },
        h(
          'div',
          { class: 'h-full' },
          {
            default: () => 'slot',
          },
        ),
      );
    },
  });
</script>
