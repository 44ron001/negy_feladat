import { useState, useEffect } from 'react'
import './app.css'

export default function App() {
	const [text, setText] = useState("")
	useEffect(() => {
		const mentett = localStorage.getItem("szoveg")
		if (mentett) { setText(mentett); }
	}, [])
	useEffect(() => {
		localStorage.setItem("szoveg", text)
	}, [text])
	
	const valtozas = (e) => {
		setText(e.target.value)
	}
	return (
	<>
		<h2>localStorage</h2>
		<input type="text" value={text} onInput={valtozas}/>
		<p>Tárolt érték: {text}</p>
	</>
	)
}