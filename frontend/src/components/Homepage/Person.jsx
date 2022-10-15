const Person = ({name, role, picture}) => {
	return (
		<div className='member'>
			<img src={picture} alt={name}/>
			<p className='text secondary'>
				<strong>{name}</strong>
				{role}
			</p>
		</div>
	)
};

export default Person;
