import React from 'react'
import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import useWindowDimensions from './hooks/useWindowWidth'
import ProjectCardContent from './ProjectCardContent'

type Props = {
    project: any,
    index: number
}

const imgVariants = {
    hidden: ({ width, isEven }: { width: number, isEven: boolean }) => {
        return {
            x: isEven ? -width / 2 : width / 2
        }
    },
    visible: {
        x: 0,
        transition: { duration: 2 }
    }
}

const descriptionVariants = {
    hidden: ({ width, isEven }: { width: number, isEven: boolean }) => {
        return {
            x: isEven ? width / 2 : -width / 2
        }
    },
    visible: {
        x: 0,
        transition: { duration: 2 }
    }
}

const ProjectCard = ({ project, index }: Props) => {
    let { width } = useWindowDimensions();
    let { language } = useAppContext();

    const projectContent = project?.content.get(language) === undefined ? project?.content.get('en') : project.content.get(language);

    const isEven = index % 2 === 0;

    return (
        <div className={`${isEven ? 'card-even' : 'card-uneven'}`}>
            {/* Card for screens md and smaller */}
            <motion.img
                src={project.images[0]}
                alt={project.name}
                width={640}
                height={360}
                className={`lg:hidden rounded object-cover object-left-top ${isEven ? 'sm-card-img-even lg:card-img' : 'sm-card-img-uneven lg:card-img lg:card-img-uneven'}`}
                custom={{ width, isEven }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imgVariants}
            />
            <motion.div
                className={`lg:hidden ${isEven ? 'sm-card-description-even' : 'sm-card-description-uneven'}`}
                custom={{ width, isEven }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={descriptionVariants}
            >
                <ProjectCardContent project={project} projectContent={projectContent} />
            </motion.div>

            {/* Card for larger screens */}
            <motion.img
                src={project.images[0]}
                alt={project.name}
                width={854}
                height={480}
                className={`hidden lg:block rounded object-cover object-left-top lg:w-[60%] ${isEven ? 'sm-card-img-even lg:card-img' : 'sm-card-img-uneven lg:card-img lg:card-img-uneven'}`}
                custom={{ width, isEven }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imgVariants}
            />
            <div className={`hidden lg:block ${isEven ? 'lg:card-description-even' : 'lg:card-description-uneven'}`}>
                <ProjectCardContent project={project} projectContent={projectContent} />
            </div>
        </div>
    );
}

export default ProjectCard
