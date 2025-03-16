export interface StackItem {
  name: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: StackItem[];
  images: string[];
  live: string;
  github: string;
}