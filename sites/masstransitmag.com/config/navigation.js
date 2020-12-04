const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/covid-19', label: 'COVID-19 News' },
      { href: '/bus', label: 'Bus' },
      { href: '/rail', label: 'Rail' },
      { href: '/technology', label: 'Technology' },
      { href: '/safety-security', label: 'Safety & Security' },
      { href: '/alt-mobility', label: 'Alt. Mobility' },
      { href: '/management', label: 'Management' },
      { href: '/transit-bids-rfp', label: 'Transit Bids' },
      { href: 'https://jobs.masstransitmag.com/', target: '_blank', label: 'Career Center' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: 'https://cityservices.endeavorb2b.com/mass-transit/', label: 'Advertise', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/directory', label: 'Supplier\'s Directory' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://cityservices.endeavorb2b.com/mass-transit/', label: 'Advertise', target: '_blank' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/covid-19', label: 'COVID-19 News' },
        { href: '/bus', label: 'Bus' },
        { href: '/rail', label: 'Rail' },
        { href: '/technology', label: 'Technology' },
        { href: '/safety-security', label: 'Safety & Security' },
        { href: '/alt-mobility', label: 'Alt. Mobility' },
        { href: '/management', label: 'Management' },
        { href: '/transit-bids-rfp', label: 'Transit Bids' },
        { href: 'https://jobs.masstransitmag.com/', target: '_blank', label: 'Career Center' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/directory', label: 'Supplier\'s Directory' },
        { href: '/events-calendar', label: 'Events Calendar' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/40-under-40', label: '40 under 40' },
        { href: '/transit-bids-rfp', label: 'Transit Bids RFP' },
        { href: '/special-report-safety-security', label: 'Special Report: Safety & Security' },
        { href: 'https://www.transitbussummit.com/', target: '_blank', label: 'Transit Bus Summit' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://cityservices.endeavorb2b.com/mass-transit/', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
