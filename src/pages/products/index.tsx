import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./styles.scss";
import Users from "../users/index";
const Products = () => {
  return (
    <div className="products">
      All products
      <Users />
    </div>
  );
};

export default Products;
