import Cart_Product from "./Cart_Product/Cart_Product";
import Cart_Services from "./Cart_Services/Cart_Services";
import Cart_Summary from "./Cart_Summary/Cart_Summary";

const Cart_Main = () => {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex gap-6 relative items-start">
        <div className="flex-3">
          <Cart_Product />
          <Cart_Product />
        </div>
        <Cart_Summary />
      </section>
      <Cart_Services />
    </main>
  );
};

export default Cart_Main;
