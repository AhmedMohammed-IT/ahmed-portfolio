/**
 * Work experience. Matches the LinkedIn profile; the employer is kept confidential.
 * `end: 'Present'` marks the current role (used for the timeline marker state).
 */
export const experience = [
  {
    id: 'app-support-2026',
    role: 'App Support & Customer Service Specialist',
    company: 'App-Based Services Company (Confidential)',
    location: 'Saudi Arabia',
    start: 'Jan 2026',
    end: 'Present',
    current: true,
    summary:
      'Application and customer support for an app-based service: customers, service partners and internal staff, across on-site day shifts and remote night shifts.',
    columns: [
      {
        icon: 'lifebuoy',
        title: 'Support',
        items: [
          'Handle ~100 inquiries, complaints and app/account incidents a day by WhatsApp and phone, resolving most at first contact.',
          'Clear every open case by the end of each 8-hour shift; escalate only what needs another team, with clearly documented details.',
          'Follow each case through to closure and keep the customer informed.',
        ],
      },
      {
        icon: 'database',
        title: 'Accounts & data',
        items: [
          'Activated and verified 6,000+ user and partner accounts against requirements for accuracy and compliance.',
          'Resolve account access issues.',
          'Review and enter account and operational data, catching errors before they become customer issues.',
        ],
      },
      {
        icon: 'monitor',
        title: 'IT for staff',
        items: [
          'Support ~15 end users with hardware, software, Windows and basic network issues.',
          'Install and configure software on staff machines.',
          'Introduced text-expansion reply templates (Beeftext) that the team now uses for faster, consistent replies.',
        ],
      },
    ],
    skills: ['Application Support', 'Customer Service', 'Troubleshooting', 'Account Verification', 'Data Entry', 'Windows'],
  },
]
