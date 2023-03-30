import * as React from "react";
import { Album, ProjectMetadata, standardTags } from "lib/projects";
import ProjectDetails from "lib/elements/ProjectDetails";

import icon from "images/att-installation.png";
import ambientAudio from "audio/Misc/ctia_domeAudio.mp3";
import { TrackListing } from "lib/elements/TrackListing";

export const meta: ProjectMetadata = {
	name: "AT&T Installation",
	organization: "CSE",
	releaseYear: 2016,
	tags: [standardTags.music, standardTags.misc],
	slug: "att-installation",
	iconURL: icon,
	shortDescription: "Dynamic ambient music for a tradeshow exhibit",
};

const album: Album = {
	name: "AT&T Installation",
	projectURL: `/projects/${meta.slug}`,
	coverURL: icon,
	tracks: [
		{
			name: "Installation Ambience",
			audioUrl: ambientAudio,
			duration: 170,
		},
	],
};

export default function ATTInstallation() {
	return (
		<ProjectDetails
			meta={meta}
			info={[
				{
					title: "Developed With",
					data: ["FL Studio", "Unity"],
				},
				{
					title: "Roles",
					data: ["Composer", "VFX Developer"],
				},
			]}
			video={{
				src: "https://www.youtube.com/watch?v=u1p5M0UjOp0",
				native: false,
			}}
		>
			<p>
				In 2016 AT&T created an installation for the CTIA Mobile World
				Conference. The display was meant to showcase the connected capabilities
				of AT&T&apos;s network, underdiring the communication between devices on
				the internet of things.
			</p>
			<h3>Contribution</h3>
			<p>
				I was hired to write ambient music for the installation. This was an
				interesting project as the music was deeply integrated into the
				experience.
			</p>
			<TrackListing album={album} />
			<p>
				Your position in the circular showroom was tracked, and by stepping on
				three pads distributed throughout the room you could activate different
				points of interest. To accommodate this, the music was written with
				multiple layers that would merge seamlessly, as well as be spatially
				distributed to provide an immersive soundscape.
			</p>
			<p>
				I also contributed technical visual effect support for both the showroom
				and the touchscreen displays outside.
			</p>
		</ProjectDetails>
	);
}
