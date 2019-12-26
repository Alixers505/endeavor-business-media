const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'CPA' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('MS', { size: [300, 50] })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('tax-compliance', [
    { name: 'lb1', templateName: 'LB', path: 'tax-compliance/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'tax-compliance/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tax-compliance/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tax-compliance/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tax-compliance/load-more' },
    { name: 'reskin', path: 'tax-compliance/reskin' },
  ])
  .setAliasAdUnits('accounting-audit', [
    { name: 'lb1', templateName: 'LB', path: 'accounting-audit/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'accounting-audit/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'accounting-audit/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'accounting-audit/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'accounting-audit/load-more' },
    { name: 'reskin', path: 'accounting-audit/reskin' },
  ])
  .setAliasAdUnits('firm-management', [
    { name: 'lb1', templateName: 'LB', path: 'firm-management/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'firm-management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'firm-management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'firm-management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'firm-management/load-more' },
    { name: 'reskin', path: 'firm-management/reskin' },
  ])
  .setAliasAdUnits('payroll', [
    { name: 'lb1', templateName: 'LB', path: 'payroll/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'payroll/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'payroll/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'payroll/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'payroll/load-more' },
    { name: 'reskin', path: 'payroll/reskin' },
  ])
  .setAliasAdUnits('small-business', [
    { name: 'lb1', templateName: 'LB', path: 'small-business/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'small-business/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'small-business/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'small-business/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'small-business/load-more' },
    { name: 'reskin', path: 'small-business/reskin' },
  ])
  .setAliasAdUnits('reviews', [
    { name: 'lb1', templateName: 'LB', path: 'reviews/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'reviews/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'reviews/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'reviews/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'reviews/load-more' },
    { name: 'reskin', path: 'reviews/reskin' },
  ])
  .setAliasAdUnits('directory', [
    { name: 'lb1', templateName: 'LB', path: 'directory/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'directory/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'directory/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'directory/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'directory/load-more' },
    { name: 'reskin', path: 'directory/reskin' },
  ]);

module.exports = config;
