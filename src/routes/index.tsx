import AuthRouter from './AuthRoutes';
import AppRouter from './AppRoutes';

type Props = {
  isLoggedIn: boolean
}
export default function Router({ isLoggedIn }: Props) {
  if (!isLoggedIn) return <AuthRouter />;
  else return <AppRouter />;
}
