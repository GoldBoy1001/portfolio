export default function BtnGitHub(prop) {
	return (
		<a href={prop.link} target="_blank" rel='noreferrer' className="btn-outline">
			<img src="../img/icons/gitHub-black.svg" alt="" />
			GitHub repo
		</a>
	)
}