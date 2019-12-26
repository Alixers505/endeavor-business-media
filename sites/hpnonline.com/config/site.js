const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
      srcset: [
        'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
      srcset: [
        'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/HPN_Online', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/hpnonline', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-PGBWQKG',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'HPN Online features online exclusive content as well as feature articles and stories from our print publications. Access digital editions and recent issues for our magazine here.',
  },
  contactUs: {
    branding: {
      bgColor: '#000000',
      logo: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
    },
    to: 'krussell@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'krussell@endeavorb2b.com',
    sendFrom: 'HPN Online <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.hpnonline.com/files/base/ebm/hpn/image/static/logo/site_logo_white.png?h=60',
    bgColor: '#000000',
  },
};
