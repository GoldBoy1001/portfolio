import { NavLink } from "react-router-dom"

export default function Card(prop) {
	return (
		<NavLink to={'/page/' + prop.index}>
			<li className="project" key={prop.id}>
				<div className="project__image">
				<img src={prop.img} alt="Project img" className="project__img" />
				</div>
				<h3 className="project__title">{prop.title}</h3>
			</li>
		</NavLink>
	)
}