import { useState } from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import TextInput from "@/components/ui/TextInput";
import Text from "@/components/ui/Text";
import { CircleCheckBig } from "lucide-react-native";
import { CircleUser } from "lucide-react-native";
import { Pencil } from "lucide-react-native";
import { CircleX } from "lucide-react-native";
import { Eye } from "lucide-react-native";
import { EyeOff } from "lucide-react-native";
import { Lock } from "lucide-react-native";

export default function TextInputScreen() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
            Clear Variant
          </Text>
          <TextInput
            placeholder="clear"
            variant="clear"
            retainErrorMessageSpace={false}
          />
          <TextInput
            placeholder="clear"
            variant="clear"
            topLabel="Top Label"
            retainErrorMessageSpace={false}
          />
          <TextInput
            placeholder="clear"
            variant="clear"
            leftLabel="Left Label"
            retainErrorMessageSpace={false}
          />
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Outlined Variant
          </Text>
          <TextInput
            placeholder="outlined"
            variant="outlined"
            retainErrorMessageSpace={false}
          />
          <TextInput
            placeholder="outlined"
            variant="outlined"
            topLabel="Top Label"
            retainErrorMessageSpace={false}
          />
          <TextInput
            placeholder="outlined"
            variant="outlined"
            leftLabel="Left Label"
            retainErrorMessageSpace={false}
          />
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Solid Variant
          </Text>
          <TextInput
            placeholder="solid"
            variant="solid"
            retainErrorMessageSpace={false}
          />

          <TextInput
            placeholder="solid"
            variant="solid"
            topLabel="Top Label"
            retainErrorMessageSpace={false}
          />
          <TextInput
            placeholder="solid"
            variant="solid"
            leftLabel="Left Label"
            retainErrorMessageSpace={false}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Text Input Icons
          </Text>
          <TextInput
            placeholder="outlined"
            variant="outlined"
            topLabel="Top Label"
            leftIcon={<CircleUser />}
            rightIcon={<CircleCheckBig />}
            retainErrorMessageSpace={false}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Additional Properties
          </Text>
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Disabled
          </Text>
          <TextInput
            placeholder="disabled"
            variant="outlined"
            disabled={true}
            retainErrorMessageSpace={false}
          />
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Error Message
          </Text>
          <TextInput
            placeholder="error message"
            variant="outlined"
            error={true}
            errorMessage="This is an error message"
          />
          <Text
            style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}
          >
            Character Counter
          </Text>
          <TextInput
            topLabel="Character Counter with Max Length"
            value={value}
            onChangeText={setValue}
            placeholder="character counter"
            variant="outlined"
            counter={true}
            maxLength={10}
          />
          <TextInput
            topLabel="Character Counter without Max Length"
            value={value3}
            onChangeText={setValue3}
            placeholder="character counter"
            variant="outlined"
            counter={true}
          />
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Customisation Example
          </Text>
          <TextInput
            value={value2}
            onChangeText={setValue2}
            placeholder={value2 || "Click the pencil icon to edit"}
            variant="outlined"
            disabled={!isEditing}
            retainErrorMessageSpace={false}
            topLabel="Top Label"
            leftIcon={
              !isEditing ? (
                <Pencil
                  onPress={() => {
                    setIsEditing(!isEditing);
                  }}
                />
              ) : (
                <CircleCheckBig
                  onPress={() => {
                    setIsEditing(!isEditing);
                  }}
                />
              )
            }
            rightIcon={
              isEditing ? (
                <CircleX
                  onPress={() => {
                    setIsEditing(!isEditing);
                    setValue2("");
                  }}
                />
              ) : undefined
            }
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            variant="outlined"
            topLabel="Password"
            retainErrorMessageSpace={false}
            secureTextEntry={!showPassword}
            leftIcon={<Lock />}
            rightIcon={
              showPassword ? (
                <EyeOff
                  onPress={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <Eye
                  onPress={() => {
                    setShowPassword(true);
                  }}
                />
              )
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
