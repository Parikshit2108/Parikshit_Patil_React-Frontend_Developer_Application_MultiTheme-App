import Products from "../../components/Product/Products";

const Home = () => {
    return (
        <div className="pt-20 px-4">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Multi-Theme App</h2>
            <p>This is the home page. Enjoy switching between themes!</p>
            <Products/>
        </div>
    );
};
export default Home;
