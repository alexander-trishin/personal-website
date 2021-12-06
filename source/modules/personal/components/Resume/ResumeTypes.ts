export interface IEducation {
    period: string;
    institution: string;
    faculty: string;
    department: string;
    speciality: string;
    degree: string;
}

export interface IProject {
    description: string;
    participation: string;
    technologies: string[];
}

export interface IWorkExperience {
    period: string;
    company: string;
    position: string;
    projects: IProject[];
}
