import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { useToast } from "@/context/ToastContext";
import { Camera, PersonStanding, XCircle } from "lucide-react-native";

export default function ToastScreen() {
  const { showToast, hideToast } = useToast();

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
        <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14 }}>
          FYI: You can also swipe up/down to dismiss the toast
        </Text>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Top and Bottom Toast
          </Text>
          <Button
            onPress={() =>
              showToast({
                message: "Top toast",
                position: "top",
                style: { width: 350 },
              })
            }
          >
            Show Top Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Bottom toast",
                position: "bottom",
                style: { width: 350 },
              })
            }
          >
            Show Bottom Toast
          </Button>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Variants
          </Text>
          <Button
            onPress={() =>
              showToast({
                message: "Primary Variant",
                variant: "primary",
                position: "top",
                style: { width: 350 },
              })
            }
            variant="primary"
          >
            Show Primary Variant
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Secondary variant",
                variant: "secondary",
                position: "top",
                style: { width: 350 },
              })
            }
            variant="secondary"
          >
            Show Secondary Variant
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Tertiary variant",
                variant: "tertiary",
                position: "top",
                style: { width: 350 },
              })
            }
            variant="tertiary"
          >
            Show Tertiary Variant
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Success variant",
                variant: "success",
                position: "top",
                style: { width: 350 },
              })
            }
            variant="success"
          >
            Show Success Variant
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Warning variant",
                variant: "error",
                position: "top",
                style: { width: 350 },
              })
            }
            variant="error"
          >
            Show Warning Variant
          </Button>
        </View>

        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Elevated Toasts
          </Text>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated primary toast",
                variant: "primary",
                elevated: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="primary"
            elevated={true}
          >
            Show Elevated Primary Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated secondary toast",
                variant: "secondary",
                elevated: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="secondary"
            elevated={true}
          >
            Show Elevated Secondary Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated tertiary toast",
                variant: "tertiary",
                elevated: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="tertiary"
            elevated={true}
          >
            Show Elevated Tertiary Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated success toast",
                variant: "success",
                elevated: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="success"
            elevated={true}
          >
            Show Elevated Success Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated error toast",
                variant: "error",
                elevated: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="error"
            elevated={true}
          >
            Show Elevated Error Toast
          </Button>
        </View>

        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Outlined Toasts
          </Text>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated primary toast",
                variant: "primary",
                outlined: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="primary"
            outlined={true}
          >
            Show Outlined Primary Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated and Outlined toast",
                outlined: true,
                elevated: true,
                position: "top",
                style: { width: 350 },
              })
            }
            outlined={true}
            elevated={true}
          >
            Show Outlined and Elevated Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated secondary toast",
                variant: "secondary",
                outlined: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="secondary"
            outlined={true}
          >
            Show Outlined Secondary Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated tertiary toast",
                variant: "tertiary",
                outlined: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="tertiary"
            outlined={true}
          >
            Show Outlined Tertiary Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated success toast",
                variant: "success",
                outlined: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="success"
            outlined={true}
          >
            Show Outlined Success Toast
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Elevated error toast",
                variant: "error",
                outlined: true,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="error"
            outlined={true}
          >
            Show Outlined Error Toast
          </Button>
        </View>

        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Toast with Icons
          </Text>
          <Button
            onPress={() =>
              showToast({
                message: "Toast with left icon",
                variant: "primary",
                leftIcon: <PersonStanding />,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="primary"
          >
            Show Toast with Left Icon
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Toast with right icon",
                variant: "secondary",
                rightIcon: <Camera />,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="secondary"
          >
            Show Toast with Right Icon
          </Button>
          <Button
            onPress={() =>
              showToast({
                message: "Toast with both icons",
                variant: "tertiary",
                leftIcon: <PersonStanding />,
                rightIcon: <Camera />,
                position: "top",
                style: { width: 350 },
              })
            }
            variant="tertiary"
          >
            Show Toast with Both Icons
          </Button>
        </View>

        <View style={{ gap: 10, width: 350, marginBottom: 20 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Customisation Example
          </Text>
          <Button
            onPress={() =>
              showToast({
                color: "pink",
                textColor: "red",
                message: "Click X to close",
                leftIcon: <XCircle color={"transparent"} />,
                rightIcon: <XCircle onPress={hideToast} color={"red"} />,
                position: "top",
                textContainerStyle: {
                  marginHorizontal: "auto",
                },
                style: {
                  borderRadius: 25,
                  minHeight: 50,
                  width: 350,
                },
                duration: "infinite",
              })
            }
            variant="primary"
          >
            Show Toast
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
