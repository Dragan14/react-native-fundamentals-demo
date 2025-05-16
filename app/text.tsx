import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Text from "@/components/ui/Text";

export default function TextScreen() {
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
            Variants
          </Text>
          <Text style={{ textAlign: "center" }} variant="default">
            Default Text
          </Text>
          <Text style={{ textAlign: "center" }} variant="primary">
            Primary Text
          </Text>
          <Text style={{ textAlign: "center" }} variant="secondary">
            Secondary Text
          </Text>
          <Text style={{ textAlign: "center" }} variant="tertiary">
            Tertiary Text
          </Text>
          <Text style={{ textAlign: "center" }} variant="error">
            Error Text
          </Text>
          <Text style={{ textAlign: "center" }} variant="success">
            Success Text
          </Text>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Link Text
          </Text>
          <Text variant="primary" link={true} style={{ textAlign: "center" }}>
            Click Me or Hover Me
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
