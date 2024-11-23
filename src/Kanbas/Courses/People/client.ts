import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${REMOTE_SERVER}/api/courses`;


export const fetchAllCourses = async (): Promise<any[]> => {
  try {
    const { data } = await axios.get(COURSES_API);
    return data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
};

export const createCourse = async (course: any): Promise<any> => {
  try {
    const { data } = await axios.post(COURSES_API, course);
    return data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};


export const updateCourse = async (courseId: string, course: any): Promise<any> => {
  try {
    const { data } = await axios.put(`${COURSES_API}/${courseId}`, course);
    return data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};


export const deleteCourse = async (courseId: string): Promise<void> => {
  try {
    await axios.delete(`${COURSES_API}/${courseId}`);
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

export const findModulesForCourse = async (courseId: string): Promise<any[]> => {
  try {
    console.log(`Making API call to: ${COURSES_API}/${courseId}/modules`); // Log endpoint
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    console.log(`Modules retrieved from API:`, response.data); // Log response
    return response.data;
  } catch (error) {
    console.error(`Error fetching modules for course ${courseId}:`, error);
    throw error;
  }
};

export const createModuleForCourse = async (courseId: string, module: any): Promise<any> => {
  try {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
  } catch (error) {
    console.error(`Error creating module for course ${courseId}:`, error);
    throw error;
  }
};