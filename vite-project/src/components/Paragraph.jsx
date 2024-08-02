const Paragraph = (props) => {
	const { name, birthDate, country } = props;

	return (
		<div>
			<p>{name}</p>
			<p>{birthDate}</p>
			<p>{country}</p>
		</div>
	);
};

export default Paragraph;
