import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Video from "react-native-video";

const LearningFeatureContent = ({ route }) => {
  const { item } = route.params;
  console.log(item);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.titleHeader}>Content</Text>
        </View>
        <View style={styles.containerImage}>
          <Image
            source={{
              uri: `${"https://smart-spend.online"}/storage/${item.image}`,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.containerImage, { height: '100%' }]}>
          <Video
            style={styles.video}
            source={{ uri: `${"https://smart-spend.online"}/storage/${item.video}` }}  // Assuming item.videoUrl contains the video URL
            controls={true}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerContent}>
          <View style={styles.contents}>
            <Text style={styles.label}>Topic:</Text>
            <Text style={styles.content} numberOfLines={1000}>
              {item.title}
            </Text>
          </View>
        </View>
        <View style={styles.containerContent}>
          <View style={styles.contents}>
            <Text style={styles.label}>Description:</Text>
            <Text
              style={[styles.content, styles.description]}
              numberOfLines={1000}
            >
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LearningFeatureContent;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  containerHeader: {
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerImage: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 500,
  },
  containerContent: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  titleHeader: {
    fontWeight: "bold",
  },
  image: { width: "100%", height: 300, borderRadius: 20 },
  contents: {
    // flexDirection: "block",
    // alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    // marginRight: 5,
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  description: {
    flexShrink: 1,
  },
  video: {
    width: "100%",
    height: 300, // Set a fixed height for the video
    borderRadius: 20, // Apply similar border-radius as the image
  },
});
