import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from '~/Routes'
import { DefaultLayout } from '~/components/Layout/DefaultLayout'

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {

          let Layout =  DefaultLayout; // Nếu bên route không có layout thì mặc định lấy defaultLayout

          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const Page = route.component;
          return <Route key={index} path={route.path} element={
            <Layout>
              <Page />
            </Layout>
          } />
        })}
      </Routes>
    </Router>
  );
}

export default App;
