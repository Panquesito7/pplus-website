// Function says: This page uses getStaticProps to load the links to be displayed from /data/download.json,
// which Next.js then feeds into the Download component

import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Button, Heading } from "react-bulma-components";
import importedLinkGroups from "../data/download.json";
import { getSortedVersions } from "../lib/get-version";
import FAButton from "../components/FAButton";
import { YouTubePlayer } from "../components/YouTubePlayer";

interface LinkGroup {
  [title: string]: {
    url: string
    icon?: string
  }
}

function LinkGroup({ data }: { data: LinkGroup }) {
  return (
    <Button.Group>
      {Object.entries(data).map(([title, { url, icon }], index2) =>
        <FAButton
          color="link"
          key={index2}
          href={url}
          renderAs="a"
          icon={icon}
        >
          {title}
        </FAButton>
      )}
    </Button.Group>
  );
}

interface DownloadProps {
  linkGroups: LinkGroup[]
  latestVersion: string
}

async function incrementDownloadCounter() {
  const response = await fetch("https://api.countapi.xyz/hit/projectplusgame.com/counter");
  const { value } = await response.json();
  console.log(`Download counted. Downloads: ${value}`);
}

export default function Download({ linkGroups, latestVersion }: DownloadProps) {
  React.useEffect(() => {
    incrementDownloadCounter();
  });

  const title = `Download Project+ v${latestVersion}`;

  return (
    <>
      <Head><title>{title}</title></Head>
      <Heading>{title}</Heading>
      <Heading subtitle>Wii Lite only changes music compression to fit on a 2 GB SD card.</Heading>
      <Heading subtitle>The Modders Pack includes files for custom build creation, such as stage imagery templates and full resolution HD textures.</Heading>
      {linkGroups.map((group, index) => <LinkGroup key={index} data={group}/>)}
      <Heading subtitle>Need help installing Project+? Project M Nexus&apos;s in-depth guide has got you covered!</Heading>
      <YouTubePlayer
        id="4XynDH-eVDE"
        title="Project+ Install Guide Video YouTube Embed"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<DownloadProps> = async () => {
  const sortedVersions = await getSortedVersions();
  const latestVersion = sortedVersions[sortedVersions.length - 1];

  return {
    props: {
      linkGroups: importedLinkGroups,
      latestVersion
    }
  };
};
