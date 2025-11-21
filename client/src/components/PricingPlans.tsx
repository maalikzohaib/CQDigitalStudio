import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
}

interface PricingPlansProps {
  plans?: Plan[];
  title?: string;
  subtitle?: string;
}

const defaultPlans: Plan[] = [
  {
    name: 'Essential Shoot',
    description: 'Perfect for small events & basic coverage',
    price: 'PKR 25,000',
    period: '/ day',
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    features: [
      { text: '1 Video Camera', included: true },
      { text: '1 Photo Camera', included: true },
      { text: '1 Album', included: true },
      { text: 'Drone (Optional: +5,000)', included: true },
    ],
  },
  {
    name: 'Premium Coverage',
    description: 'Ideal for full events & premium production',
    price: 'PKR 45,000',
    period: '/ day',
    popular: true,
    buttonText: 'Get Started',
    buttonVariant: 'default',
    features: [
      { text: '2 Video Cameras', included: true },
      { text: '2 Photo Cameras', included: true },
      { text: '1 Album', included: true },
      { text: 'Drone Included', included: true },
    ],
  },
  {
    name: 'Custom Production',
    description: 'Build your own custom package with unlimited options',
    price: '',
    period: '',
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
    features: [
      { text: 'Unlimited Video Cameras', included: true },
      { text: 'Unlimited Photo Cameras', included: true },
      { text: 'Multiple Albums', included: true },
      { text: 'DSLR or Sony/Mirrorless Setups', included: true },
      { text: 'Drone Coverage Available', included: true },
      { text: 'Fully Customizable Based on Event Size', included: true },
    ],
  },
];

export const PricingPlans = ({
  plans = defaultPlans,
  title = 'Choose Your Plan',
  subtitle = 'Select the perfect plan for your needs. Upgrade or downgrade at any time.',
}: PricingPlansProps) => {
  const handleGetStarted = (planName: string) => {
    const phoneNumber = '923004266312'; // WhatsApp number without + or spaces
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName} plan. Can you provide more details?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${plan.popular
                ? 'border-primary shadow-lg scale-105 lg:scale-110'
                : 'border-border'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="mb-6">
                  {plan.price && (
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${feature.included
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                          }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span
                        className={`text-sm ${feature.included
                          ? 'text-foreground'
                          : 'text-muted-foreground line-through'
                          }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.buttonVariant || 'default'}
                  className="w-full"
                  size="lg"
                  onClick={() => handleGetStarted(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans are customizable. Contact us for specific requirements.
          </p>
        </div>
      </div>
    </div>
  );
};
