import { ScrollView, Text as RNText, PixelRatio } from "react-native";
import { useState } from "react";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Text from "@/components/ui/Text";
import SegmentedControl from "@/components/ui/SegmentedControl";
import {
  Camera,
  PersonStanding,
  Star,
  PlaneTakeoff,
  PlaneLanding,
} from "lucide-react-native";

export default function SegmentedControlScreen() {
  const [selectedindices1, setSelectedindices1] = useState<number[]>([0]);
  const [selectedindices2, setSelectedindices2] = useState<number[]>([0]);
  const [selectedindices3, setSelectedindices3] = useState<number[]>([0]);
  const [selectedindices4, setSelectedindices4] = useState<number[]>([0]);
  const [selectedindices5, setSelectedindices5] = useState<number[]>([0]);
  const [selectedindices6, setSelectedindices6] = useState<number[]>([0]);
  const [selectedindices7, setSelectedindices7] = useState<number[]>([0]);

  return (
    <SafeAreaView disableTopSafeArea={true}>
      <ScrollView
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{
          gap: 20,
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Two Tabs
          </Text>
          <SegmentedControl
            values={[<RNText>Tab One</RNText>, <RNText>Tab Two</RNText>]}
            selectedIndices={selectedindices1}
            onTabPress={(index) => {
              setSelectedindices1([index]);
            }}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Three Tabs
          </Text>
          <SegmentedControl
            values={[
              <RNText>Tab One</RNText>,
              <RNText>Tab Two</RNText>,
              <RNText>Tab Three</RNText>,
            ]}
            selectedIndices={selectedindices2}
            onTabPress={(index) => {
              setSelectedindices2([index]);
            }}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Multiple Selections
          </Text>
          <SegmentedControl
            values={[
              <RNText>Tab One</RNText>,
              <RNText>Tab Two</RNText>,
              <RNText>Tab Three</RNText>,
            ]}
            selectedIndices={selectedindices3}
            onTabPress={(index) => {
              if (selectedindices3.includes(index)) {
                setSelectedindices3(
                  selectedindices3.filter((i) => i !== index),
                );
              } else {
                setSelectedindices3([...selectedindices3, index]);
              }
            }}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Icons
          </Text>
          <SegmentedControl
            values={[
              <>
                <Camera />
                <RNText>Tab One</RNText>
              </>,
              <>
                <RNText>Tab Two</RNText>
                <PersonStanding />
              </>,
              <Star />,
            ]}
            selectedIndices={selectedindices4}
            onTabPress={(index) => {
              setSelectedindices4([index]);
            }}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Round
          </Text>
          <SegmentedControl
            rounded={true}
            values={[<RNText>Tab One</RNText>, <RNText>Tab Two</RNText>]}
            selectedIndices={selectedindices5}
            onTabPress={(index) => {
              setSelectedindices5([index]);
            }}
            style={{ minHeight: scaledSize(30) }}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Disabled
          </Text>
          <SegmentedControl
            disabled={true}
            values={[<RNText>Tab One</RNText>, <RNText>Tab Two</RNText>]}
            selectedIndices={selectedindices6}
            onTabPress={(index) => {
              setSelectedindices6([index]);
            }}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Custom Styling
          </Text>
          <SegmentedControl
            values={[
              <PlaneTakeoff size={30} color="black" />,
              <PlaneLanding size={30} color="black" />,
            ]}
            selectedIndices={selectedindices7}
            rounded={true}
            tabStyle={{ borderColor: "#FF474C" }}
            onTabPress={(index) => {
              setSelectedindices7([index]);
            }}
            activeTabStyle={{
              backgroundColor: "#FF474C",
            }}
            inactiveTabStyle={{ backgroundColor: "lightpink" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const scaledSize = (baseSize: number) => {
  return Math.round(baseSize * PixelRatio.getFontScale());
};
