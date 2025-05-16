import { ScrollView } from "react-native";
import { Link } from "expo-router";
import SafeAreaView from "@/components/ui/SafeAreaView";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import View from "@/components/ui/View";
import RadioButton from "@/components/ui/RadioButton";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          paddingTop: 20,
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
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            React Native Fundamentals
          </Text>
          <View
            style={{
              gap: 10,
              alignItems: "flex-start",
              paddingLeft: 10,
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              Select Theme:
            </Text>
            <RadioButton
              label="Light"
              value={themeMode === "light"}
              onValueChange={() => setThemeMode("light")}
            />
            <RadioButton
              label="Dark"
              value={themeMode === "dark"}
              onValueChange={() => setThemeMode("dark")}
            />
            <RadioButton
              label="System"
              value={themeMode === "system"}
              onValueChange={() => setThemeMode("system")}
            />
          </View>
          <Link href="/text" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Text
            </Button>
          </Link>
          <Link href="/textinput" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Text Input
            </Button>
          </Link>
          <Link href="/button" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Button
            </Button>
          </Link>
          <Link href="/segmentedcontrol" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Segmented Control
            </Button>
          </Link>
          <Link href="/switch" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Switch
            </Button>
          </Link>
          <Link href="/toast" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Toast
            </Button>
          </Link>
          <Link href="/alert" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Alert
            </Button>
          </Link>
          <Link href="/radiobutton" asChild>
            <Button
              style={{
                width: 350,
                marginHorizontal: "auto",
              }}
            >
              Radio Button
            </Button>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
