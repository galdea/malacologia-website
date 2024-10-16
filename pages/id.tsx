import Layout from "../components/layout/Layout";
import 'aos/dist/aos.css';
import "/public/assets/css/plugins/bootstrap.min.css";
import "/public/assets/css/plugins/font-awesome-pro.css";
import "/public/assets/css/plugins/nice-select.css";
import "/public/assets/css/plugins/swiper.bundle.css";
import "/public/assets/icon/font-awesome/css/all.css";
import "/public/assets/css/plugins/modal-video.min.css";
import "/public/assets/css/plugins/mobile.css";
import "/public/assets/css/plugins/aos.css";
import "/public/assets/css/typography.css";
import "/public/assets/css/master.css";
import "/public/assets/css/plugins/responsive.css";

const getServerSideProps = () => {  // Keeping the function name from the previous code
  return (
    <Layout headerStyle={25} footerStyle={13} breadcrumbTitle="Your Site Name">
      <div className="welcome-area text-center pt-10 pb-10">
        <div className="container">
          <h1 className="text-4xl font-bold my-5">Hello World</h1>
        </div>
      </div>
    </Layout>
  );
};

export default getServerSideProps;  // Ensure the export matches the original function name
