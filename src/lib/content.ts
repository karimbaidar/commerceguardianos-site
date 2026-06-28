import { appStoreUrl } from './config';

export const features = [
  {
    title: 'Risky address detection',
    text: 'Flags fake, incomplete, suspicious, mismatched, placeholder, or risky shipping addresses before fulfillment work begins.'
  },
  {
    title: 'Secure customer correction links',
    text: 'Send customers a secure path to confirm or correct delivery details, then review correction status from the merchant workflow.'
  },
  {
    title: 'Fulfillment risk review',
    text: 'Helps teams slow down the orders that need a second look before shipment, especially during fast fulfillment windows.'
  },
  {
    title: 'Revenue leak detection',
    text: 'Highlights pricing, catalog, margin-loss, and operational issues that can quietly reduce profit.'
  },
  {
    title: 'Catalog and pricing checks',
    text: 'Adds visibility into product and pricing signals that deserve review before small issues turn into support work.'
  },
  {
    title: 'Compliance-readiness support',
    text: 'Supports privacy-conscious workflows, customer-data handling visibility, and merchant-controlled review steps without guarantee claims.'
  }
];

export const segments = [
  'Jewelry and high-AOV products',
  'Fashion and fast fulfillment',
  'Skincare, cosmetics, and supplements',
  'Pet, home goods, electronics accessories',
  'Personalized products',
  'International shipping stores'
];

export const workflowSteps = [
  {
    title: 'Detect',
    text: 'Identify risky address, order, catalog, pricing, and fulfillment signals before a shipment leaves.'
  },
  {
    title: 'Review',
    text: 'Use Shopify-native order visibility, order tags, and correction status to decide what needs attention.'
  },
  {
    title: 'Correct',
    text: 'Send secure customer correction links when delivery details need confirmation or cleanup.'
  },
  {
    title: 'Protect',
    text: 'Reduce avoidable support work, failed deliveries, reshipments, refunds, chargebacks, and lost margin.'
  }
];

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    checks: '50 checks/month',
    description: 'Start in monitor or tag mode and understand order-risk signals before changing fulfillment workflows.'
  },
  {
    name: 'Starter',
    price: '$9',
    checks: '300 checks/month',
    description: 'Useful for smaller stores that need consistent wrong-address and fulfillment-risk review.'
  },
  {
    name: 'Growth',
    price: '$29',
    checks: '1,500 checks/month',
    description: 'Built for growing brands that need better visibility across support, fulfillment, and margin risks.'
  },
  {
    name: 'Scale',
    price: '$79',
    checks: '5,000 checks/month',
    description: 'For higher-volume teams that want order-risk checks embedded into daily operations.'
  }
];

export const faqs = [
  {
    question: 'Does CommerceGuardian OS change checkout?',
    answer: 'No. CommerceGuardian OS is built for Shopify Admin workflows and can start in monitor or tag mode before any fulfillment action is enabled.'
  },
  {
    question: 'Is this only an address validation app?',
    answer: 'No. Address-risk detection is one part of the product. The broader goal is to protect Shopify orders before fulfillment by surfacing address, order, fulfillment, revenue, catalog, and compliance-readiness signals.'
  },
  {
    question: 'Does CommerceGuardian OS replace legal, payment, or fulfillment review?',
    answer: 'No. It supports compliance-readiness visibility, privacy-conscious workflows, and order-risk review, but merchants remain responsible for their legal, payment, and fulfillment decisions.'
  },
  {
    question: 'Where is billing handled?',
    answer: 'Plan details may change. Final billing is handled through Shopify.'
  }
];

export const blogPosts = [
  {
    title: 'How to prevent wrong-address shipments on Shopify',
    href: '/blog/prevent-wrong-address-shipments-shopify/',
    description:
      'A practical workflow for catching risky shipping details, confirming customer corrections, and reducing avoidable fulfillment work.'
  },
  {
    title: 'How Shopify stores can reduce return-to-sender orders',
    href: '/blog/reduce-return-to-sender-shopify/',
    description:
      'Steps merchants can take before fulfillment to spot failed-delivery risks and protect support teams from repeat address issues.'
  },
  {
    title: 'Why order risk should be reviewed before fulfillment',
    href: '/blog/shopify-order-risk-before-fulfillment/',
    description:
      'A merchant-focused guide to address, margin, catalog, and fulfillment signals that deserve attention before shipment.'
  }
];

export const primaryCta = {
  label: 'Install on the Shopify App Store',
  href: appStoreUrl
};
