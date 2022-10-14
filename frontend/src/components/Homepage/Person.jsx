const Person = ({name, role, picture}) => {
    return (
        <div className='member'>
            <img className='member' src={picture} alt={name}/>
            <p className='text secondary'>
                <strong>{name}</strong>
                <br/>
                {role}
            </p>
        </div>
    )
};

export default Person;
