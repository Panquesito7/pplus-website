import { faDiscord, faGithub, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Heading, Box } from "react-bulma-components";
import { FAButton } from "shared/components/FAButton";

import styles from "../Home.module.scss";

export const Links = () => (
  <Box style={{ gridArea: "links" }}>
    <Heading subtitle className="mb-3" weight="light" size={2}>Join or follow us!</Heading>

    <div className={`flex-grow-children ${styles.links_container}`}>
      <FAButton icon={faDiscord} renderAs="a" href="/discord" title="Project+ Discord Server">Project+</FAButton>
      <FAButton icon={faReddit} renderAs="a" href="https://www.reddit.com/r/ssbpm" title="Project M Subreddit">r/ssbpm</FAButton>
      <FAButton icon={faTwitter} renderAs="a" href="https://twitter.com/ProjectPlusGame" title="Project+ on Twitter">@ProjectPlusGame</FAButton>
      <FAButton icon={faBook} renderAs="a" href="https://www.ssbwiki.com/Project%2B" title="SmashWiki Entry">SmashWiki</FAButton>
      <FAButton icon={faGithub} renderAs="a" href="https://github.com/FunctionDJ/project-plus-website" title="Website source code on GitHub">Website Source</FAButton>
    </div>
  </Box>
);