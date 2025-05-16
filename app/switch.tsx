import { useState } from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Text from "@/components/ui/Text";
import Switch from "@/components/ui/Switch";

export default function SwitchScreen() {
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(true);
  const [isEnabled4, setIsEnabled4] = useState(true);
  const [isEnabled5, setIsEnabled5] = useState(true);
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

          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Primary Variant
          </Text>
          <Switch
            variant="primary"
            value={isEnabled1}
            onValueChange={() => setIsEnabled1(!isEnabled1)}
            style={{ marginHorizontal: "auto" }}
          />

          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Secondary Variant
          </Text>
          <Switch
            variant="secondary"
            value={isEnabled2}
            onValueChange={() => setIsEnabled2(!isEnabled2)}
            style={{ marginHorizontal: "auto" }}
          />

          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Tertiary Variant
          </Text>
          <Switch
            variant="tertiary"
            value={isEnabled3}
            onValueChange={() => setIsEnabled3(!isEnabled3)}
            style={{ marginHorizontal: "auto" }}
          />

          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Success Variant
          </Text>
          <Switch
            variant="success"
            value={isEnabled4}
            onValueChange={() => setIsEnabled4(!isEnabled4)}
            style={{ marginHorizontal: "auto" }}
          />

          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Error Variant
          </Text>
          <Switch
            variant="error"
            value={isEnabled5}
            onValueChange={() => setIsEnabled5(!isEnabled5)}
            style={{ marginHorizontal: "auto" }}
          />

          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Disabled
          </Text>
          <Switch
            disabled={true}
            variant="error"
            value={true}
            style={{ marginHorizontal: "auto" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
