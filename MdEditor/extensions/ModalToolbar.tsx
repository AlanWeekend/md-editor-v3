import { defineComponent, PropType } from 'vue';
import { prefix } from '../config';
import { getSlot } from '../utils/vue-tsx';
import Modal from '../components/Modal';

export default defineComponent({
  name: 'ModalToolbar',
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    },
    modalTitle: {
      type: String as PropType<string>,
      default: ''
    },
    visible: {
      type: Boolean as PropType<boolean>
    },
    width: {
      type: String as PropType<string>,
      default: 'auto'
    },
    height: {
      type: String as PropType<string>,
      default: 'auto'
    },
    // 展示在工具栏的内容，通常是个图标
    trigger: {
      type: [String, Object] as PropType<string | JSX.Element>
    },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => () => {}
    },
    onClosed: {
      type: Function as PropType<() => void>,
      default: () => () => {}
    },
    /**
     * 显示全屏按钮
     */
    showAdjust: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    isFullscreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    onAdjust: {
      type: Function as PropType<(val: boolean) => void>,
      default: () => () => {}
    }
  },
  setup(props, ctx) {
    return () => {
      const Trigger = getSlot({ props, ctx }, 'trigger');
      const Default = getSlot({ props, ctx }, 'default');

      return (
        <>
          <div
            class={`${prefix}-toolbar-item`}
            title={props.title}
            onClick={props.onClick}
          >
            {Trigger}
          </div>
          <Modal
            width={props.width}
            height={props.height}
            title={props.modalTitle}
            visible={props.visible}
            onClosed={props.onClosed}
            showAdjust={props.showAdjust}
            isFullscreen={props.isFullscreen}
            onAdjust={props.onAdjust}
          >
            {Default}
          </Modal>
        </>
      );
    };
  }
});