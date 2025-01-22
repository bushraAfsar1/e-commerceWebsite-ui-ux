import { FC } from 'react';

const FeaturesSection: FC = () => {
  const features = [
    {
      icon: '🏆', // Use emojis or replace with icons (e.g., from Heroicons or Font Awesome)
      title: 'High Quality',
      description: 'Crafted from top materials',
    },
    {
      icon: '🔒',
      title: 'Warranty Protection',
      description: 'Over 2 years',
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Order over 150 $',
    },
    {
      icon: '📞',
      title: '24 / 7 Support',
      description: 'Dedicated support',
    },
  ];

  return (
    <div className="bg-amber-50 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
