import axios from "axios"

const instance = axios.create({
    baseURL : "http://localhost:"+process.env.PORT
})

/**
 * This get request is only for the first render in admin application
 * @returns a list of applications (max 20) and total number of applications
 */
export async function getApplications(){
    const req = await instance.get("An endpoint which gets applications");
    return req.data
}

/**
 * Handles all the post requests for admin applications. 
 * @param {*} condtion A JSON objects contains all the filter info.
 * @param {*} max_applications The maximum number of applications fit in a page.
 * @param {*} num_page Indicates the current number of pages admin is looking at. (affect the query result)
 * @returns A number which is the total number of applications that matching the filter\
 * and a max_applications length of applications.
 */
export async function postApplicationFilter(condtion = null, max_applications = 20, num_page = 1){
    const req = await instance.post("An endpoint which gets applications");
    return req.data;
}

/**
 * Accepts one application given the student Id, then call postApplicationFilter to render new application information.
 * @param {*} user_id The id of the student who is accepted
 * @param {*} rolle The role which this student is appplying for
 * @param {*} condtion A JSON objects contains all the filter info.
 * @param {*} max_applications The maximum number of applications fit in a page.
 * @param {*} num_page Indicates the current number of pages admin is looking at. (affect the query result)
 * @returns A number which is the total number of applications that matching the filter\
 * and a max_applications length of applications.
 */
export async function acceptApplication(user_id,role,condtion=null,max_applications=20,num_page=1){
    const req = await instance.post("An endpoint which gets applications");
    if (req.data){
        const req = await instance.post("An endpoint which gets applications");
    }
    return req.data;
}

/**
 * Declines one application given the student Id, then call postApplicationFilter to render new application information.
 * @param {*} user_id The id of the student who is accepted
 * @param {*} rolle The role which this student is appplying for
 * @param {*} condition A JSON objects contains all the filter info.
 * @param {*} max_applications The maximum number of applications fit in a page.
 * @param {*} num_page Indicates the current number of pages admin is looking at. (affect the query result)
 * @returns A number which is the total number of applications that matching the filter\
 * and a max_applications length of applications.
 */
 export async function declineApplication(user_id,role,condition=null,max_applications=20,num_page=1){
    const req = await instance.post("An endpoint which gets applications");
    if (req.data){
        const req = await instance.post("An endpoint which gets applications");
    }
    return req.data;
 }

 export async function postStudentApplication(student){
    console.log("SENDING STUDENT APPLICATION");
    const req = await instance.post(
        "http://localhost:5000/applications/studentSubmit", student).then((response) => {
        console.log("STUDENT FORM SUBMITTED");
    });
 }

export default instance
