import { Animated, StyleProp, ViewStyle } from 'react-native';
import React, { FC } from 'react';

import styled from 'styled-components/native';

interface ThumbPositionerType {
  percent: number;
}

const ThumbPositioner = styled.View<ThumbPositionerType>`
  position: absolute;
  left: ${({ percent }): string => `${percent}%`};
`;

const StyledThumb = styled.View`
  width: 12;
  height: 12;
  background-color: #0b21e8;
  border-radius: 6;
  transform: translate(-6px);
`;

interface Props {
  testID?: string;
  percent: number;
  size?: number;
  scaleValue?: Animated.Value;
  opacityValue?: Animated.Value;
  customThumb?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

const Thumb: FC<Props> = ({
  testID,
  percent,
  size = 12,
  scaleValue = new Animated.Value(0.01),
  opacityValue = new Animated.Value(0.12),
  customThumb,
  style,
}) => {
  const rippleSize = size * 2;

  return (
    <ThumbPositioner testID="thumb-positioner-test-id" percent={percent}>
      {customThumb || (
        <StyledThumb testID={testID} style={style}>
          <Animated.View
            style={{
              position: 'absolute',
              top: -6,
              left: -6,
              width: rippleSize,
              height: rippleSize,
              borderRadius: rippleSize / 2,
              transform: [{ scale: scaleValue }],
              opacity: opacityValue,
              backgroundColor: '#0b21e8',
            }}
          />
        </StyledThumb>
      )}
    </ThumbPositioner>
  );
};

export default Thumb;