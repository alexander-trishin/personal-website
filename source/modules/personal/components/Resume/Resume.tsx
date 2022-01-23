import { Fragment, HTMLAttributes, forwardRef } from 'react';

import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import { Typography } from 'elements';

import ResumeArticle from './ResumeArticle';
import ResumeBlock from './ResumeBlock';
import ResumeBlockList from './ResumeBlockList';
import type { IEducation, IWorkExperience } from './ResumeTypes';
import Truncate from './Truncate';

interface ResumeProps extends HTMLAttributes<HTMLElement> {
    education: IEducation[];
    workExperience: IWorkExperience[];
}

const Resume = forwardRef<HTMLElement, ResumeProps>((props, ref) => {
    const { className, education, workExperience, ...rest } = props;

    return (
        <section {...rest} ref={ref} className={clsx('bg-neutral-100 py-32', className)}>
            <div className="text-center max-w-2xl mx-auto px-5 mb-8">
                <Typography className="text-primary uppercase" variant="h5">
                    Resume
                </Typography>
                <Typography className="text-neutral-800" variant="h1">
                    More of my credentials.
                </Typography>

                <Typography className="text-neutral-500" variant="subtitle">
                    This section is also available for download :)
                </Typography>
            </div>

            <ResumeArticle header="Work Experience" className="mb-16">
                {workExperience.map(item => {
                    const { company, position, period, projects } = item;

                    return (
                        <ResumeBlock
                            key={period}
                            icon={faGraduationCap}
                            periodHeader={position}
                            period={period}
                            contentHeader={company}
                        >
                            <ResumeBlockList>
                                {projects.map((project, projectIndex) => {
                                    const { description, participation, technologies } = project;

                                    return (
                                        <Fragment key={description}>
                                            <ResumeBlockList.Item header="Project">
                                                <Truncate>{description}</Truncate>
                                            </ResumeBlockList.Item>
                                            <ResumeBlockList.Item header="Participation">
                                                <Truncate>{participation}</Truncate>
                                            </ResumeBlockList.Item>
                                            <ResumeBlockList.Item
                                                header="Technologies/Tools"
                                                className={clsx({
                                                    'mb-8': projectIndex !== projects.length - 1
                                                })}
                                            >
                                                <Truncate>{technologies.join(', ')}</Truncate>
                                            </ResumeBlockList.Item>
                                        </Fragment>
                                    );
                                })}
                            </ResumeBlockList>
                        </ResumeBlock>
                    );
                })}
            </ResumeArticle>

            <ResumeArticle header="Education" className="mb-16">
                {education.map(item => {
                    const { degree, period, institution, faculty, department, speciality } = item;
                    const content = { faculty, department, speciality };

                    return (
                        <ResumeBlock
                            key={period}
                            icon={faBriefcase}
                            periodHeader={degree}
                            period={period}
                            contentHeader={institution}
                        >
                            <ResumeBlockList>
                                {Object.entries(content).map(([key, value]) => (
                                    <ResumeBlockList.Item key={key} header={key}>
                                        {value}
                                    </ResumeBlockList.Item>
                                ))}
                            </ResumeBlockList>
                        </ResumeBlock>
                    );
                })}
            </ResumeArticle>
        </section>
    );
});

Resume.displayName = 'Resume';

export default Resume;
