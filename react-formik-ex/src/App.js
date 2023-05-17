import { Formik } from "formik"
import "./App.css"
import * as Yup from "yup"
function App() {
    return (
        <div className="container">
            <div className="brand-box">
                <h1>Magic Form</h1>
                <p>Build Forms in React without tears</p>
            </div>
            <div className="magic-form">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        agree: false,
                        favouriteColor: ""
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name is required!"),
                        email: Yup.string().email().required("email is required"),
                        agree: Yup.boolean().required("u must agree term of use"),
                        favouriteColor: Yup.string()
                            .required("seç ə")
                            .oneOf(["red", "blue", "green"])
                    })}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                            setSubmitting(false)
                            resetForm()
                        }, 2000);
                    }}
                >
                    {({ values, handleChange, dirty, errors, touched, handleSubmit, handleReset, isSubmitting }) => (
                        <form className="magic-form" onSubmit={handleSubmit}>
                            <h3>Login</h3>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="rashad"
                                id="name"
                                className="input"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>
                            )}
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="rashad@gmail.com"
                                id="email"
                                className="input"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="favouriteColor" className="topMargin">Favourite Color</label>
                            <select name="favouriteColor" style={{
                                marginTop: 10,
                                width: "150px",
                                padding: "10px 15px",
                                outline: "none"
                            }} id="favouriteColor" value={values.favouriteColor} onChange={handleChange}>
                                <option value="" label="renkSeç" />
                                <option value="red" label="red" />
                                <option value="blue" label="blue" />
                                <option value="green" label="green" />
                            </select>
                            {errors.favouriteColor && touched.favouriteColor && (
                                <div className="input-feedback">{errors.favouriteColor}</div>
                            )}
                            <div className="checkbox topMargin">
                                <input type="checkbox" value={values.agree} onChange={handleChange} id="agree" />
                                <label htmlFor="agree" className="checkbox-label">Term of Use</label>
                            </div>
                            {errors.agree && touched.agree && (
                                <div className="input-feedback">{errors.agree}</div>
                            )}
                            <button type="submit" disabled={!dirty || isSubmitting} >Submit</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default App
