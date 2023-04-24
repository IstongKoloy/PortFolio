import React from 'react'

const Backend = () => {
    const backSkillsData = [
        {id: 1, skillName: "PHP", skillLevel: "Advanced"},
        {id: 2, skillName: "Laravel", skillLevel: "Basic"},
        {id: 3, skillName: "MySQL", skillLevel: "Advanced"},
    ]
    
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
            {
                backSkillsData.map(skillItem => (
                    <div className="skills__data" key={skillItem.id}>
                                <i className='bx bx-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">{skillItem.skillName}</h3>
                                    <span className="skills__level">{skillItem.skillLevel}</span>
                                </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Backend
