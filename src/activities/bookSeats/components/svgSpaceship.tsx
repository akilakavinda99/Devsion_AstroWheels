import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width="110%"
      height="110%"
      viewBox="0 0 516 916"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M166.237 89.431L62.697 327.393c-5.813 8.719-5.45 28.459-4.542 37.238 2.906 8.72 4.844 62.973 5.45 89.009-.727 12.352 2.724 17.862 4.54 19.073l9.991 5.45v2.725H70.87v17.256h1.817v1.817h1.816v24.523L60.88 552.64l-4.542 3.633v6.357h1.817l-45.413 83.56C1.844 657.815-.276 677.676.027 686.153c.605 29.972 1.817 92.096 1.817 100.816 0 8.719 5.449 11.504 8.174 11.807l68.119 11.807v14.532l2.724 9.083c20.345 41.416 121.706 54.192 169.843 55.403v23.615c0 .908.727 2.724 3.634 2.724 2.906 0 3.633-1.816 3.633-2.724l.908-23.615c131.515-1.453 169.843-42.385 172.568-62.669v-7.266l74.476-9.991c6.54 0 8.175-4.239 8.175-6.358l1.816-106.265c.727-13.079-3.33-24.826-5.449-29.064l-55.404-101.725h1.817v-6.357l-4.542-3.633-16.348-33.606v-22.706h1.816v-2.725l.909-.908v-12.716h-5.45v-6.357c18.165-3.633 16.046-20.89 12.716-29.064-1.454-7.993-.606-23.312 0-29.973l5.449-49.045c4.36-13.079 1.817-30.275 0-37.239L342.438 85.798c-5.086-20.345-31.789-52.073-44.504-65.394-42.688-38.147-64.486-13.624-84.468 0-15.985 10.9-38.146 50.56-47.229 69.027z"
        fill="#0D0712"
      />
    </Svg>
  )
}

export default SvgComponent
