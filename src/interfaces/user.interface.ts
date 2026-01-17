export interface User {
    id: string;
    email: string;
    name: string;
    username: string;
    password: string;
    created_at: Date;
    updated_at?: Date | null;
}
