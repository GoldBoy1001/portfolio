import Card from '../components/proj/proj'

import { project } from '../components/helpers/projectList'

export default function Projects() {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{project.map((project, i) => <Card title={project.title} key={project.id} img={project.img} index={i}/>)}
				</ul>
			</div>
		</main>
	)
}