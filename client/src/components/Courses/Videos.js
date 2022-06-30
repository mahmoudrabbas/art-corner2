import { Link, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Videos = () => {
    const {id} = useParams();

    const course = useSelector(state => state.courses.filter(course => course._id === id))[0]

    console.log(course)
    return (
        <div className='container-fluid m-0'>
            <div className='row'>
                <div style={{backgroundColor:"#b30707",minHeight:"93.3vh",color:"white"}} className='col-2'>
                    <h5>Lessons</h5>
                    {course?.links?course?.links.map((link,i) => (
                        <li key={i}>
                            <Link to={`${i}`} className='paragraph'>Video {++i}</Link>
                        </li>
                    )):(
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">&gt;</span>
                        </div>
                    )}
                </div>

                <div className='col-8 p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Videos


