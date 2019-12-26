const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'PlasticsMachinery' });

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
  .setAliasAdUnits('additive-manufacturing', [
    { name: 'lb1', templateName: 'LB', path: 'additive-manufacturing/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'additive-manufacturing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'additive-manufacturing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'additive-manufacturing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'additive-manufacturing/load-more' },
    { name: 'reskin', path: 'additive-manufacturing/reskin' },
  ])
  .setAliasAdUnits('blow-molding', [
    { name: 'lb1', templateName: 'LB', path: 'blow-molding/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'blow-molding/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'blow-molding/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'blow-molding/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'blow-molding/load-more' },
    { name: 'reskin', path: 'blow-molding/reskin' },
  ])
  .setAliasAdUnits('thermoforming', [
    { name: 'lb1', templateName: 'LB', path: 'thermoforming/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'thermoforming/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'thermoforming/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'thermoforming/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'thermoforming/load-more' },
    { name: 'reskin', path: 'thermoforming/reskin' },
  ])
  .setAliasAdUnits('compounding', [
    { name: 'lb1', templateName: 'LB', path: 'compounding/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'compounding/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'compounding/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'compounding/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'compounding/load-more' },
    { name: 'reskin', path: 'compounding/reskin' },
  ])
  .setAliasAdUnits('injection-molding', [
    { name: 'lb1', templateName: 'LB', path: 'injection-molding/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'injection-molding/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'injection-molding/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'injection-molding/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'injection-molding/load-more' },
    { name: 'reskin', path: 'injection-molding/reskin' },
  ])
  .setAliasAdUnits('extrusion', [
    { name: 'lb1', templateName: 'LB', path: 'extrusion/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'extrusion/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'extrusion/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'extrusion/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'extrusion/load-more' },
    { name: 'reskin', path: 'extrusion/reskin' },
  ])
  .setAliasAdUnits('recycling', [
    { name: 'lb1', templateName: 'LB', path: 'recycling/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'recycling/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'recycling/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'recycling/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'recycling/load-more' },
    { name: 'reskin', path: 'recycling/reskin' },
  ])
  .setAliasAdUnits('molds-tooling', [
    { name: 'lb1', templateName: 'LB', path: 'molds-tooling/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'molds-tooling/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'molds-tooling/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'molds-tooling/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'molds-tooling/load-more' },
    { name: 'reskin', path: 'molds-tooling/reskin' },
  ])
  .setAliasAdUnits('rotomolding', [
    { name: 'lb1', templateName: 'LB', path: 'rotomolding/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'rotomolding/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rotomolding/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rotomolding/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'rotomolding/load-more' },
    { name: 'reskin', path: 'rotomolding/reskin' },
  ]);

module.exports = config;
