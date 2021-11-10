import { Fragment, HTMLAttributes, forwardRef } from 'react';

import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import { Typography } from 'elements';

import ResumeArticle from './ResumeArticle';
import ResumeBlock from './ResumeBlock';
import ResumeBlockList from './ResumeBlockList';
import type { IEducation, IWorkExperience } from './ResumeTypes';

interface ResumeProps extends HTMLAttributes<HTMLElement> {
    education: IEducation[];
    workExperience: IWorkExperience[];
}

const Resume = forwardRef<HTMLElement, ResumeProps>((props, ref) => {
    const { className, education, workExperience, ...rest } = props;

    const hasWorkExperience = workExperience.some(x => x.projects.length > 0);

    return (
        <section {...rest} ref={ref} className={clsx('bg-gray-100 py-32', className)}>
            <div className="text-center max-w-2xl mx-auto px-5 mb-8">
                <Typography className="text-primary uppercase" variant="h5">
                    Resume
                </Typography>
                <Typography className="text-gray-800" variant="h1">
                    More of my credentials.
                </Typography>

                <Typography className="text-gray-500" variant="subtitle">
                    {hasWorkExperience
                        ? 'Later this section will be available for download :)'
                        : 'This section is under active development...'}
                </Typography>
            </div>

            {hasWorkExperience && (
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
                                        const { period, area, objective, participation } = project;

                                        return (
                                            <Fragment key={period}>
                                                <ResumeBlockList
                                                    className={clsx({
                                                        'mt-6': projectIndex !== 0
                                                    })}
                                                >
                                                    <ResumeBlockList.Item header="Project">
                                                        {`[${area}] ${objective}`}
                                                    </ResumeBlockList.Item>
                                                    <ResumeBlockList.Item header="Period">
                                                        {period}
                                                    </ResumeBlockList.Item>
                                                    <ResumeBlockList.Item header="Participation" />
                                                    <ResumeBlockList
                                                        disc
                                                        className="text-primary ml-3"
                                                    >
                                                        {participation.map(value => (
                                                            <ResumeBlockList.Item key={value}>
                                                                <small>{value}</small>
                                                            </ResumeBlockList.Item>
                                                        ))}
                                                    </ResumeBlockList>
                                                </ResumeBlockList>
                                            </Fragment>
                                        );
                                    })}
                                </ResumeBlockList>
                            </ResumeBlock>
                        );
                    })}
                </ResumeArticle>
            )}

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
