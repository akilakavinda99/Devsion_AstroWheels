import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function InteriorIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.69 23h-1.38a2.028 2.028 0 01-2.026-2.025v-.467a8.876 8.876 0 01-1.379-.573l-.33.331a2.025 2.025 0 01-2.865 0l-.976-.976a2.025 2.025 0 010-2.864l.33-.331a8.878 8.878 0 01-.572-1.38h-.467A2.028 2.028 0 011 12.69v-1.38c0-1.117.909-2.026 2.025-2.026h.467c.152-.474.344-.936.573-1.379l-.331-.33a2.025 2.025 0 010-2.865l.976-.976c.78-.782 2.064-.801 2.864 0l.331.33a8.89 8.89 0 011.38-.572v-.467C9.284 1.91 10.192 1 11.31 1h1.38c1.117 0 2.026.909 2.026 2.025v.467a8.88 8.88 0 011.379.573l.33-.331a2.025 2.025 0 012.865 0l.976.976c.78.779.803 2.063 0 2.864l-.33.331c.229.443.42.905.572 1.38h.467c1.116 0 2.025.908 2.025 2.025v1.38a2.028 2.028 0 01-2.025 2.026h-.467a8.883 8.883 0 01-.573 1.379l.331.33c.802.802.78 2.086 0 2.865l-.976.976c-.78.782-2.064.801-2.864 0l-.331-.33c-.443.229-.905.42-1.38.572v.467A2.028 2.028 0 0112.69 23zm-4.57-4.419c.616.365 1.279.64 1.97.818.285.073.483.33.483.624v.952c0 .406.33.736.737.736h1.38c.406 0 .737-.33.737-.736v-.952c0-.294.199-.55.483-.624a7.598 7.598 0 001.97-.818.645.645 0 01.783.1l.674.674a.736.736 0 001.041 0l.977-.977a.736.736 0 000-1.04l-.674-.675a.645.645 0 01-.1-.784c.365-.615.64-1.278.818-1.969a.645.645 0 01.624-.483h.952c.406 0 .736-.33.736-.737v-1.38a.737.737 0 00-.736-.737h-.952a.645.645 0 01-.624-.483 7.597 7.597 0 00-.817-1.97.645.645 0 01.099-.783l.674-.674a.736.736 0 000-1.041l-.976-.977a.736.736 0 00-1.041 0l-.675.675a.645.645 0 01-.784.099A7.598 7.598 0 0013.91 4.6a.645.645 0 01-.483-.624v-.952a.737.737 0 00-.737-.736h-1.38a.737.737 0 00-.737.736v.952c0 .294-.198.55-.483.624a7.597 7.597 0 00-1.97.817.645.645 0 01-.783-.099l-.674-.674a.736.736 0 00-1.041 0l-.977.977a.736.736 0 000 1.04l.674.675c.208.208.25.53.1.784A7.595 7.595 0 004.6 10.09a.645.645 0 01-.624.483h-.952a.737.737 0 00-.736.737v1.38c0 .406.33.737.736.737h.952c.294 0 .55.198.624.483.178.691.453 1.354.817 1.97a.644.644 0 01-.099.783l-.674.674a.736.736 0 000 1.041l.976.977a.736.736 0 001.041 0l.675-.675a.648.648 0 01.784-.099z"
        fill="#7A6392"
      />
      <Path
        d="M12 17.222A5.228 5.228 0 016.778 12 5.228 5.228 0 0112 6.778 5.228 5.228 0 0117.222 12 5.228 5.228 0 0112 17.222zm0-9.038A3.82 3.82 0 008.185 12 3.82 3.82 0 0012 15.816 3.82 3.82 0 0015.816 12 3.82 3.82 0 0012 8.184z"
        fill="#7A6392"
      />
    </Svg>
  );
}

export default InteriorIcon;
