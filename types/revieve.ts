// NOTE: These typing are stub definition only, `unknown` types should be replaced with specific ones.
export type RevieveConfig = {
  partner_id: string;
  locale: string;
  env: string;
  onAddToCart?: (products: unknown[]) => void;
  onClose?: () => void;
  onCheckout?: (data: unknown) => void;
  onClickProduct?: (product: unknown) => void;
};

export type Revieve = {
  Init: (config: RevieveConfig, callback?: () => void) => void;
  API: {
    show: () => void;
  };
};
