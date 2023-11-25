import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'
import { useState, useEffect, useRef } from 'react';


export default function NavBtn() {
	const [teme, setTeme] = useState('light')
	const btnRef = useRef(null)

	useEffect(() => {
		if (teme === 'dark') {
			document.body.classList.add('dark')
			btnRef.current.classList.add('dark-mode-btn--active')
		} else {
			document.body.classList.remove('dark')
			btnRef.current.classList.remove('dark-mode-btn--active')
		}
	}, [teme])

	function temeFunc() {

		setTeme(prev => prev === 'light' ? 'dark' : 'light')
	}

	return (
		<button ref={btnRef} className="dark-mode-btn" onClick={temeFunc}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	)
}