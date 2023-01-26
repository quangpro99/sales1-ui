import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
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

export default HeaderOnly;
