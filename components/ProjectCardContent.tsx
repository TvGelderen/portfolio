import React from 'react'
import { BsEye, BsGithub } from 'react-icons/bs'
import { SkillData } from './data/SkillData'

type Props = {
    project: any,
    projectContent: any
}

const ProjectCardContent = ({ project, projectContent }: Props) => {
    return (
        <>
            <div className='w-[75%] m-auto flex justify-evenly items-center lg:pt-4 pb-4 border-b-2 border-dark-500'>
                {project.skills.map((projectSkill: any) => {
                    const skill = SkillData.find(s => s.name == projectSkill)
                    if (!skill) return;

                    return (
                        <div key={skill.name} className='flex flex-col justify-center items-center'>
                            <img
                                src={skill.image}
                                alt={skill.name}
                                width={40}
                                height={40}
                                className={`${skill.name === "Firebase" ? 'w-6' : 'w-7'}`}
                            />
                        </div>
                    );
                })}
            </div>
            <div className='px-6 py-4 text-[0.9rem] dark:text-dark-text'>
                {projectContent.brief_description}
            </div>
            <div className='px-4 pb-4 flex'>
                <a
                    target="_blank"
                    href={project.liveURL}
                    className='button-primary px-2 py-1 md:px-[12px] md:py-[6px] mr-4 rounded'
                    onClick={event => event.stopPropagation()}
                >
                    <BsEye className='h-5 w-4 mr-1' /><p className='text-[0.9rem]'>&nbsp;Live Demo</p>
                </a>
                <a
                    target="_blank"
                    href={project.githubURL}
                    className='button-secondary-bg'
                    onClick={event => event.stopPropagation()}
                >
                    <div className='button-secondary' >
                        <BsGithub className='h-5 w-4 mr-1' /><p className='text-[0.9rem]'>&nbsp;Code</p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ProjectCardContent
