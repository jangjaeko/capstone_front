import React, { Component } from 'react'
import {UserOutlined} from '@ant-design/icons';
import logo from './Sections/lecture.png'
import Lecturelist from './Sections/Lecturelist';
//import Lecturelist from './Sections/Lecturelist';
function StudentPage() {

    return (
        <div style={{ width: '75%', margin: '6rem auto' }}>
        <div style={{ marginBottom:'50px',textAlign: 'center' }}>
            <h2> <UserOutlined style ={{verticalAlign : 'bottom'}}/> 김국문님    </h2>

        </div>
        <div style = {{textAlign: "center"}}>
            <Lecturelist />
        </div>
    </div>
    )
    
}

export default StudentPage
