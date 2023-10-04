import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-rapi-ui";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../state/slice/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <View style={styles.container}>
      <Text size="xl" style={styles.content}>
        {count}
      </Text>
      <Button
        text="Increment"
        onPress={() => dispatch(increment())}
        style={styles.content}
      />
      <Button
        text="Decrement"
        onPress={() => dispatch(decrement())}
        style={styles.content}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  content: {
    margin: 12,
  },
});
