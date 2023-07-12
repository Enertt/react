import loginPageStyle from './loginPage.module.css';

export const RenderField = ({ input, placeholder, label, type, meta, props }) => {
    return (
      <div>
        <label className={loginPageStyle.labels} htmlFor={type}>{label}</label>
        <div>
          <input className={meta.touched && meta.error && loginPageStyle.error_inputs} {...input} {...props} placeholder={placeholder} type={type}/>
          {meta.touched && meta.error && <span className={loginPageStyle.error_spans}>{meta.error}</span>}
        </div>
      </div>
    )
  };