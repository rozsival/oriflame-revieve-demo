// NOTE: This component simulates expected Novage+ SPA which only loads Revieve to any page
import type { RevieveConfig } from '../../types/revieve';
import { useOpenRevieve } from '../hooks/useOpenRevieve';
import { useRevieve } from '../hooks/useRevieve';

const config: RevieveConfig = {
  partner_id: '5aPAwy5Z2m',
  locale: 'en',
  env: 'test',
  onAddToCart: (products) => console.log('onAddToCart', { products }),
  onCheckout: (data) => console.log('onCheckout', { data }),
  onClickProduct: (product) => console.log('onClickProduct', { product }),
  onClose: () => console.log('onClose'),
};

export const Revieve = () => {
  useRevieve(config);
  useOpenRevieve();
  return null;
};
