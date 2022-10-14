import React, { useState } from 'react';
import participantData from "./participantData"

const ParticipantSearch = () => {

    const [filter, setFilter] = useState('');

    const search = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = participantData.data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                
                <div className='col-12 mb-5'>
                    <div className='mb-3 col-4 mx-auto text-center'>
                        <input type="text" className='form-control' placeholder='Search' value={filter} onChange={search.bind(this)} />
                    </div>
                </div>

                {dataSearch.map((item, index) => {
                    return (
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={item.student_num}>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.image} className="card-img-top"/>
                                <div className='card-body'>
                                    <h4 className='card-title'>{item.full_name}</h4>
                                    <br />
                                    <h6 className='card-title'>{item.email} <br /> {item.program}</h6>
                                    <p className='card-text'> <u>Year:</u> {item.year} <br /> <u>CGPA:</u> {item.cgpa} <br /> <u>Languages:</u> {item.languages} <br /> <u>Frameworks:</u> {item.frameworks} <br /> <u>Databases:</u> {item.databases} <br /> <u>Platforms:</u> {item.platforms}</p>
                                    <p><u>{item.resume}</u></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ParticipantSearch;