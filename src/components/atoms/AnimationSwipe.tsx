import { useRef } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";

type TAnimationSwipeProps = {
  handleScrollStatus?: () => void;
  onSwipeRight?: () => void;
  onSwipeLeft?: () => void;
  children: JSX.Element | JSX.Element[];
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_THRESHOLD = SCREEN_WIDTH * 0.15;

const AnimationSwipe = ({
  children,
  handleScrollStatus = () => {},
  onSwipeRight = () => {},
  onSwipeLeft = () => {},
}: TAnimationSwipeProps) => {
  const swipeAnim = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onStartShouldSetPanResponder: () => {
        handleScrollStatus();
        return true;
      },
      onPanResponderMove: Animated.event([null, { dx: swipeAnim.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (event, { dx }) => {
        handleSwipe(dx);
      },
      onPanResponderTerminationRequest: () => {
        if (handleScrollStatus) handleScrollStatus();
        return true;
      },
    })
  ).current;

  const handleResetPosition = () => {
    Animated.spring(swipeAnim, {
      useNativeDriver: true,
      toValue: { x: 0, y: 0 },
    }).start();
  };

  const handleSwipe = (dx: number) => {
    if (dx > SCREEN_THRESHOLD) {
      onSwipeRight();
    } else if (dx < -SCREEN_THRESHOLD) {
      onSwipeLeft();
    }
    handleResetPosition();
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: swipeAnim.x.interpolate({
              inputRange: [-SCREEN_WIDTH / 3, 0, SCREEN_WIDTH / 3],
              outputRange: [-SCREEN_WIDTH / 3, 0, SCREEN_WIDTH / 3],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};

export default AnimationSwipe;
