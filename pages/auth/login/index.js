import LoginRegister from 'src/components/auth';
const Login = () => {
  return (
    <>
      <LoginRegister />
    </>
  );
};

Login.setPageConfig = {
  guestOnly: true
};

export default Login;
