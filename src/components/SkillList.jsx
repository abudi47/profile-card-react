import React from 'react'
function Skills(props) {
    <div className='skill-list '>
        <h2>{props.name}</h2>
        <span>{props.emoji} </span>


        </div>
};
export const SkillList = () => {
  return (
    <div className='skill-list'>
        <div className='skill'>
            <Skills name="HTML-CSS"
                    emoji="💪"
                    />

        </div>
    </div>
  )
}