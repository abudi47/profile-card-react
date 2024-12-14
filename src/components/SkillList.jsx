import React from 'react';

const skills = [
        {
          skill: "HTML+CSS",
          level: "advanced",
          color: "#2662EA"
        },
        {
          skill: "JavaScript",
          level: "advanced",
          color: "#EFD81D"
        },
        {
          skill: "Web Design",
          level: "advanced",
          color: "#C3DCAF"
        },
        {
          skill: "Git and GitHub",
          level: "intermediate",
          color: "#E84F33"
        },
        {
          skill: "React",
          level: "advanced",
          color: "#60DAFB"
        },
        {
          skill: "Svelte",
          level: "beginner",
          color: "#FF3B00"
        }
      ];

export const SkillList = () => {
  return (
    <div className='skill-list'>
     <SkillD />
    </div>
  )
}
function SkillD () {
        return (
                <>
                   {skills.map((s) => (
                        <div className="skill" style={{ backgroundColor: s.color}}>
                                <p>{s.skill}</p>
                                <p>{s.level==="advanced" ? "💪": ""}</p>
                                <p>{s.level==="intermediate" ? "👍": ""}</p>
                                <p>{s.level==="beginner" ? "👶": ""}</p>

                        </div>

                   ))}
                
                
                </>
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