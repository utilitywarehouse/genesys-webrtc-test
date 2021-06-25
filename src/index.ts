import { GenesysCloudWebrtcSdk } from "genesys-cloud-webrtc-sdk";

const sdk = new GenesysCloudWebrtcSdk({});

sdk.initialize().then(console.log);
