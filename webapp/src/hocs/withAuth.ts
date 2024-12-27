import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// Tạo HOC cho component
const withAuth = (Component: any) => {
  // Trả về một component mới được bảo vệ
  return withPageAuthRequired(Component);
};

export default withAuth;
