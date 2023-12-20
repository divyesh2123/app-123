import React, { useState } from 'react'
import ReactSelect from "react-select";

export default function FullFormFunction() {


   const[state,setState] =useState({
    form: {
        name: "divyesh",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        gender: null,
        language: ["english"],
        country: "Canada",
        zipCode: ""
      },
      formErrors: {
        name: "FirstName is required",
        email: null,
        mobile: null,
        password: null,
        confirmPassword: null,
        gender: "",
        language: null,
        country: null,
        
      }
   });

   const countryList = [
    { value: "india", label: "India" },
    { value: "us", label: "US" },
    { value: "australia", label: "Australia" },
    { value: "Canada", label: "Canada" }
  ];
  const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
  ];


  var  validateNumber = evt => {
        var theEvent = evt || window.event;
    
        // Handle paste
      
          // Handle key press
          var key = theEvent.keyCode || theEvent.which;
        //  alert(key);
    
          key = String.fromCharCode(key);
    
          
        

        if(key)
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
          theEvent.returnValue = false;
          if (theEvent.preventDefault) theEvent.preventDefault();
        }
      }
    
   var   handleChange = e => {
    
      };
    
    var  validateField = (name, value, refValue) => {
      };
    
    var  validateForm = (form, formErrors) => {
      };
    
     var handleSubmit = () => {
        const { form, formErrors } = state;
        const errorObj = validateForm(form, formErrors);
        if (Object.keys(errorObj).length !== 0) {
          setState({...state, formErrors: { ...formErrors, ...errorObj } });
          return false;
        }
        console.log("Data: ", form);
      };

  return (
    <>
        <div className="signup-box">
          <p className="title">Sign up</p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Name:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={state.form.name}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                {state.formErrors.name && (
                  <span className="err">{state.formErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Email:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={state.form.email}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                {state.formErrors.email && (
                  <span className="err">{state.formErrors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Password:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={state.form.password}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                {state.formErrors.password && (
                  <span className="err">{state.formErrors.password}</span>
                )}
              </div>
              <div className="form-group">
                <label>
                  Confirm Password:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={state.form.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleChange}
                />
                {state.formErrors.confirmPassword && (
                  <span className="err">{state.formErrors.confirmPassword}</span>
                )}
              </div>
              <div className="form-group">
                <label className="mr-3">
                  Language:<span className="asterisk">*</span>
                </label>
                <div className="form-control border-0 p-0 pt-1">
                  {languageList.map((x, i) => {
                    return (
                      <label key={i} className="mr-2">
                        <input
                          type="checkbox"
                          name="language"
                          value={x.value}
                          checked={state.form.language.includes(x.value)}
                          onChange={handleChange}
                        />{" "}
                        {x.label}
                      </label>
                    );
                  })}
                </div>
                {state.formErrors.language && (
                  <span className="err">{state.formErrors.language}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Mobile:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="mobile"
                  value={state.form.mobile}
                  onChange={handleChange}
                  onBlur={handleChange}
                  onKeyPress={validateNumber}
                />
                {state.formErrors.mobile && (
                  <span className="err">{state.formErrors.mobile}</span>
                )}
              </div>
              <div className="form-group">
                <label className="mr-3">
                  Gender:<span className="asterisk">*</span>
                </label>
                <div className="form-control border-0 p-0 pt-1">
                  <label className="mr-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={state.form.gender === "male"}
                      onChange={handleChange}
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={state.form.gender == "female"}
                      onChange={handleChange}
                    />{" "}
                    Female
                  </label>
                </div>
                {state.formErrors.gender && (
                  <span className="err">{state.formErrors.gender}</span>
                )}
              </div>
              <div className="form-group">
                <label>Zip Code:</label>
                <input
                  className="form-control"
                  type="text"
                  name="zipCode"
                  value={state.form.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  Country:<span className="asterisk">*</span>
                </label>
                <ReactSelect
                  name="country"
                  options={countryList}
                  value={countryList.find(x => x.value === state.form.country)}
                  onChange={e =>
                    handleChange({
                      target: {
                        name: "country",
                        value: e.value
                      }
                    })
                  }
                />
                {state.formErrors.country && (
                  <span className="err">{state.formErrors.country}</span>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="button"
              className="btn btn-primary"
              value="Submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
        
      </>
  )
}