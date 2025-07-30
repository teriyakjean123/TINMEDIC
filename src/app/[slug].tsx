import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { getPostBySlug } from "../repositories/postRepository";

const postDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPostBySlug(slug as string));

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <View>
      <Text> {post.title} </Text>
    </View>
  );
};

export default postDetailsPage;
