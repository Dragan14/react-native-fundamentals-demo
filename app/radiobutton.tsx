import React, { useState } from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Text from "@/components/ui/Text";
import RadioButton from "@/components/ui/RadioButton";

export default function RadioButtonScreen() {
  const [groupValue, setGroupValue] = useState<string | null>("optionA");

  const handleGroupChange = (newValue: string) => {
    setGroupValue(newValue);
  };

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
            Radio Buttons
          </Text>
          <RadioButton
            label="Option A"
            value={groupValue === "optionA"}
            onValueChange={() => handleGroupChange("optionA")}
          />
          <RadioButton
            label="Option B"
            value={groupValue === "optionB"}
            onValueChange={() => handleGroupChange("optionB")}
          />
          <RadioButton
            label="Option C"
            value={groupValue === "optionC"}
            onValueChange={() => handleGroupChange("optionC")}
          />
          <RadioButton
            label="Disabled Unselected"
            value={false}
            onValueChange={() => {}}
            disabled
          />
          <RadioButton
            label="Disabled Selected"
            value={true}
            onValueChange={() => {}}
            disabled
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
