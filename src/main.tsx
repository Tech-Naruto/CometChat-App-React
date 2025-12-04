import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils.ts";
import { CometChatProvider } from "./CometChat/context/CometChatContext.tsx";

export const COMETCHAT_CONSTANTS = {
  APP_ID: "1672615f4da30520c", // Replace with your App ID
  REGION: "in", // Replace with your App Region
  AUTH_KEY: "8e80a165ec27473a71cb3d2daae24f3f606630fe", // Replace with your Auth Key 
};

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(uiKitSettings)?.then(() => {
  setupLocalization();
  createRoot(document.getElementById("root")!).render(
    <CometChatProvider>
      <App />
    </CometChatProvider>
  );
});