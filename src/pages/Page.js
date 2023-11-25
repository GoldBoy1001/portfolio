import BtnGitHub from './../components/btnGitHub/BtnGitHub'

import { useParams } from 'react-router-dom'

import { project } from '../components/helpers/projectList'

export default function Page() {
	const { id } = useParams()
	const proj = project[id]
	return (
		<main className="section">
			<div className="container">
				<div className="project-details">

					<h1 className="title-1">{proj.title}</h1>
					<img src={proj.imgBig} alt="" className="project-details__cover" />

					<div className="project-details__desc">
						<p>{proj.skills}</p>
					</div>

					<BtnGitHub link={proj.gitHubLink} />

				</div>
			</div>
		</main>
	)
}