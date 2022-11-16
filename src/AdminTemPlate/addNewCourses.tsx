import React, { Fragment, useState } from "react";
// import '../AdminStyle/StylePages.css';
import { Form, Input, Select } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addCourseUploadImgAction } from "../AdminReducer/courseAdminAction";
import { GROUPID } from ".././util/setting";
import { AppDispatch, RootState } from '.././redux/configStore'

export default function AddNewCourses() {
  const [componentSize, setComponentSize] = useState<string>("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch:AppDispatch = useDispatch();

  const author = useSelector(
    (state: any) => state.UserManagermentReducer.userSignIn
  );

  
  const onFormLayoutChange = ({ size = '' }) => {
    setComponentSize(size);
  };

  const handleChangeFile = async (e: any) => {
    //Lấy file ra từ event
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      //Đem dữ liệu lưu vào formik
      await formik.setFieldValue("hinhAnh", file);
      //Tạo đối tượng đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
      formik.setFieldValue('hinhAnh', file);
      
    }
  };
  const toDay = new Date();
  const date =  toDay.getDate() + "/" + (toDay.getMonth() + 1) + "/" + toDay.getFullYear();
  const maKH = Number(`${toDay.getDate()}${(toDay.getMonth() + 1)}${toDay.getFullYear()}${toDay.getHours()}${toDay.getMinutes()}${toDay.getMilliseconds()}`);
console.log(maKH.toString())
const formik = useFormik({
  initialValues: {
    maKhoaHoc:maKH.toString(15),
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: {},
    maNhom: GROUPID,
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: author.taiKhoan,
  },
  onSubmit: (values: any) => {
    console.log('values', values);
    values.maNhom = GROUPID;
    let formData = new FormData();
    for (let key in values) {
      if (key !== "hinhAnh") {
        formData.append(key, values[key]);
      } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
      } 
    
    }
    console.log({values})
    //Gọi API gửi giá trị FormData về backend
    dispatch(addCourseUploadImgAction(formData));
  },
});

  return (
    <Fragment>
      <div style={{paddingLeft:'100px', }} className="py-12 ">
        <div className="max-w-7xl flex flex-row items-center mx-auto px-4 xl:px-0 sm:px-6 md:px-8 ">
        <h3 className="text-4xl">3.Thêm khoá học</h3>
        </div>
        <div style={{ backgroundColor:' #8dabcb;', padding:'10px'}} className="max-w-7xl mx-auto xl:px-0 sm:px-6 md:px-8   ">
          <div
            className="my-6 py-12 shadow-xl bg-white"
            style={{ border: "1px solid #ddd" }}
          >
            <Form
              onSubmitCapture={formik.handleSubmit}
              labelCol={{
                span: 3,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
            >
              <Form.Item label="Tên khóa học">
                <Input name="tenKhoaHoc" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Danh mục khóa học">
                <Select placeholder="Chọn danh mục khóa học" onChange={(values)=> formik.setFieldValue('maDanhMucKhoaHoc', values )} >
                 
                  <Select.Option value="FrontEnd"><div style={{background:'#8dabcb',marginLeft:'225px',marginRight:'800px'}}>Lập trình Front end</div></Select.Option>
                  <Select.Option value="FullStack"><div style={{background:'#8dabcb',marginLeft:'225px',marginRight:'800px'}}>Lập trình FullStack</div></Select.Option>
                  <Select.Option value="Design"><div style={{background:'#8dabcb',marginLeft:'225px',marginRight:'800px'}}>Thiết kế Web</div></Select.Option>
                  <Select.Option value="DiDong"><div style={{background:'#8dabcb',marginLeft:'225px',marginRight:'800px'}}>Lập trìh di động</div></Select.Option>
                  <Select.Option value="TuDuy"><div style={{background:'#8dabcb',marginLeft:'225px',marginRight:'800px'}}>Tư duy lập trình</div></Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Mô tả">
                <Input.TextArea name="moTa" onChange={formik.handleChange} />
              </Form.Item>
              <Form.Item label="Hình ảnh">
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  onChange={handleChangeFile}
                />
                <br />
                <div style={{ width: 200, height: "auto" }}>
                  <img src={imgSrc} alt="" />
                </div>
              </Form.Item>
              <Form.Item label="Ngày tạo">{date}</Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 3,
                }}
                label=""
              >
                <button
                  className="py-2 px-8 hover:shadow-xl transition-all duration-150"
                  type="submit"
                  style={{ backgroundColor: "#e96036", color: "#fff" }}
                >
                  Thêm khoá học
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
