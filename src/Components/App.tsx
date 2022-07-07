import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Babo from './Babo'; // temp just to have routes
import AddForm from './AddForm'; // temp just to have routes
import LibraryPage from './LibraryPage';

/**
 * The brain of the App
 * @returns A div containing all other components; everything
 * is nested inside a div of 'app-wrapper';
 * everything except the header nested inside a div of 'app-meat'
 */
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div id='app-wrapper'>
                <Nav />
                <div id='app-meat'>
                    <Routes>
                        <Route path='' element={<Home />} />

                        <Route path='babo' element={<Babo />} />

                        <Route path='add' element={<AddForm />} />

                        <Route path='book'>
                            <Route
                                path=':bookIdParam'
                                element={<LibraryPage />}
                            />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
