import { GetCategoryCourses } from "../AdminService/GetCategoryService";
import { getCoursesServices } from "../AdminService/GetCoursesServices";
import {
  GET_CATEGORY_COURSES,
  GET_COURSES,
  GET_DETAILS_COURSES,
  GET_COURSES_EACH_CATEGORY,
} from "../AdminType/types/coursesType";

export const getCoursesAction = async (dispatch: any) => {
  try {
    const result = await getCoursesServices.getCourses();

    dispatch({
      type: GET_COURSES,
      arrCourses: result.data,
    });
  } catch (errors) {
    console.log(errors);
  }
};
export const getDetailsCoursesAction = (id: string) => {
  return async (dispatch: any) => {
    try {
      const result = await getCoursesServices.getDetailCourse(id);
      // console.log({result})
      dispatch({
        type: GET_DETAILS_COURSES,
        courseDetail: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const getCateCoursesAction = async (dispatch: any) => {
  try {
    const category = await GetCategoryCourses.getCategoryService();

    dispatch({
      type: GET_CATEGORY_COURSES,
      arrCateCourse: category.data,
    });
  } catch (errors) {
    console.log(errors);
  }
};

export const getCoursesEachCateActions = (maDanhMuc: string) => {
  return async (dispatch: any) => {
    try {
      const result = await getCoursesServices.getCoursesEachCategory(maDanhMuc);
      // console.log({result})
      dispatch({
        type: GET_COURSES_EACH_CATEGORY,
        arrCourseEachCate: result.data,
      });
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };
};