import {Link} from "react-router-dom";

export default function Nav2() {
    return <ul className='text-white md:text-4xl text-3xl pb-4'>
        <Link to="/destination">
            <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>MOON</li>
        </Link>
        <Link to="/destination/europa">
            <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>EUROPA</li>
        </Link>
        <Link to="/destination/mars">
            <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>MARS</li>
        </Link>
        <Link to="/destination/titan">
            <li className='inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 hover:border-b-2 md:ml-2'>TITAN</li>
        </Link>
    </ul>
}