export interface Order {
    id: string;
    user_id: string;
    tracking_number: string;
    sender_name: string;
    recipient_name: string;
    origin: string;
    destination: string;
    status: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled';
    created_at: Date;
    created_by: string;
    updated_at?: Date | null;
    updated_by?: string;
}

export interface OrderHistory {
    id: string
    order_id: string
    status: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled';
    description: string
    location: string
    created_at: Date;
    created_by: string;
}

export interface getOrdersFilter {
    status?: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled';
    sender?: string
    recipient?: string
}