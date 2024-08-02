import "./App.css";
import Paragraph from "./components/Paragraph";

function App() {
	const nameApp = "Horia2";
	const dateApp = "1990-01-01";
	const countryApp = "Romania";
	return (
		<>
			<Paragraph
				name={nameApp}
				birthDate={dateApp}
				country={countryApp}
			></Paragraph>
		</>
	);
}

export default App;
