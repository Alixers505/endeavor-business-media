const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'VSD' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'iav', templateName: 'IAV', path: 'default/iav' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('factory', [
    { name: 'lb1', templateName: 'LB1', path: 'factory/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'factory/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'factory/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'factory/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'factory/load-more' },
    { name: 'reskin', path: 'factory/reskin' },
  ])
  .setAliasAdUnits('non-factory', [
    { name: 'lb1', templateName: 'LB1', path: 'non-factory/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'non-factory/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'non-factory/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'non-factory/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'non-factory/load-more' },
    { name: 'reskin', path: 'non-factory/reskin' },
  ])
  .setAliasAdUnits('cameras', [
    { name: 'lb1', templateName: 'LB1', path: 'cameras/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'cameras/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cameras/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cameras/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cameras/load-more' },
    { name: 'reskin', path: 'cameras/reskin' },
  ])
  .setAliasAdUnits('boards-software', [
    { name: 'lb1', templateName: 'LB1', path: 'boards-software/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'boards-software/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'boards-software/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'boards-software/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'boards-software/load-more' },
    { name: 'reskin', path: 'boards-software/reskin' },
  ])
  .setAliasAdUnits('embedded', [
    { name: 'lb1', templateName: 'LB1', path: 'embedded/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'embedded/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'embedded/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'embedded/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'embedded/load-more' },
    { name: 'reskin', path: 'embedded/reskin' },
  ])
  .setAliasAdUnits('nextgen', [
    { name: 'lb1', templateName: 'LB1', path: 'nextgen/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'nextgen/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'nextgen/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'nextgen/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'nextgen/load-more' },
    { name: 'reskin', path: 'nextgen/reskin' },
  ])
  .setAliasAdUnits('emerging', [
    { name: 'lb1', templateName: 'LB1', path: 'emerging/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'emerging/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'emerging/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'emerging/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'emerging/load-more' },
    { name: 'reskin', path: 'emerging/reskin' },
  ])
  .setAliasAdUnits('cameras-accessories', [
    { name: 'lb1', templateName: 'LB1', path: 'cameras-accessories/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'cameras-accessories/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cameras-accessories/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cameras-accessories/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cameras-accessories/load-more' },
    { name: 'reskin', path: 'cameras-accessories/reskin' },
  ]);

module.exports = config;
