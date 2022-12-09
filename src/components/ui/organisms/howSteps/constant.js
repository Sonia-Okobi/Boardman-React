import buy from '../../../../assets/images/buy.png';
import buy2 from '../../../../assets/images/buy2.png';
import create from '../../../../assets/images/create.png';
import create2 from '../../../../assets/images/create2.png';
import seller from '../../../../assets/images/seller.png';
import seller2 from '../../../../assets/images/seller2.png';
import seller3 from '../../../../assets/images/seller3.png';
import seller4 from '../../../../assets/images/seller4.png';

export const steps = [
  {
    image: buy,
    image2: buy2,
    header: 'Create or Join an escrow payment',
    description:
      'As a buyer or seller, you create a transaction for a service or good to be delivered and send an invite via email or share a  payment link via SMS or WhatsApp or social media pages.',
  },

  {
    image: create,
    image2: create2,
    header: 'Buyer makes payment, held in escrow',
    description:
      'A deposit is made for the service or good in an insolvency-protected escrow account via credit or debit card, bank transfer, USSD and so on. Boardman also supports deposits via regulated banking partners.',
  },

  {
    image: seller,
    image2: seller2,
    header: 'Seller delivers on terms of transaction',
    description:
      'Boardman confirms the payment status of your transaction and notifies the seller of payment. Service or goods can now be delivered without risks.',
  },

  {
    image: seller3,
    image2: seller4,
    header: 'Seller receives the money after approval',
    description:
      'When the terms of the transaction are completed and verified, the funds are immediately made available for withdrawal. The seller can now make a withdrawal directly to their bank account.',
  },
];
