export interface ISpondRequest {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Record<string, any>;
}

export interface IMemberType {
  name: string;
  id: string;
}

export interface IMember {
  id: string;

  firstName: string;
  lastName: string;

  profile: {
    email: string;
    phoneNumber: string;
  }

  type: string; // relates to IMemberType.id
}