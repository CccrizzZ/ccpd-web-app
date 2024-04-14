import "./Globle.css"
import "./Warranty.css"
import ContactForm from './ContactForm';
import { FormValues } from './ContactForm'; // 引入类型定义

function Warranty() {
    
    const handleSubmit = (formData: FormValues) => {
    console.log(formData); // 在这里处理表单提交逻辑，可以发送数据到服务器等
  };
    return (
        
        <div className=" container-pg " >
            <div className="Title-War">
                <h1 className="H1-pg">Contact Form</h1>
                <p>All request will be answered within 24-48 hours.</p>
            </div>
            <div className="WebForm-War">
                <ContactForm onSubmit={handleSubmit} />
            </div>
        
        </div>
    )
  }
  
  export default Warranty
  