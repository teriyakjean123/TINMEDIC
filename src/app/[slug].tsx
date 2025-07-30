import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { getPostBySlug, getAllPosts } from "../repositories/postRepository";
import Markdown from 'react-native-markdown-display';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  const posts = getAllPosts();
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  return posts.map(post => ({ slug: post.slug }));

}
const postDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPostBySlug(slug as string));

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        maxWidth: 960,
        width: "100%",
        marginHorizontal: "auto",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 20 }}> {post.title} </Text>
      <Markdown>{post.content}</Markdown>
    </ScrollView>
  );
};

export default postDetailsPage;
