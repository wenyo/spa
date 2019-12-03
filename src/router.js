import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import About from './About';
import Courses from './Courses';
import CoursesList from './CoursesList';
import CoursesDetail from './CoursesDetail';
import Booking from './Booking';
import ImgFrom from './ImgFrom';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes:[
        {
            path: '/',
            component: App,
            children:[
                {   path: 'about' ,
                    component: About
                },
                {   path: 'courses' ,
                    component: Courses,
                    children:[
                        {path: '' , component: CoursesList},
                        {path: ':id' , component: CoursesDetail}
                    ]
                },
                {   path: 'booking' ,
                    component: Booking
                },
                {   path: 'imgFrom' ,
                    component: ImgFrom
                },
            ],
        },
    ],
  });