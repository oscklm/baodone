import * as React from "react";
import Svg, { SvgProps, Path, G } from "react-native-svg";

export const Icons = {
  ArrowLeft: (props: SvgProps) => (
    <Svg viewBox="0 0 64 64" {...props}>
      <Path
        d="M7.53 33.25c.23.35.53.65.88.88l28.92 19.24a3.14 3.14 0 0 0 4.88-2.59V42.5h11.8c1.66 0 3-1.34 3-3v-16c0-1.66-1.34-3-3-3h-11.8v-8.25c0-1.73-1.4-3.14-3.13-3.15-.62 0-1.23.18-1.75.53L8.4 28.9a3.141 3.141 0 0 0-.88 4.35Z"
        fill={props.color}
        strokeWidth={0}
      />
    </Svg>
  ),
  House: (props: SvgProps) => (
    <Svg viewBox="0 0 64 64" {...props}>
      <G>
        <Path d="M0 0h64v64H0z" fill="none" />
        <Path
          d="M59.5 34.37 33.21 8.07a1.73 1.73 0 0 0-2.42 0L4.5 34.37a1.7 1.7 0 0 0 0 2.41l3.57 3.57a1.71 1.71 0 0 0 2.41 0l2.07-2.07v16.44a1.71 1.71 0 0 0 1.7 1.71h11.22V38.69a3 3 0 0 1 3-3h7.06a3 3 0 0 1 3 3v17.74h11.22a1.71 1.71 0 0 0 1.7-1.71V38.28l2.07 2.07a1.71 1.71 0 0 0 2.41 0l3.57-3.57a1.7 1.7 0 0 0 0-2.41Z"
          fill={props.color}
        />
      </G>
    </Svg>
  ),
  Search: (props: SvgProps) => (
    <Svg viewBox="0 0 128 128" {...props}>
      <G>
        <G>
          <Path d="M0 0h128v128H0z" fill="none" />
          <Path
            d="M119.4 102.5 98.61 81.71a48.74 48.74 0 1 0-16.9 16.9l20.79 20.79c1.78 1.78 7-.56 11.68-5.22s7-9.9 5.22-11.68ZM34.54 78.94a31.4 31.4 0 1 1 44.4 0 31.4 31.4 0 0 1-44.4 0Z"
            fill={props.color}
          />
        </G>
      </G>
    </Svg>
  ),
};
