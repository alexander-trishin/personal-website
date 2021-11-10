export interface IEducation {
    period: string;
    institution: string;
    faculty: string;
    department: string;
    speciality: string;
    degree: string;
}

export interface IProject {
    period: string;
    area: string;
    objective: string;
    roles: string[];
    participation: string[];
}

export interface IWorkExperience {
    period: string;
    company: string;
    position: string;
    projects: IProject[];
}
