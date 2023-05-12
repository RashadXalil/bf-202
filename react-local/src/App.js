import { Formik } from 'formik';
import * as Yup from "yup"
import './App.css'
function App() {
    return (
        <div className="container">
            <div className="brand-box">
                <h1>Magic Form</h1>
            </div>
            <div className='magic-form'>
                <Formik initialValues={{
                    name: "",
                    email: "",
                    agree: false,
                    favouriteColors: ""
                }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("name fieldi mutleqdir"),
                        email: Yup.string().email().required("email mutleqdir"),
                        agree: Yup.boolean().required("mutleqdir"),
                        favouriteColors: Yup.string().oneOf(["red", "green", "blue", "black"])

                    })}

                    onSubmit={(values, { resetForm }) => {
                        localStorage.setItem("user", JSON.stringify(values))
                        resetForm()
                    }}
                >
                    {
                        ({ values, handleChange, handleSubmit, dirty, errors, touched }) => (
                            <form className="magic-form" onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input className='input' type="text" placeholder='name' id='name' value={values.name} onChange={handleChange} />
                                {errors.name && touched.name && <div className='input-feedback'>{errors.name}</div>}
                                <label htmlFor="email">Email</label>
                                <input className='input' type="email" placeholder='email' id='email' value={values.email} onChange={handleChange} />
                                {errors.email && touched.email && <div className='input-feedback'>{errors.email}</div>}
                                <select style={{
                                    marginTop: 10,
                                    width: "150px",
                                    padding: "10px 15px",
                                    outline: "none"
                                }} name="favouriteColors" id="favouriteColors" value={values.favouriteColors} onChange={handleChange}>
                                    <option value="" label='Bir reng secin' />
                                    <option value="red" label='Red' />
                                    <option value="green" label='Green' />
                                    <option value="blue" label='Blue' />
                                    <option value="black" label='Black' />
                                </select>
                                <div className='checkbox'>
                                    <input type="checkbox" name='agree' id='agree' value={values.agree} onChange={handleChange} />
                                    <label htmlFor="agree">Term Of use</label>
                                </div>
                                <button type='submit' disabled={!values.agree}>Submit</button>
                            </form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default App