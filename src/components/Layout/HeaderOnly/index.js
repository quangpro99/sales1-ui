import Header from './Header';

function DefaultLayout({ children }) {
    //children: <Page /> trong App.js
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
