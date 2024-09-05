import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import authImg from "../assets/images/auth-img.jpg";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";
import { useFormik } from "formik";
import { login } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';
import { barrier } from "../middleware/securityMiddleware";

const Login = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await login(values.email, values.password);
        if (response.ok) {
          
          setValue("AlertType", "primary");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
          barrier(setValue,navigate);
          
        } else {
          setValue("AlertType", "danger");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
        }
      } catch (error) {
        setValue("AlertType", "danger");
        setValue("AlertMessage", error.data.message);
        setValue("AlertVisibility", true);
      }
      setSubmitting(false);
    },
  });

  return (
    <body className="authentication-bg">
      <Alert />
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-lg-10">
              <div className="card overflow-hidden bg-opacity-25">
                <div className="row g-0">
                  <div className="col-lg-6 d-none d-lg-block p-2">
                    <img
                      src={authImg}
                      alt=""
                      className="img-fluid rounded h-100"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex flex-column h-100">
                      <div className="auth-brand p-4">
                        <Link to="/" className="logo-light">
                          <img src={logo} alt="logo" height="56" />
                        </Link>
                        <Link to="/" className="logo-dark">
                          <img src={logoDark} alt="dark logo" height="56" />
                        </Link>
                      </div>
                      <div className="p-4 my-auto">
                        <h4 className="fs-20">Sign In</h4>
                        <p className="text-muted mb-3">
                          Enter your email address and password to access
                          account.
                        </p>

                        {/* form */}
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <label
                              htmlFor="emailaddress"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="emailaddress"
                              required
                              {...formik.getFieldProps('email')}
                              placeholder="Enter your email"
                            />
                            {formik.errors.email ? (
                              <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                          </div>
                          <div className="mb-3">
                            <Link
                              to="/forgot-password"
                              className="text-muted float-end"
                            >
                              <small>Forgot your password?</small>
                            </Link>
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              required
                              {...formik.getFieldProps('password')}
                              placeholder="Enter your password"
                            />
                            {formik.errors.password ? (
                              <div className="text-danger">{formik.errors.password}</div>
                            ) : null}
                          </div>

                          <div className="mb-0 d-grid text-center">
                            <button
                              className="btn btn-primary fw-semibold"
                              type="submit"
                              disabled={formik.isSubmitting}
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                        {/* end form*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-dark-emphasis">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
                >
                  <b>Sign up</b>
                </Link>
              </p>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
       
      </div>
      {/* end page */}
      
      <Footer />
      
    </body>
  );
};

export default Login;