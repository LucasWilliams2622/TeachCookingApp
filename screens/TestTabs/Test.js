import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../asset/image/food3.jpg')}
          resizeMode='cover' style={styles.backdrop}>
          <View style={styles.overlay}>
            <Text style={styles.headline}>It should appear in front of the Background Image</Text>
            <Image style={styles.logo} source={require('../../asset/image/food2.jpg')} />
          </View>

        </Image>
      </View>
    </View>
  );
}