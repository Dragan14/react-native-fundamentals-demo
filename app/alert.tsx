import React from "react";
import { ScrollView } from "react-native";
import SafeAreaView from "@/components/ui/SafeAreaView";
import View from "@/components/ui/View";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { useAlert } from "@/context/AlertContext";

export default function AlertScreen() {
  const { showAlert, hideAlert } = useAlert();

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
            Alert
          </Text>
          <Button
            onPress={() => {
              showAlert({
                content: (
                  <View style={{ gap: 10 }}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      This is a basic alert
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                      }}
                    >
                      <Button
                        onPress={hideAlert}
                        variant="secondary"
                        outlined
                        style={{ flex: 1 }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onPress={hideAlert}
                        variant="primary"
                        style={{ flex: 1 }}
                      >
                        Confirm
                      </Button>
                    </View>
                  </View>
                ),
              });
            }}
          >
            Show Alert
          </Button>
          <Button
            onPress={() => {
              showAlert({
                content: (
                  <View style={{ gap: 10 }}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                      variant="error"
                    >
                      Click on the backdrop of this alert to dismiss it
                    </Text>
                  </View>
                ),
                options: { dismissOnBackdropPress: true },
              });
            }}
          >
            Show Alert with Backdrop Dismiss
          </Button>
          <Button
            onPress={() => {
              showAlert({
                content: (
                  <ScrollView>
                    <View style={{ gap: 20 }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Scrollable Content Example
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                        }}
                      >
                        <Button
                          onPress={hideAlert}
                          variant="secondary"
                          outlined
                          style={{ flex: 1 }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onPress={hideAlert}
                          variant="primary"
                          style={{ flex: 1 }}
                        >
                          Confirm
                        </Button>
                      </View>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                      <Text>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Text>
                      <Text>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </Text>
                      <Text>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet.
                      </Text>
                      <Text>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                      </Text>
                      <Text>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                      </Text>
                      <Text>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                      </Text>
                      <Text>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                      </Text>
                      <Text>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                      </Text>
                    </View>
                  </ScrollView>
                ),
              });
            }}
          >
            Show Alert with Scroll View
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
