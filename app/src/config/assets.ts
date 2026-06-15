declare global {
  interface Window {
    gostudentOrderFormAssets?: {
      logoUrl?: string;
      shareImageUrl?: string;
    };
  }
}

const runtimeAssets =
  typeof window !== "undefined" ? window.gostudentOrderFormAssets : undefined;

const rootAssetDataset =
  typeof document !== "undefined"
    ? document.getElementById("gostudent-order-root")?.dataset
    : undefined;

export const brandAssets = {
  logoUrl: rootAssetDataset?.logoUrl || runtimeAssets?.logoUrl || "/logo.png",
  shareImageUrl:
    rootAssetDataset?.shareImageUrl || runtimeAssets?.shareImageUrl || "/logo.png",
};
