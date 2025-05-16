import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { Camera } from "lucide-react-native";
import { PersonStanding } from "lucide-react-native";

export default function ButtonScreen() {
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
            Button Variants
          </Text>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="error">Error</Button>
          <Button variant="success">Success</Button>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Outlined Variants
          </Text>
          <Button variant="primary" outlined={true}>
            Primary
          </Button>
          <Button variant="secondary" outlined={true}>
            Secondary
          </Button>
          <Button variant="tertiary" outlined={true}>
            Tertiary
          </Button>
          <Button variant="error" outlined={true}>
            Error
          </Button>
          <Button variant="success" outlined={true}>
            Success
          </Button>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Elevated Variants
          </Text>
          <Button variant="primary" elevated={true}>
            Primary
          </Button>
          <Button variant="secondary" elevated={true}>
            Secondary
          </Button>
          <Button variant="tertiary" elevated={true}>
            Tertiary
          </Button>
          <Button variant="error" elevated={true}>
            Error
          </Button>
          <Button variant="success" elevated={true}>
            Success
          </Button>
          <Button variant="primary" elevated={true} outlined={true}>
            Elevated and Outlined
          </Button>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Button Icons
          </Text>
          <Button
            variant="primary"
            leftIcon={<PersonStanding />}
            style={{ maxWidth: 350 }}
          >
            Left Icon
          </Button>
          <Button
            outlined={true}
            rightIcon={<Camera />}
            style={{ maxWidth: 350 }}
          >
            Right Icon
          </Button>
          <Button
            elevated={true}
            leftIcon={<PersonStanding />}
            rightIcon={<Camera />}
          >
            Both Icons
          </Button>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Additional Properties
          </Text>
          <Button style={{ maxWidth: 350 }} disabled={true}>
            Disabled
          </Button>
          <Button variant="tertiary" rounded={true}>
            Round
          </Button>
          <Button variant="tertiary" loading={true} elevated={true}>
            Loading
          </Button>
        </View>
        <View style={{ gap: 10, width: 350 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Customisation Example
          </Text>
          <Button
            outlined={true}
            rightIcon={<Camera />}
            rounded={true}
            color="pink"
            textColor="red"
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderColor: "red",
              marginHorizontal: "auto",
            }}
            contentContainerStyle={{ padding: 0 }}
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
