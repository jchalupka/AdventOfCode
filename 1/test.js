const captchaSolverPart1 = require('./captchaSolverPart1');
const captchaSolverPart2 = require('./captchaSolverPart2');
const { assert } = require('chai');

function runTests(examples, fn) {
  examples.forEach((example) => {
    const {
      correctSum,
      input,
    } = example;

    it(`Should get sum of ${correctSum} from ${input}`, () => {
      assert.equal(fn(input), correctSum);
    });
  });
}

const part1Examples = [
  { correctSum: 3, input: '1122' },
  { correctSum: 4, input: '1111' },
  { correctSum: 0, input: '1234' },
  { correctSum: 9, input: '91212129' },
  { correctSum: 10, input: '912121129' },
  { correctSum: 1089, input: '9384274494683632359351641411374573466273164687337536769779487433749179185568461296233353611992672753778126935276769885424719553291616136172298883156626254151278852582397949697874462178536295341822137377563322815527592267791213115418635363174876132196234374887626324931371241841242873783493835919238421879116421481543826222278152238576762132577763214642569545298668935216911493462229629786978273548147171384321525952959196377728493632872618291183256888417779495124837828187298244786175872713299271766246696631257484453347125176233373232245382158656142179687576388951175953419286858673221138553912229576523123114871637487978775855777483921896568333282333137175739746234262744256254149233843517254613981476355147487975859685936527161737644929119345127273149762325158784595946931447738173246311763677997888425452294562823751136515271874725143582623717324394587398371298523368386595426714148717735345237657249712685895921433468949182235146698174393928288313985355769799485511749423552935992391624424575278333625476148888355716967628454862834463357834291788479677576561681171516128495737923155533438413156639155128831349894646317546536886319328573512622325789672115171618195548534941184939233914166432349321992879287349932819135919518955561456615989137221875483561599493342981595678961836562435436285673764213941758954489582656271121429555455368545289416981624961261963953364918377483776322142975937971552271642224933926326665557787586927667898255947116988278131974381388514274833852552695679713424836536348449273149415872522111522749448188993159814183411853994579147867385867619467777654943169814287928966652552129439822741856512265955664872454951159255617513136142717471774698224566543617595742753244142364438589729356939483387466363477224283477843889679221229344974441624448489853764111425798141258155246636844914711222931548722647298953744242682551562166463942694715631497895981643174194294826868561578586851326262619731272665397711381459745281218196515155917877694663186732599688912878149242688741584822831861748845817871681621697944472377688658368145698614861456518138376989688166921187224726942589996534179549171859786241718727295379' },
];

const part2Examples = [
  { correctSum: 6, input: '1212' },
  { correctSum: 0, input: '1221' },
  { correctSum: 4, input: '123425' },
  { correctSum: 12, input: '123123' },
  { correctSum: 4, input: '12131415' },
  { correctSum: , input: '9384274494683632359351641411374573466273164687337536769779487433749179185568461296233353611992672753778126935276769885424719553291616136172298883156626254151278852582397949697874462178536295341822137377563322815527592267791213115418635363174876132196234374887626324931371241841242873783493835919238421879116421481543826222278152238576762132577763214642569545298668935216911493462229629786978273548147171384321525952959196377728493632872618291183256888417779495124837828187298244786175872713299271766246696631257484453347125176233373232245382158656142179687576388951175953419286858673221138553912229576523123114871637487978775855777483921896568333282333137175739746234262744256254149233843517254613981476355147487975859685936527161737644929119345127273149762325158784595946931447738173246311763677997888425452294562823751136515271874725143582623717324394587398371298523368386595426714148717735345237657249712685895921433468949182235146698174393928288313985355769799485511749423552935992391624424575278333625476148888355716967628454862834463357834291788479677576561681171516128495737923155533438413156639155128831349894646317546536886319328573512622325789672115171618195548534941184939233914166432349321992879287349932819135919518955561456615989137221875483561599493342981595678961836562435436285673764213941758954489582656271121429555455368545289416981624961261963953364918377483776322142975937971552271642224933926326665557787586927667898255947116988278131974381388514274833852552695679713424836536348449273149415872522111522749448188993159814183411853994579147867385867619467777654943169814287928966652552129439822741856512265955664872454951159255617513136142717471774698224566543617595742753244142364438589729356939483387466363477224283477843889679221229344974441624448489853764111425798141258155246636844914711222931548722647298953744242682551562166463942694715631497895981643174194294826868561578586851326262619731272665397711381459745281218196515155917877694663186732599688912878149242688741584822831861748845817871681621697944472377688658368145698614861456518138376989688166921187224726942589996534179549171859786241718727295379' },
];

describe('Advent of Code 2017 day 1', () => {
  describe('Part 1', () => {
    runTests(part1Examples, captchaSolverPart1);
  });

  describe('Part 2', () => {
    runTests(part2Examples, captchaSolverPart2);
  });
});
