export const prices = [
  {
    title: 'Naira',
    symbol: '#',
    data: [
      {
        title: 'Payments',
        headers: ['Amount', 'Processing', 'Minimum', 'Maximum'],
        data: [
          [' NGN 0 - NGN 250, 000', '1.5% + 101', 'NGN 11', 'NGN 2, 001'],
          [' NGN 250, 000.01 +', '1.5% + 1000', ' NGN 50', 'NGN 5, 000'],
        ],
      },
      {
        title: 'Withdrawals',
        headers: ['Method', 'Duration', 'Fee'],
        data: [
          ['Bank Transfer', 'Instantly', 'NGN 150.00'],
          ['Wire/Bank Transfer', '3-5 Business days', 'NGN 5, 000.00'],
        ],
      },
    ],
  },
  {
    title: 'USD',
    symbol: '$',
    data: [
      {
        title: 'Payments',
        headers: ['Amount', 'Processing', 'Minimum', 'Maximum'],
        data: [
          ['$ 0 - $ 250, 000', '1.5% + 101', '$ 150.00', '$ 2, 001'],
          ['$ 250, 000.01', '1.5% + 1000', '$ 150.00', '$ 2, 001'],
        ],
      },

      {
        title: 'Withdrawals',
        headers: ['Method', 'Duration', 'Fee'],
        data: [
          ['Bank Transfer', 'Instantly', '$ 150.00'],
          ['Wire/Bank Transfer', '3-5 Business days', '$ 150.00'],
        ],
      },
    ],
  },
  {
    title: 'GDP',
    symbol: '£',
    data: [
      {
        title: 'Payments',
        headers: ['Amount', 'Processing', 'Minimum', 'Maximum'],
        data: [
          ['£ 0 - £ 250, 000', '1.5% + 101', '£ 150.00', '£ 2, 001'],
          ['£ 2, 001', '1.5% + 1000', '£ 150.00', '£ 2, 001'],
        ],
      },
      {
        title: 'Withdrawals',
        headers: ['Method', 'Duration', 'Fee'],
        data: [
          ['Bank Transfer', 'Instantly', '£ 150.00'],
          ['Wire/Bank Transfer', '3-5 Business days', '£ 150.00'],
        ],
      },
    ],
  },
];
