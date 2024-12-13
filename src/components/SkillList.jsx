import React from 'react';



export const SkillList = () => {
  return (
    <div className='skill-list'>
            <Skills name="HTML-CSS"
                    emoji="💪"
                    color="blue"
                    />
            <Skills name="React"
                    emoji="🤝"
                    color="red"
                    />
            <Skills name="JavaScript"
                    emoji="💪"
                    color="green"
                    />
            <Skills name="Svelte"
                    emoji="🤝"
                    color="yellow"
                    />
            <Skills name="HTML-CSS"
                    emoji="💪"
                    color="orange"
                    />
            <Skills name="HTML-CSS"
                    emoji="🤝"
                    color="gray"
                    />

        
    </div>
  )
}

function Skills(props) {
    return (
    <div className='skill' style={{ backgroundColor: props.color }}>
        <span>{props.name}</span>
        <span>{props.emoji} </span>


        </div>
    );
}