import React, { useEffect, useState } from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import { userContext } from './components/context/userContext';

import './App.css'
import Header from './components/Header/Header'
import Gallary from './components/Gallary/Gallary'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Books from './components/Books/Books';
import Courses from './components/Courses/Courses';
import Videos from './components/Courses/Videos';

import Landing from './components/Landing/Landing';
import Welcome from './components/Redirect/Welcome';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Events from './components/Event/Events';
import Profile from './components/Profile/Profile';
import CourseForm from './components/Courses/CourseForm';
import EventForm from './components/Event/EventForm';
import Settings from './components/Settings/Settings';
import RecoverPassword from './components/Auth/ForgettenPassword/RecoverPassword';
import CourseEditing from './components/Courses/CourseEditing';
import DrawingEditing from './components/Drawing/DrawingEditing';
import ShowDrawings from './components/Profile/ShowDrawings';
import Test from './components/Test/Test';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';

import {useDispatch} from 'react-redux'
import { getAllEventsAction } from './redux/actions/eventActions';
import { getAllBooksAction } from './redux/actions/bookActions';
import { getAllCoursesAction } from './redux/actions/courseActions';
import { getAllDrawingsAction } from './redux/actions/drawingActions';
import { DrawingForm } from './components/Drawing/DrawingForm';
import { getAllUsers } from './redux/actions/userActions';
import { getAllProductsAction } from './redux/actions/cartActions';
import Orders from './components/Orders/Orders';
import { getAllReportsAction } from './redux/actions/reportActions';
import { getAllOrdersAction } from './redux/actions/orderActions';
import { Video } from './components/Courses/Video';
import Issues from './components/Issues/Issues';
import { getAllMailsAction } from './redux/actions/mailActions';
import Report from './components/Reports/Report';
import BookAdmin from './components/Books/BookAdmin';
import EventAdmin from './components/Event/EventAdmin';
import ShowCourses from './components/Profile/ShowCourses';
import Reading from './components/Books/Reading';
import Requests from './components/Orders/Requests';
import DeleteUser from './components/Deleting/DeleteUser';
import DeleteDrawing from './components/Deleting/DeleteDrawing';
import DeleteEvent from './components/Deleting/DeleteEvent';
import DeleteCourse from './components/Deleting/DeleteCourse';

const App = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const [price, setPrice] = useState(0);

    const navigate = useNavigate(); 

    const [userLogged, setUserLogged] = useState(false)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllEventsAction());
        dispatch(getAllBooksAction());
        dispatch(getAllCoursesAction());
        dispatch(getAllDrawingsAction());
        dispatch(getAllUsers());
        dispatch(getAllReportsAction());
        dispatch(getAllProductsAction(user?._id));
        dispatch(getAllOrdersAction());
        dispatch(getAllMailsAction());
    },[dispatch, user?._id])

    useEffect(() => {
        if(user){
            setUserLogged(true);
        }
    },[user, userLogged])

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    },[navigate])

    return (
        <div className='App'>
            <userContext.Provider value={{user,userLogged,setUserLogged}}>
                <Header cartProducts={cartProducts} />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/gallary' element={<Gallary />} />
                    <Route path='/drawings/edit/:id' element={<DrawingEditing />} />
                    <Route path='/all-drawings/:id' element={<ShowDrawings />} />
                    <Route path='/all-courses/:id' element={<ShowCourses />} />
                    <Route path='/books' element={<Books />} />
                    <Route path='/read-book/:id' element={<Reading />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/cart/:id' element={<Cart setCartProducts={setCartProducts} setPrice={setPrice} />} />
                    <Route path='/user/:id' element={<Profile />}>
                        <Route path='courses' element={<Courses />} />
                        <Route path='settings' element={<CourseForm />} />
                        <Route path='add-drawing' element={<DrawingForm />} />
                        <Route path='upload-course' element={<CourseForm />} />
                        <Route path='make-event' element={<EventForm />} />
                        <Route path='make-order' element={<EventForm />} />
                    </Route>
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/courses/course/:id' element={<Videos />}>
                        <Route path=':it' element={<Video />}></Route>
                    </Route>
                    <Route path='/courses/edit/:id' element={<CourseEditing />}/>
                    <Route path='/orders/:id' element={<Orders />} />
                    <Route path='/requests/:id' element={<Requests />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/forget-password' element={<RecoverPassword />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/welcome' element={<Welcome />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/payment' element={<Payment price={price} />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/admin' element={<Admin />}>
                        <Route path='issues' element={<Issues />} />
                        <Route path='reports' element={<Report />}/>
                        <Route path='events' element={<EventAdmin />} />
                        <Route path='books' element={<BookAdmin />} />
                        <Route path='delete-user' element={<DeleteUser />} />
                        <Route path='delete-drawing' element={<DeleteDrawing />}/>
                        <Route path='delete-event' element={<DeleteEvent />} />
                        <Route path='delete-course' element={<DeleteCourse />} />
                    </Route>
                    <Route path='/test' element={<Test />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </userContext.Provider>
        </div>
    )
}

export default App