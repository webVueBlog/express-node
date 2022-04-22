```js
import isValidElementType from 'shared/isValidElementType';
import warningWithoutStack from 'shared/warningWithoutStack';

export default function memo<Props> (
 type: React$ElementType,
 compare?: (oldProps: Props, newProps: Props) => boolean,
) {
 if(__DEV__) {}
 return {
  $$typeof: REACT_MEMO_TYPE,
  type,
  compare: compare === undefined ? null : compare,
 }
}

// Fragment: REACT_FRAGMENT_TYPE
// StrictMode: REACT_STRICT_MODE_TYPE
// ReactElement
```