import * as React from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { FigureCard } from "../FigureCard";

import { MiniFigure } from "../../types/miniFigs";

interface Props {
  data: MiniFigure[];
  currentIndex: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentIndex: (index: number) => void;
}

export function FigureCarousel({ data, currentIndex, setCurrentIndex }: Props) {
  const offset = 10;
  const width = 300;

  const onScroll = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset } = event.nativeEvent;
      const index = Math.round(contentOffset.x / (width - offset));
      setCurrentIndex(index);
    },
    []
  );

  const ref = React.useRef<FlatList<MiniFigure>>(null);

  // Snap to center on first render
  const onLayout = React.useCallback(() => {
    ref.current?.scrollToOffset({
      offset: -offset,
      animated: false,
    });
  }, []);

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width + offset * 2}
      snapToAlignment="center"
      contentInset={{ left: offset, right: offset }}
      style={{ flexGrow: 0 }}
      ref={ref}
      onLayout={onLayout}
      onScroll={onScroll}
      renderItem={({ item, index }) => (
        <FigureCard figure={item} active={index === currentIndex} />
      )}
    />
  );
}
