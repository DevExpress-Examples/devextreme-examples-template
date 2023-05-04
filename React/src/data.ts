export interface Task {
    ID?: number;
    Priority?: number;
    Status?: number;
    Subject?: string;
}

interface Priority {
    id?: number;
    text?: string;
}

export const priorities: Priority[] = [{
    id: 1, text: 'Low',
}, {
    id: 2, text: 'Normal',
}, {
    id: 3, text: 'High',
}, {
    id: 4, text: 'Urgent',
}];