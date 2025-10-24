export const validateForm = (data: {
  name: string;
  subject: string;
  email: string;
  message: string;
}) => {
  if (!data.name.trim()) return 'Name is required.';
  if (!data.subject.trim()) return 'Subject is required.';
  if (!data.email.trim()) return 'Email is required.';
  if (!/\S+@\S+\.\S+/.test(data.email)) return 'Invalid email format.';
  if (!data.message.trim()) return 'Message cannot be empty.';
  if (data.message.length < 10)
    return 'Message must be at least 10 characters.';
  return null;
};
