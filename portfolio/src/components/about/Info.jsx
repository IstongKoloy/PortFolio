import React from 'react'

const Info = () => {
    const aboutData = [
        {id: 1, icon: "bx bx-award", title: "Experience", subtitle: "Office Staff"},
        {id: 2, icon: "bx bx-hard-hat", title: "Company", subtitle: "HRD Singapore Pte. Ltd."},
    ];
    
  return (
    <div className="about__info grid">
        {
            aboutData.map( item => (
                <div className="about__box" key={item.id}>
                    <i className={item.icon}></i>
                    <h3 className="about__title">{item.title}</h3>
                    <span className="about__subtitle">{item.subtitle}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Info
