import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FeaturesIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z"
        fill="#7A6392"
      />
      <Path
        d="M18.713 10.422a.75.75 0 00-.605-.51l-3.756-.547-1.68-3.403c-.252-.513-1.092-.513-1.344 0l-1.68 3.403-3.756.546a.75.75 0 00-.416 1.279l2.718 2.65-.641 3.74a.75.75 0 001.088.79L12 16.604l3.359 1.766a.75.75 0 001.088-.79l-.641-3.74 2.718-2.65a.75.75 0 00.19-.768zm-4.237 2.618a.75.75 0 00-.215.664l.451 2.631-2.363-1.242a.748.748 0 00-.698 0l-2.363 1.242.451-2.631a.75.75 0 00-.215-.664l-1.912-1.863 2.642-.385a.749.749 0 00.565-.41L12 7.99l1.181 2.393c.11.221.32.375.565.41l2.642.385-1.912 1.863z"
        fill="#7A6392"
      />
    </Svg>
  );
}

export default FeaturesIcon;