import React from 'react';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import Project from '../components/Project';

const Project1 = () => {
    return (
        <main>

            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <Buttons left={"/"} right={"/contact"} />
            </div>
        </main>
    );
};

export default Project1;