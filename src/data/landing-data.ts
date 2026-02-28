/** Default landing page data - LuxeFlow CRM */

import type { LandingData } from '@/types/landing'

export const defaultLandingData: LandingData = {
  hero: {
    title: 'The operations-first CRM for luxury travel',
    subtitle:
      'Centralize clients, bookings, resort knowledge, and operations. Reduce missed actions, shorten handoffs, and increase conversion.',
    ctas: {
      primary: { label: 'Request Demo', href: '/demo' },
      secondary: { label: 'Sign Up', href: '/signup' },
    },
  },
  features: [
    {
      id: 'ops-command',
      title: 'Operations Command Center',
      description:
        '7-day check-ins/outs, due payments, overdue tasks, and approvals — never miss a deadline.',
      icon: 'LayoutDashboard',
    },
    {
      id: 'resort-bible',
      title: 'Resort Bible',
      description:
        'Faceted search, standardized records, and filters tailored for advisor queries.',
      icon: 'MapPin',
    },
    {
      id: 'bookings',
      title: 'Bookings Lifecycle',
      description:
        'End-to-end booking management from inquiry to post-trip follow-up.',
      icon: 'CalendarCheck',
    },
    {
      id: 'ai-assistant',
      title: 'AI Assistant',
      description:
        'Recommend resorts, draft itineraries, and create tasks from natural language.',
      icon: 'Sparkles',
    },
  ],
  integrations: [
    { name: 'Stripe', src: '/integrations/stripe.svg', href: 'https://stripe.com' },
    { name: 'Google Calendar', src: '/integrations/google.svg', href: 'https://google.com' },
    { name: 'Algolia', src: '/integrations/algolia.svg', href: 'https://algolia.com' },
    { name: 'OpenAI', src: '/integrations/openai.svg', href: 'https://openai.com' },
    { name: 'SendGrid', src: '/integrations/sendgrid.svg', href: 'https://sendgrid.com' },
  ],
  pricingTeaser: {
    title: 'Simple per-seat pricing',
    perSeat: 'Starting at $49/seat/month',
    highlights: [
      'Operations Command Center',
      'Resort Bible & search',
      'AI Assistant',
      'Unlimited bookings',
    ],
  },
  testimonials: [
    {
      id: 't1',
      quote:
        'LuxeFlow transformed how we manage our high-end clients. The Operations Command Center alone saved us 15 hours per week.',
      author: 'Sarah Chen',
      role: 'Director of Operations',
      company: 'Elite Travel Co.',
    },
    {
      id: 't2',
      quote:
        'The Resort Bible is a game-changer. Our advisors find properties in seconds instead of digging through spreadsheets.',
      author: 'Marcus Webb',
      role: 'Founder',
      company: 'Webb Luxury Travel',
    },
    {
      id: 't3',
      quote:
        'Finally, a CRM built for luxury travel. The AI Assistant helps us personalize every itinerary.',
      author: 'Elena Rodriguez',
      role: 'Senior Advisor',
      company: 'Voyage Privé',
    },
  ],
  logos: [
    { name: 'Elite Travel Co.', alt: 'Elite Travel Co.' },
    { name: 'Webb Luxury Travel', alt: 'Webb Luxury Travel' },
    { name: 'Voyage Privé', alt: 'Voyage Privé' },
    { name: 'Horizon Adventures', alt: 'Horizon Adventures' },
  ],
}
