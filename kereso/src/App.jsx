import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
	const [text, setText] = useState("");
	const elemek = ["alma", "banán", "körte", "szilva", "ananász", "citrom", "autó", "asztal", "azta"];
	const valtozas = (e) => setText(e.target.value);
		const talalatok = elemek.filter((elem) =>
		elem.toLowerCase().includes(text.toLowerCase())
	);
	return (
	<>
	  <h2>Kereső</h2>
	  <input type="text" value={text} onInput={valtozas} placeholder="keresés..." />
	  <h3>Találatok:</h3>
	  <ul>
		{talalatok.length > 0 ? (talalatok.map((elem, i) => <li>{elem}</li>)) : (<li>Nincsenek találatok.</li>)}
	  </ul>
	  <h3>Összes elem:</h3>
	  <ul>
		{elemek.map((elem, i) => (<li>{elem}</li>))}
	  </ul>
	</>
	);
}