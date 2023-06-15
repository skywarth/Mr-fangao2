import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
    const x = ref<number>();
    const y = ref<number>();

    useEventListener(window, 'mousemove', (event) => {
        x.value = event.pageX
        y.value = event.pageY
    })

  return { x, y }
}