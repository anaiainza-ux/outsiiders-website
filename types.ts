
export type EventType = 'Conferencia' | 'Taller' | 'Panel' | 'Break';

export interface ScheduleEvent {
  id: string;
  time: string;
  type: EventType;
  title: string;
  speaker?: string;
  description: string;
  link?: string;
  highlight?: boolean;
  highlightLabel?: string;
  hideTypeTag?: boolean;
  hideTime?: boolean;
  isMini?: boolean;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  link: string;
}

export type AppView = 'home' | 'jobs' | 'access';
