
declare global {
  interface TodoItem {
    id: number;
    status: number;
    title: string;
    description: string;
  }
}

export default global;
