####  js/react 二维码

 基于 https://github.com/davidshimjs/qrcodejs

## 类型定义

```js
type Props = {
  /** 弹框位置,默认bottom */
  placement?: Placement,
  /** 触发元素，如果是组件，需要forwardRef到dom */
  children: React.ReactElement,
  /** 弹框内容 */
  content?: React.ReactNode,
  /** 弹框内容是否显示 */
  visible?: boolean,
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void,
  /** arrow是否显示 */
  arrow?: boolean,
  /** 关闭按钮是否显示 */
  closable?: boolean,
  /** container style */
  style?: React.CSSProperties,
  /**  关闭回调 */
  onClose?: () => void,
  className?: string,
  /** 是否显示遮罩 */
  mask?: boolean,
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties,
  /** 遮罩class*/
  maskClass?: string,
  /** 弹框自定义偏移 */
  offset?: Offset,
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement,
  /** 点击外部区域是否关闭,默认true*/
  closeOnClickOutside?: boolean,
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean,
  /** 展开动画, 默认true */
  animate?: boolean,
};
```
