import axios from "axios"



const API = axios.create({ baseURL: 'http://localhost:5000' })


API.interceptors.request.use((req) => {
    if(localStorage.getItem('user')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
    }
    return req;
})

export const login = (formData) => API.post('/users/login', formData) 

export const getAllDrawings = () => API.get(`/drawings`);
export const addDrawing = (drawing) => API.post(`/drawings`, drawing);
export const updateDrawing = (id,drawing) => API.patch(`/drawings/${id}`,drawing);
export const deleteDrawing = (id) => API.delete(`/drawings/${id}`);


export const getAllCourses = () => API.get(`/courses`);
export const getAllCoursesById = (id) => API.get(`/courses/${id}`);
export const createCourse = (course) => API.post(`/courses`,course);
export const updateCourse = (id, updatedCourse) => API.patch(`/courses/${id}`,updatedCourse);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);
export const enrollOnCourse = (id) => API.patch(`/courses/enroll/${id}`);


export const getAllBooks = () => API.get(`/books`);
export const createBook = (book) => API.post(`/books`,book);
export const deleteBook = (id) => API.delete(`/books/${id}`);


export const getAllEvents = () => API.get(`/events`);
export const createEvent = (event) => API.post(`/events`, event);
export const deleteEvent = (id) => API.delete(`/events/${id}`);
export const joinEvent = (id) => API.patch(`/events/join/${id}`);


export const getUserById = (id) => API.get(`/users/${id}`);
export const getAllUsers = () => API.get(`/users`); 
export const deteteUser = (id) => API.delete(`/users/${id}`); 


export const createOrder = (order) => API.post(`/orders`, order);
export const getOrder = (id) => API.get(`/orders/${id}`);
export const getAllOrders = () => API.get(`/orders`);
export const deleteOrder = (id) => API.delete(`/orders/${id}`);
export const acceptOrder = (id) => API.patch(`/orders/accept/${id}`);
export const rejectOrder = (id) => API.patch(`/orders/reject/${id}`);


export const makeReport = (report) => API.post(`/reports`, report);
export const getReportById = (id) => API.get(`/reports/${id}`);
export const getAllReports = () => API.get(`/reports`);
export const deleteReport = (id) => API.delete(`/reports/${id}`);




export const getAllProducts = (id) => API.get(`/cart/products/${id}`);
export const addProduct = (product) => API.post(`/cart/products`, product);
export const deleleProduct = (id) => API.delete(`/cart/products/${id}`);
export const deleleAllProducts = (id) => API.delete(`/cart/products_all/${id}`);


export const makeMail = (mail) => API.post(`/mails`, mail);
export const getAllMail = () => API.get(`/mails`);
export const getMailById = (id) => API.get(`/mails/${id}`);
export const deleteMail = (id) => API.delete(`/mails/${id}`);
