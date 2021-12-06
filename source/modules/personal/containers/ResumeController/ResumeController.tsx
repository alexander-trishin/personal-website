import { HTMLAttributes, forwardRef, useEffect, useState } from 'react';

import { format, parseISO } from 'date-fns';

import { IEducation, IWorkExperience, Resume } from 'modules/personal/components';

import educationJson from './data/education.json';
import workExperienceJson from './data/work-experience.json';

const formatTimeline = (startDate: string, endDate: string | null) => {
    const convert = (date: string) => format(parseISO(date), 'MMMM yyyy');

    const start = convert(startDate);
    const end = endDate ? convert(endDate) : 'Present';

    return `${start} - ${end}`;
};

const ResumeController = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
    const [education, setEducation] = useState<IEducation[]>([]);
    const [workExperience, setWorkExperience] = useState<IWorkExperience[]>([]);

    useEffect(() => {
        setEducation(
            educationJson.map<IEducation>(info => {
                const { startDate, endDate, ...rest } = info;

                return {
                    ...rest,
                    period: formatTimeline(startDate, endDate)
                };
            })
        );

        setWorkExperience(
            workExperienceJson.map<IWorkExperience>(experience => {
                const { startDate, endDate, ...rest } = experience;

                return {
                    ...rest,
                    period: formatTimeline(startDate, endDate)
                };
            })
        );
    }, []);

    return <Resume {...props} ref={ref} education={education} workExperience={workExperience} />;
});

export default ResumeController;
