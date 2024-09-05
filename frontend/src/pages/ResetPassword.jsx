import { useContext } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import authImg from "../assets/images/auth-img.jpg";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";
import { useFormik } from "formik";
import { resetPassword } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';

const ResetPassword = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      verificationCode: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.verificationCode) {
        errors.verificationCode = "Required";
      }
      if (!values.newPassword) {
        errors.newPassword = "Required";
      } else if (values.newPassword.length < 8) {
        errors.newPassword = "Password must be at least 8 characters";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.newPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await resetPassword(params.email, values.verificationCode, values.newPassword);
        if (response.ok) {
          setValue("AlertType", "primary");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
          setTimeout(() => {
            navigate('/login', { replace: true });
          }, 3000);
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
              <div className="card overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-6 d-none d-lg-block p-2">
                    <img src={authImg} alt="" className="img-fluid rounded h-100" />
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
                        <h4 className="fs-20">Reset Password</h4>
                        <p className="text-muted mb-3">
                          Enter your verification code, and new password to reset your password.
                        </p>

                        {/* form */}
                        <form onSubmit={formik.handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="verificationCode" className="form-label">
                              Verification Code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="verificationCode"
                              required
                              {...formik.getFieldProps('verificationCode')}
                              placeholder="Enter verification code"
                            />
                            {formik.errors.verificationCode ? (
                              <div className="text-danger">{formik.errors.verificationCode}</div>
                            ) : null}
                          </div>

                          <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">
                              New Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              id="newPassword"
                              required
                              {...formik.getFieldProps('newPassword')}
                              placeholder="Enter new password"
                            />
                            {formik.errors.newPassword ? (
                              <div className="text-danger">{formik.errors.newPassword}</div>
                            ) : null}
                          </div>

                          <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                              Confirm Password
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              id="confirmPassword"
                              required
                              {...formik.getFieldProps('confirmPassword')}
                              placeholder="Enter confirm password"
                            />
                            {formik.errors.confirmPassword ? (
                              <div className="text-danger">{formik.errors.confirmPassword}</div>
                            ) : null}
                          </div>

                          <div className="mb-0 text-start">
                            <button
                              className="btn btn-soft-primary w-100"
                              type="submit"
                              disabled={formik.isSubmitting}
                            >
                              <i className="ri-loop-left-line me-1 fw-bold"></i>
                              <span className="fw-bold">Reset Password</span>
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
                Back To <Link to="/" className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"><b>Log In</b></Link>
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

export default ResetPassword;