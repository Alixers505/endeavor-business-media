const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/factory', label: 'Factory Automation' },
      { href: '/non-factory', label: 'Non-Factory' },
      { href: '/cameras-accessories', label: 'Cameras and Accessories' },
      { href: '/boards-software', label: 'Boards and Software' },
      { href: '/embedded', label: 'Embedded Vision' },
      { href: '/vision-systems-design-25-year-anniversary', label: '25th Anniversary Hub' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: '/directory', label: 'Buyer\'s Guide' },
      { href: 'https://visionsystemsdesigninnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
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
      { href: 'https://advancedtechnology.endeavorb2b.com/vision-systems-design/', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/factory', label: 'Factory Automation' },
        { href: '/non-factory', label: 'Non-Factory' },
        { href: '/cameras-accessories', label: 'Cameras and Accessories' },
        { href: '/boards-software', label: 'Boards and Software' },
        { href: '/embedded', label: 'Embedded Vision' },
        { href: '/vision-systems-design-25-year-anniversary', label: '25th Anniversary Hub' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/events', label: 'Events' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: '/directory', label: 'Buyer\'s Guide' },
        { href: 'https://visionsystemsdesigninnovators.secure-platform.com/a', label: 'Awards', target: '_blank' },
        { href: '/knowledge-zone', label: 'Knowledge Zone' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://advancedtechnology.endeavorb2b.com/vision-systems-design/', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
