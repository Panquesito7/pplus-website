const content = [
  {q: `Why Project+ and not Project M 4.0?`,
  a: `Project+ is not an official continuation of Project M. Project M is the work of the PMDT which disbanded in 2015. Project+ will not be attempting to produce suggested plans for PM 4.0 and will not be using any unreleased assets unless given permission by the original creators.`},
  {q: `You shouldn't do this because...`,
  a: `You are more than welcome to discuss the ethics of P+ in the <code>#project-and-server</code> channel on the <a href="/discord">Discord Server</a>.`},
  {q: `When will this be tournament standard?`,
  a: `Whether P+ becomes the tournament standard at all is up to the community. While the P+ team encourages the community to try P+ and consider adopting it as a tournament standard, the P+ team does not have the power to impose P+ as the tournament standard and leave that to the discretion of the community.`},
  {q: `Will there be future versions of P+ in the future?`,
  a: `The current release is likely the final release for balance changes. Any future releases beyond v2 will be aimed at improving aesthetics and fixing bugs.`},
  {q: `Will it have a Netplay / Hackless / Homebrew / USB Loading release?`,
  a: `Yes, all of these of currently available <a href="/download">here</a>.`},
  {q: `What do I need to play P+?`,
  a: `It depends on the build you will be using. For the hackless build, you will need a Wii, an SD card that has a capacity of 2GB or less and a Super Smash Bros. Brawl disc. For Dolphin/Netplay, you will need computer and a Brawl ISO.`},
  {q: `What is being changed?`,
  a: `Compared to vanilla 3.6, Project+ fixes bugs found in 3.6, adjusts characters, and is built on the Legacy TE 2.5 build which itself includes many new features and content.<br>For a list of changes, you can find the most recent changelog <a href="/changes">here</a>.`},
  {q: `Will P+ have new characters in addition to Knuckles?`,
  a: `No new characters are planned to appear outside of Knuckles.`},
  {q: `Will P+ have rollback?`,
  a: `The Project+ team is not currently working on rollback due to a variety of reasons, the most prominent of which being the high amount of effort required to implement entirely new netcode.`},
  {q: `Will there be any new stages, costumes, or music?`,
  a: `Project+ includes 15 new stages, multiple new costumes, and a plethora of new music, on top of the many additions to Project M from the Legacy TE team.`},
  {q: `Is tilt stick fixed in P+?`,
  a: `Yes.`},
  {q: `Will L-Canceling be removed from P+ / Will auto L-canceling be enabled in P+?`,
  a: `Project+ does not want to create a ruleset, leaving that role to the community. P+ still includes the option to toggle auto L-cancel if any individual, group, or region prefers to enable auto L-canceling.`},
  {q: `Why did you nerf/buff <i>insert character name</i>?`,
  a: `Project+ seeks to bring the tiers suggested by the 3.6 meta closer together. In order to accomplish that, some characters have received buffs while others have received nerfs; however, no character is being forced into the high or low tiers. The P+ council anticipates that most characters will stay approximately close to their position in the Project M meta, but the apparent high tiers characters have been nerfed to bring them closer to the rest of the competition, and the apparent low tier characters have been given better tools to help their viability in the meta. In concurrence to balance, the P+ team recognizes that certain aspects of certain characters can be frustrating to play against and has made an intention to alleviate such frustrations while trying to preserve the appeal these aspects had to the players using these characters.`}
];

// TODO replace this HTML insertion with markup or something, i think a popular module is grey

export default function FAQ() {
  return (
    <main className="section">
      <div className="container maincard">
        <p className="title">F.A.Q.</p>
        <p className="subtitle is-spaced">(Frequently Asked Questions)</p>
        {
          content.map(({q, a}) =>
            <>
              <p className="title is-5 is-marginless" dangerouslySetInnerHTML={{__html: q}}></p>
              <p dangerouslySetInnerHTML={{__html: a}}></p>
              <br/>
            </>
          )
        }
      </div>
    </main>
  )
}