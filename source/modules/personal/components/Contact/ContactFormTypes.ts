export interface IContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    xmessage?: string;
}

export type SubmitStage = 'default' | 'submitting' | 'submitted' | 'error';
