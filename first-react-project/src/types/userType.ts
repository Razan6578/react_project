export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    options: string;
    token: string;
    createdAt: Date;
    comments: Comment[]
}